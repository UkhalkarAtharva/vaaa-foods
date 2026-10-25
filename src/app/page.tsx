import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { TrustStrip } from "@/components/TrustStrip";
import { ProductCarousel } from "@/components/ProductCarousel";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyVaaaFoods } from "@/components/WhyVaaaFoods";
import { Occasions } from "@/components/Occasions";
import { AboutVarsha } from "@/components/AboutVarsha";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyBottomBar } from "@/components/StickyBottomBar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col relative w-full pt-16">
        <Hero />
        <MarqueeStrip />
        <TrustStrip />
        <ProductCarousel />
        <HowItWorks />
        <WhyVaaaFoods />
        <Occasions />
        <AboutVarsha />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
      <StickyBottomBar />
    </>
  );
}
