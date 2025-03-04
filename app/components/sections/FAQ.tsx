"use client";

import Container from '../ui/Container'
import { useState } from 'react'

const faqs = [
  {
    question: "How can AI benefit my business?",
    answer: "AI can enhance operational efficiency, improve decision-making, automate routine tasks, and provide valuable insights from your data. Our solutions are tailored to deliver measurable ROI across various business functions."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work across multiple sectors including finance, healthcare, retail, manufacturing, and technology. Our AI solutions are customized to address industry-specific challenges and requirements."
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on project scope and complexity. Typically, our initial solutions can be deployed within 2-3 months, with continuous optimization and scaling thereafter."
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer comprehensive support including 24/7 technical assistance, regular maintenance, performance monitoring, and continuous optimization of AI models to ensure optimal results."
  },
  {
    question: "How do you ensure data security?",
    answer: "We implement industry-leading security protocols and comply with global data protection standards. Your data is encrypted, securely stored, and handled according to strict privacy guidelines."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/[0.05]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-6 w-full flex items-center justify-between text-left font-raleway"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <span className={`ml-6 flex-shrink-0 text-white/40 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
          </svg>
        </span>
      </button>
      <div className={`transition-all duration-200 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-white/60 leading-relaxed font-raleway">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-32 bg-black border-t border-white/[0.05] font-raleway">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-white font-raleway">
            Frequently Asked Questions
          </h2>
          <p className="text-white/60 text-lg font-raleway">
            Get answers to common questions about our AI solutions and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  )
} 