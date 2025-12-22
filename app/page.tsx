import PricingSection from '@/components/PricingSection'
import AffordablePricingHero from '@/components/AffordablePricingHero'

export default function Home() {
  return (
    <main className="min-h-screen">
      <AffordablePricingHero />
      <PricingSection />
    </main>
  )
}

