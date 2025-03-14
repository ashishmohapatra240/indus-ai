import Container from "../ui/Container";
import Button from "../ui/Button";

const services = [
  {
    title: "Machine Learning Solutions",
    description:
      "Custom ML models tailored to your business needs, from predictive analytics to computer vision.",
    features: [
      "Predictive Analytics",
      "Computer Vision",
      "Pattern Recognition",
      "Data Mining",
    ],
  },
  {
    title: "Natural Language Processing",
    description:
      "Advanced NLP solutions for chatbots, text analysis, and automated content generation.",
    features: [
      "Sentiment Analysis",
      "Text Generation",
      "Language Understanding",
      "Chatbots",
    ],
  },
  {
    title: "AI Consulting",
    description:
      "Strategic guidance on AI implementation and digital transformation for your organization.",
    features: [
      "Strategy Development",
      "Technical Assessment",
      "Implementation",
      "Training",
    ],
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-gray-100">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 font-raleway">
            Comprehensive AI Solutions
          </h2>
          <p className="text-gray-900/60 text-lg font-raleway">
            Leverage the power of artificial intelligence to transform your
            business and stay ahead of the competition.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-12 relative group rounded-xl shadow-sm border border-gray-200"
            >
              <div className="relative">
                <div className="mb-8">
                  <span className="text-gray-400 text-sm font-raleway">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-raleway">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed font-raleway">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-12">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-500 flex items-center gap-2 font-raleway"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-400" />
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
  );
}
