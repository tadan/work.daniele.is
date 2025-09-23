import { useState, useEffect, useRef } from 'react'

interface HeroSlideshowProps {
  images: string[]
  className?: string
}

const HeroSlideshow = ({ images, className = '' }: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Intersection Observer to trigger animation when in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  // Auto-advance slideshow
  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length, isVisible, prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg ${className}`}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            isVisible && !prefersReducedMotion
              ? index === currentIndex
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
              : index === 0
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image}
            alt={`Project showcase ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      
      {/* Indicators */}
      {!prefersReducedMotion && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex && isVisible
                  ? 'bg-white scale-125'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HeroSlideshow