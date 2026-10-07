import React from "react"
import "./ServicesSection.css"

const services = [
  {
    title: "Wedding Planning",
    description:
      "Complete wedding planning services from venue selection to day-of coordination. We handle every detail to ensure your special day is perfect.",
  },
  {
    title: "Engagement Events",
    description:
      "Celebrate your engagement with a beautifully planned event. From intimate dinners to grand celebrations, we make it memorable.",
  },
  {
    title: "Bridal Showers",
    description:
      "Create a delightful bridal shower experience with our expert planning. Personalized themes and activities for the bride-to-be.",
  },
  {
    title: "Anniversary Celebrations",
    description:
      "Commemorate your love with an elegant anniversary celebration. Special moments deserve special planning and attention to detail.",
  },
]

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services__inner">
        <h2 className="services__title">Our Services</h2>
        <p className="services__intro">
          We offer comprehensive event planning services to make your special moments unforgettable. Each service is
          tailored to your unique vision and preferences.
        </p>

        <div className="services__grid">
          {services.map((service, index) => (
            <article key={index} className="services__card">
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-description">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}