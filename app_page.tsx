import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero-background.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Safari Energy Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-100 md:text-xl dark:text-zinc-400">
                  Transforming waste into energy, powering a sustainable future for Kenya
                </p>
              </div>
              <div className="space-x-4">
                <Button>Learn More</Button>
                <Button variant="outline">Contact Us</Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
            <p className="mt-4 max-w-[700px] text-zinc-700 md:text-xl">
              Transforming waste into valuable energy resources while promoting environmental sustainability and economic growth in Kenya.
            </p>
          </div>
        </section>

        <section id="technology" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Technology</h2>
            <p className="mt-4 max-w-[700px] text-zinc-700 md:text-xl">
              We specialize in waste-to-energy conversion, transforming plastics and tires into petroleum fuel. Our innovative process addresses both waste management and energy needs in Kenya.
            </p>
          </div>
        </section>

        <section id="impact" className="w-full py-12 md:py-24 lg:py-32 bg-orange-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Impact</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-green-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3v19" />
                  <path d="M5 20c2 0 3-1 3-3V7c0-2-1-3-3-3" />
                  <path d="M19 20c-2 0-3-1-3-3V7c0-2 1-3 3-3" />
                </svg>
                <h3 className="text-xl font-bold">Environmental Impact</h3>
                <p className="text-sm text-zinc-700 text-center">
                  Reducing waste in landfills and decreasing reliance on fossil fuels
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-yellow-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.2 6.7a9.9 9.9 0 0 0-13.4-.1" />
                  <path d="M18.6 9.7a6 6 0 0 0-8.2-.1" />
                  <path d="M17 12.5a2 2 0 0 0-2.5-.1" />
                  <path d="M12 17.3a2 2 0 0 1-2.1-.1" />
                  <path d="M8.4 19.9a6 6 0 0 1-3-5.1" />
                  <path d="M6.8 17.3a9.9 9.9 0 0 1-3-7.6" />
                </svg>
                <h3 className="text-xl font-bold">Economic Potential</h3>
                <p className="text-sm text-zinc-700 text-center">
                  Creating jobs and stimulating economic growth in the energy sector
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <svg
                  className=" h-12 w-12 text-blue-500"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 22v-5" />
                  <path d="M9 8V2" />
                  <path d="M15 8V2" />
                  <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
                </svg>
                <h3 className="text-xl font-bold">Technological Innovation</h3>
                <p className="text-sm text-zinc-700 text-center">
                  Pioneering advanced waste-to-energy conversion techniques
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
            <p className="mt-4 max-w-[700px] text-zinc-700 md:text-xl">
              Interested in our solutions? Contact us to learn more about how we can help you contribute to a sustainable future.
            </p>
            <div className="mt-6">
              <Button>Contact Us</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 Safari Energy Solutions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

