import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./HeroSlider.css"
import img1 from "./assets/img1.jpg"
import img3 from "./assets/img3.jpg"
import couple from "./assets/couple.jpg"
import cp1 from "./assets/cp1.jpg"
import img4 from "./assets/img4.jpg"

const slides = [
  { id: 1, image: img1, title: "Your Perfect Wedding Day"},
  { id: 2, image: couple, title: "Create Unforgettable Moments" },
  { id: 3, image: img3, title: "Making Dreams Come True" },
  { id: 4, image: img4, title: "Crafting Everlasting Moments" },
  { id: 5, image: cp1, title: "Where Forever Begins" },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  return (
    <section className="hero-slider">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div key={slide.id} className={`slide ${index === currentSlide ? "active" : ""}`}>
            <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
            <div className="slide-overlay">
              <h1>{slide.title}</h1>
              <p className="subtitle">
              Elegant • Timeless • Yours Forever 
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="slider-btn prev-btn" onClick={prevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="slider-btn next-btn" onClick={nextSlide}>
        <ChevronRight size={32} />
      </button>

      <div className="slider-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
