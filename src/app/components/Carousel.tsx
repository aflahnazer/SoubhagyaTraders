'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface CarouselProps {
  images: {
    src: string
    alt: string
    title: string
    description: string
  }[]
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div 
          className="carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                onError={(e) => {
                  // Fallback to a gradient background if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <div className="carousel-overlay">
                <div className="carousel-content">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="carousel-btn carousel-btn-prev" onClick={goToPrevious}>
          &#8249;
        </button>
        <button className="carousel-btn carousel-btn-next" onClick={goToNext}>
          &#8250;
        </button>
        
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}