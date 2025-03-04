import Link from 'next/link'
import Container from '../ui/Container'
import Button from '../ui/Button'

const navigation = [
  { name: 'Solutions', href: '#solutions' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white font-raleway">
              Indus AI
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition-colors font-raleway"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Button variant="secondary" size="sm" className="font-raleway">Sign In</Button>
            <Button size="sm" className="font-raleway">Get Started</Button>
          </div>
        </nav>
      </Container>
    </header>
  )
} 