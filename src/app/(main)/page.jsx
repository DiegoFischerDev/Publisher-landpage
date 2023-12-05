'use client'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import CalendlyComponent from '@/components/CalendlyComponent'
import ExtensionShowoffComponent2 from '@/components/ExtensionShowoffComponent2'
import VideoSection from '@/components/VideoSection'
import HeroImageSlide from '@/components/HeroImageSlide'
import { Hero } from '@/components/Hero'
import { HowItWorks } from '@/components/HowItWorks'
import SuiteShowOffComponent from '@/components/SuiteShowOffComponment'

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <SecondaryFeatures />
      <Pricing />
      <CalendlyComponent></CalendlyComponent>
      {/* <HowItWorks></HowItWorks> */}
      {/* <SuiteShowOffComponent></SuiteShowOffComponent> */}
      {/* <PrimaryFeatures /> */}
      {/* <CallToAction /> */}
      {/* <Reviews /> */}
      {/* <Faqs /> */}
    </>
  )
}
