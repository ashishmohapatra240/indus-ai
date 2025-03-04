import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <Container className="relative">
        <div className="lg:grid lg:grid-cols-2 gap-x-16 items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50 mb-8 font-raleway">
              AI Solutions for the Future
            </h1>
            <p className="text-xl text-white/60 mb-10 leading-relaxed font-raleway">
              Empowering businesses with cutting-edge AI solutions. We turn
              complex challenges into intelligent opportunities.
            </p>
            <div className="flex gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <div className="relative aspect-square">
              <div className="absolute inset-0 bg-blue-500/10 blur-3xl"></div>
              <div className="relative w-full h-full bg-black border border-white/10 overflow-hidden">
                <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src="/videos/hero.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
