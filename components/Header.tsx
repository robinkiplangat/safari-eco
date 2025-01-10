import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link className="mr-6 flex items-center space-x-2" href="/">
            <Image src="/logo.svg" alt="Safari Energy Solutions Logo" width={32} height={32} />
            <span className="hidden font-bold sm:inline-block">
              Safari Energy Solutions
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about">About</Link>
            <Link href="#technology">Technology</Link>
            <Link href="#impact">Impact</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
