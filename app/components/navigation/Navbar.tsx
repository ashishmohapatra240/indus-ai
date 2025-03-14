import Link from 'next/link'
import Container from '../ui/Container'
import Button from '../ui/Button'

const navigation = [
  { name: 'Solutions', href: '/solutions' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white backdrop-blur-lg border-b border-gray-200">
      <Container>
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 font-raleway">
              Indus AI
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-raleway"
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