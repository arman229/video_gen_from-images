import Image from "next/image";
import FeaturesSection from "./ui/Features";
import Navbar from "./ui/Navbar";
import HeroSection from "./ui/HeroSection";
import { HeroSectionWithVideo } from "./ui/HeroSectionWithVideo";
import { StepVideoCreation } from "./ui/StepVideoCreation";
import PricingSection from "./ui/Pricing";
import { FaqComponent } from "./ui/Faq";
import { Footer } from "./ui/Footer";
import { Team } from "./ui/Team";
import { Subscribe } from "./ui/Subscribe";
import VideoCarousel from "./ui/Swiper"

import TextSubmitForm from "./ui/example";

export default function Home() {
  return (
    <>
      <Navbar />

<TextSubmitForm/>
      <HeroSection />
      <VideoCarousel />

      <HeroSectionWithVideo />

      <FeaturesSection />
      <StepVideoCreation />
      <PricingSection />
      <Team />
      <FaqComponent />
      <Subscribe />
      <Footer />
    </>
  );
}
