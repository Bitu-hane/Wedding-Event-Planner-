// src/pages/FAQs.jsx or src/components/FAQs.jsx
import React, { useState } from "react"
import "./FAQs.css"

const faqs = [
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking 8-12 months in advance for optimal venue and vendor availability. However, we accommodate rush bookings when possible."
  },
  {
    question: "What is included in your planning services?",
    answer: "Our services include venue selection, vendor coordination, design consultation, timeline management, and full day-of coordination."
  },
  {
    question: "Do you work with a specific guest count range?",
    answer: "We work with events of all sizes, from intimate gatherings of 20 guests to grand celebrations of 500+."
  },
  {
    question: "What services do you offer as a wedding planner?",
    answer: "As a wedding planner, we offer a range of services, including event design and styling, vendor recommendations and management, budget planning, timeline creation, on-site coordination, and overall wedding management."
  },
  {
    question: "How much does wedding planning typically cost?",
    answer: "The cost of wedding planning services can vary depending on several factors such as the complexity of the event, the size of the guest list, location, and specific services required. We offer customized packages tailored to each couple's needs and budget."
  },
  {
    question: "Can you help us find and book vendors for our wedding?",
    answer: "Absolutely! We have an extensive network of trusted vendors including photographers, florists, caterers, DJs, and more. We will assist you in selecting the right vendors that align with your style and preferences, negotiate contracts, and manage all communication with them."
  },
  {
    question: "Will you be present on the wedding day?",
    answer: "As your wedding planner, we will be present on the wedding day to ensure everything runs smoothly. We will oversee the setup, coordinate with vendors, manage the timeline, handle any unexpected issues, and ensure you can enjoy your special day stress-free."
  },
  {
    question: "Can you help us create a wedding budget?",
    answer: "Absolutely! We will work closely with you to establish a realistic budget for your wedding. We have experience in allocating funds to different aspects of the event and can provide guidance on cost-saving strategies and where to prioritize your spending."
  },
  {
    question: "Can you assist with destination weddings?",
    answer: "Absolutely! We have experience planning destination weddings in various locations. We can help you with logistics, travel arrangements, venue selection, and coordination with local vendors, ensuring a seamless and memorable experience for you and your guests."
  },
  {
    question: "Can we provide input and make decisions throughout the planning process?",
    answer: "Absolutely! Your input and vision are crucial in creating your dream wedding. We will involve you in the decision-making process, provide recommendations, and present you with options while respecting your preferences and style."
  },
  {
    question: "What happens if something goes wrong on the wedding day?",
    answer: "As experienced wedding planners, we are prepared to handle any unexpected situations that may arise. We have contingency plans in place, a team of professionals to assist us, and the expertise to troubleshoot and solve problems discreetly, ensuring minimal disruption to your day."
  }
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faqs-page">

      {/* Hero Header with Bride Image */}
      <header className="faqs-hero">
        <div className="faqs-hero-overlay"></div>
        <div className="faqs-hero-content">
          <h1>Frequently Asked Questions</h1>
        </div>
      </header>

      {/* FAQs Body */}
      <section className="faqs-body">
        <div className="faqs-container">
          <h2>Your Questions, Answered with Love</h2>
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="faq-question">
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}