import {
  useEffect,
  useState,
  TouchEvent,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { OptimizedImage } from "./ui/optimized-image";

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export function Carousel({
  images,
  autoPlay = false,
  interval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  // Memoize navigation functions to prevent unnecessary re-renders
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Set up auto-play functionality with cleanup
  useEffect(() => {
    if (!autoPlay) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [autoPlay, interval, images.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        carouselRef.current &&
        carouselRef.current.contains(event.target as Node)
      ) {
        switch (event.key) {
          case "ArrowLeft":
            event.preventDefault();
            goToPrevious();
            break;
          case "ArrowRight":
            event.preventDefault();
            goToNext();
            break;
          case "Home":
            event.preventDefault();
            goToSlide(0);
            break;
          case "End":
            event.preventDefault();
            goToSlide(images.length - 1);
            break;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious, goToSlide, images.length]);

  const onTouchStart = useCallback((e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious]);

  // Memoize the transform style to prevent unnecessary re-renders
  const transformStyle = useMemo(
    () => ({
      transform: `translateX(-${currentIndex * 100}%)`,
    }),
    [currentIndex]
  );

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-[300px] sm:h-[400px] md:aspect-[4/3] rounded-lg bg-gray-100"
      role="region"
      aria-label="Galería de imágenes"
      aria-live="polite"
      tabIndex={0}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex w-full h-full transition-transform duration-500 ease-in-out"
          style={transformStyle}
          aria-label="Lista de imágenes"
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center"
              aria-hidden={index !== currentIndex}
              aria-label={`Imagen ${index + 1} de ${images.length}`}
            >
              <OptimizedImage
                src={image}
                alt={`Imagen de administración de consorcios ${index + 1}`}
                className="w-full h-full object-contain"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Overlay gradient for better button visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors z-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Imagen anterior"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-1.5 sm:p-2 rounded-full hover:bg-white transition-colors z-10 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        aria-label="Imagen siguiente"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 sm:w-6 sm:h-6"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dots indicator */}
      <div
        className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-10"
        aria-label="Navegación de imágenes"
      >
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
              index === currentIndex
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
            aria-pressed={index === currentIndex}
          />
        ))}
      </div>

      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Imagen {currentIndex + 1} de {images.length}
      </div>
    </div>
  );
}
