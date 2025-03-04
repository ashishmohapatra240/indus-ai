import Navbar from './components/navigation/Navbar'
import ClientLogos from './components/sections/ClientLogos'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Footer from './components/sections/Footer'

import Hero from './components/sections/Hero'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
