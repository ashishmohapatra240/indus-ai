import Container from '../ui/Container'
import Button from '../ui/Button'

const services = [
  {
    title: 'Machine Learning Solutions',
    description: 'Custom ML models tailored to your business needs, from predictive analytics to computer vision.',
    features: ['Predictive Analytics', 'Computer Vision', 'Pattern Recognition', 'Data Mining']
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions for chatbots, text analysis, and automated content generation.',
    features: ['Sentiment Analysis', 'Text Generation', 'Language Understanding', 'Chatbots']
  },
  {
    title: 'AI Consulting',
    description: 'Strategic guidance on AI implementation and digital transformation for your organization.',
    features: ['Strategy Development', 'Technical Assessment', 'Implementation', 'Training']
  }
]

export default function Services() {
  return (
    <section className="py-32 bg-black">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-white font-raleway">
            Comprehensive AI Solutions
          </h2>
          <p className="text-white/60 text-lg font-raleway">
            Leverage the power of artificial intelligence to transform your business
            and stay ahead of the competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-black p-12 relative group"
            >
              <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="mb-8">
                  <span className="text-white/30 text-sm font-raleway">0{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 font-raleway">{service.title}</h3>
                <p className="text-white/60 mb-8 leading-relaxed font-raleway">{service.description}</p>
                <ul className="space-y-3 mb-12">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-white/40 flex items-center gap-2 font-raleway">
                      <span className="w-1 h-1 rounded-full bg-white/40" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="secondary" size="sm" className="font-raleway">
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
} 