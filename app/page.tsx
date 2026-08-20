import AboutSection from "@/components/AboutSection";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import CTASection from "@/components/CTASection";
import Ecosystem from "@/components/Ecosystem";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import FounderSection from "@/components/FounderSection";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";
import Programs from "@/components/Programs";
import StorySection from "@/components/StorySection";
import Testimonials from "@/components/Testimonials";
import TrustStrip from "@/components/TrustStrip";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ImpactStats />
        <AboutSection />
        <FounderSection />
        <WorkSection />
        <Ecosystem />
        <Programs />
        <StorySection />
        <Gallery />
        <Events />
        <Awards />
        <Testimonials />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
