import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import PlaylistsSection from "@/components/PlaylistsSection";
import ServicesSection from "@/components/ServicesSection";
import InfoSection from "@/components/InfoSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <PlaylistsSection />
        <ServicesSection />
        <InfoSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
