import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilarSection from "@/components/PilarSection";
import PilotSection from "@/components/PilotSection";
import AssistantSection from "@/components/AssistantSection";
import WorkflowSection from "@/components/WorkflowSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f8fafc]">
      <Navbar />
      <HeroSection />
      <PilarSection />
      <PilotSection />
      <AssistantSection />
      <WorkflowSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
