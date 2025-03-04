import Container from '../ui/Container'
import Marquee from 'react-fast-marquee'

const clients = [
  { name: 'Microsoft' },
  { name: 'Google' },
  { name: 'Amazon' },
  { name: 'Meta' },
  { name: 'Apple' },
  { name: 'Tesla' },
  { name: 'IBM' },
  { name: 'Oracle' },
]

export default function ClientLogos() {
  return (
    <section className="py-24 border-t border-white/[0.05] overflow-hidden">
      <Container>
        <h2 className="text-center text-sm font-medium text-white/40 mb-16 font-raleway">
          Trusted by world-class companies
        </h2>
      </Container>
      <Marquee
        gradient={true}
        gradientColor="black"
        speed={50}
        className="overflow-hidden"
      >
        <div className="flex">
          {clients.map((client) => (
            <div
              key={client.name}
              className="text-2xl font-medium text-white/20 hover:text-white/40 transition-colors duration-300 w-[200px] flex items-center justify-center font-raleway"
            >
              {client.name}
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  )
} 