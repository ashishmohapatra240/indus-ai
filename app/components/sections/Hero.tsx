import Container from "../ui/Container";
import Button from "../ui/Button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-2 gap-x-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 font-raleway">
              Custom AI Development for Smarter Business
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-raleway">
              Empower your organization with cutting-edge AI solutions. From
              enterprise AI and custom LLMs to Conversational AI and intelligent
              automation, Indus AI helps businesses scale smarter, faster, and
              more efficiently.{" "}
              <span className="font-bold">Don’t just adapt—lead with AI.</span>
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                <a href="https://calendly.com/indusai-app/meet">
                  Schedule Demo
                </a>
              </Button>
              <Button variant="secondary" size="lg">
                <a href="https://www.linkedin.com/company/indus-ai/">
                  Learn More
                </a>
              </Button>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="relative aspect-square">
              <div className="absolute inset-0"></div>
              <div className="relative w-full h-full bg-white border border-gray-200 overflow-hidden">
                <Image
                  src="/images/hero.png"
                  alt="Hero Image"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
