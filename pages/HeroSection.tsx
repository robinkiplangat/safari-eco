import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
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
  )
}
