import { useEffect } from "react";

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

interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ("PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);

        // Report to analytics if needed
        if (lastEntry.startTime > 2500) {
          console.warn("LCP is too slow:", lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry;
          console.log("FID:", fidEntry.processingStart - fidEntry.startTime);

          if (fidEntry.processingStart - fidEntry.startTime > 100) {
            console.warn(
              "FID is too slow:",
              fidEntry.processingStart - fidEntry.startTime
            );
          }
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const layoutEntry = entry as LayoutShiftEntry;
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
            console.log("CLS:", clsValue);

            if (clsValue > 0.1) {
              console.warn("CLS is too high:", clsValue);
            }
          }
        });
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });

      // Cleanup
      return () => {
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }

    // Monitor page load performance
    const handleLoad = () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType(
          "navigation"
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log(
            "Page Load Time:",
            navigation.loadEventEnd - navigation.loadEventStart
          );
          console.log(
            "DOM Content Loaded:",
            navigation.domContentLoadedEventEnd -
              navigation.domContentLoadedEventStart
          );
        }
      }, 0);
    };
    if (typeof window !== "undefined") {
      const win = window as Window;
      win.addEventListener("load", handleLoad);

      return () => {
        win.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
