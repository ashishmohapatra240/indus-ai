import Navbar from "../components/navigation/Navbar";
import Footer from "../components/sections/Footer";
import Container from "../components/ui/Container";
import TeamMember from "../components/about/TeamMember";
import Image from "next/image";
import ReadyToTransform from "../components/sections/ReadyToTransform";
const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "AI Solutions Delivered", value: "500+" },
  { label: "Global Clients", value: "200+" },
];

const values = [
  {
    title: "Innovation First",
    description:
      "We constantly push the boundaries of what's possible with AI technology.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Client Success",
    description:
      "Your success is our success. We're committed to delivering measurable results.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Ethical AI",
    description:
      "We develop AI solutions with strong ethical principles and transparency.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our clients to ensure solutions meet their specific needs.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Vivek Gupta",
    role: "Chief Executive Officer",
    image: "/images/team/Vivek.jpg",
    bio: "Vivek Gupta is an AI entrepreneur, engineering leader, and innovator with over 13 years of experience in building scalable technology solutions across industries.",
    linkedin: "https://www.linkedin.com/in/vivekgupta668/",
  },
  {
    name: "Nihar Ranjan Rout",
    role: "Chief Technology Officer",
    image: "/images/team/Nihar.jpg",
    bio: "Transforming Businesses with Custom Software Solutions",
    linkedin: "https://www.linkedin.com/in/niharrout/",
  },
  {
    name: "Samikshya Kar",
    role: "Head of AI Solutions",
    image: "/images/team/Samikshya.jpg",
    bio: "Specialized in implementing AI solutions for Fortune 500 companies.",
    linkedin: "https://www.linkedin.com/in/samikshya-kar",
  },
];

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gray-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 font-raleway">
                Pioneering the Future of AI Technology
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-raleway">
                We&apos;re on a mission to transform businesses through the
                power of artificial intelligence. Our team of experts combines
                deep technical knowledge with practical business experience to
                deliver AI solutions that drive real results.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-3xl opacity-20" />
              <Image
                src="/images/about/hero.webp"
                alt="AI Technology"
                className="relative rounded-3xl shadow-xl"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2 font-raleway">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-raleway">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-900 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-raleway">
              Our Mission
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-raleway">
              To empower organizations with cutting-edge AI solutions that drive
              innovation, efficiency, and growth. We believe in making
              artificial intelligence accessible, ethical, and impactful for
              businesses of all sizes.
            </p>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
              Our Values
            </h2>
            <p className="text-gray-600 font-raleway">
              The principles that guide our work and relationships.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-raleway">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-raleway">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-raleway">
              Our Leadership Team
            </h2>
            <p className="text-gray-600 font-raleway">
              Meet the experts leading our mission to transform businesses
              through AI.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <TeamMember key={member.name} {...member} />
            ))}
          </div>
        </Container>
      </section>

      <ReadyToTransform />

      <Footer />
    </main>
  );
}
