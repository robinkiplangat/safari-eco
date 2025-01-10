import { MainLayout } from '@/layouts/MainLayout'
import { HeroSection } from '@/pages/HeroSection'
import { AboutSection } from '@/pages/AboutSection'
import { TechnologySection } from '@/pages/TechnologySection'
import { ImpactSection } from '@/pages/ImpactSection'
import { ContactSection } from '@/pages/ContactSection'

export default function LandingPage() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <TechnologySection />
      <ImpactSection />
      <ContactSection />
    </MainLayout>
  )
}
