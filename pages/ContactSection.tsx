import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
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
  )
}
