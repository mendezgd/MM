import { useEffect, useRef } from 'react'

interface PerformanceMetrics {
  lcp: number
  fid: number
  cls: number
  loadTime: number
  domContentLoaded: number
}

interface PerformanceNavigationTiming extends PerformanceEntry {
  loadEventEnd: number;
  loadEventStart: number;
  domContentLoadedEventEnd: number;
  domContentLoadedEventStart: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export function PerformanceMonitor() {
  const metricsRef = useRef<PerformanceMetrics>({
    lcp: 0,
    fid: 0,
    cls: 0,
    loadTime: 0,
    domContentLoaded: 0
  })

  useEffect(() => {
    // Only run in production and if PerformanceObserver is available
    if (process.env.NODE_ENV === 'development' || !('PerformanceObserver' in window)) {
      return
    }

    const metrics = metricsRef.current

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      metrics.lcp = lastEntry.startTime

      // Report to analytics if needed
      if (lastEntry.startTime > 2500) {
        console.warn('LCP is too slow:', lastEntry.startTime)
      }
    })
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming
        const fid = fidEntry.processingStart - fidEntry.startTime
        metrics.fid = fid

        if (fid > 100) {
          console.warn('FID is too slow:', fid)
        }
      })
    })
    fidObserver.observe({ entryTypes: ['first-input'] })

    // Cumulative Layout Shift (CLS)
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const layoutEntry = entry as LayoutShiftEntry
        if (!layoutEntry.hadRecentInput) {
          clsValue += layoutEntry.value
          metrics.cls = clsValue

          if (clsValue > 0.1) {
            console.warn('CLS is too high:', clsValue)
          }
        }
      })
    })
    clsObserver.observe({ entryTypes: ['layout-shift'] })

    // Monitor page load performance
    const handleLoad = () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        if (navigation) {
          metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart
          metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart
        }
      }, 0)
    }

    if (typeof window !== 'undefined') {
      const win = window as Window
      win.addEventListener('load', handleLoad)

      return () => {
        win.removeEventListener('load', handleLoad)
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }

    return () => {
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}
