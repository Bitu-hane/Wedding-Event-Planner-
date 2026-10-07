import HeroSlider from "./HeroSlider"
import ServicesSection from "./ServicesSection"
import AboutSection from "./AboutSection"
import "./Home.css"

export default function Home() {
  return (
    <div className="home-container">
      <HeroSlider />
      <ServicesSection />
      <AboutSection />
    </div>
  )
}
