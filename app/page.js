import Navbar from "./navbar/page";
import HeroSection from "./hero/page";
import About from "./about/page";
import Tracks from "./tracks/page";
import Sponsors from "./sponsors/page";
import Organizers from "./organizers/page";
import { FAQSection } from "./faqs/page";
import ContactUsSection from "./contactus/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Tracks />
      <Sponsors />
      <Organizers />
      <FAQSection />
      <ContactUsSection />
    </>
  );
}
