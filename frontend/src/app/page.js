import Image from "next/image";
import LeadFeature from "@/components/leadfeature";
import OurStory from "@/components/ourstory";
import BottomFeature from "@/components/bottomfeature";
import WhatWeHave from "@/components/whatwehave";
import Social from "@/components/social";
import ContactUs from "@/components/contactus";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section>
      <LeadFeature />
      <OurStory />
      <BottomFeature />
      <WhatWeHave />
      <Social />
      <ContactUs />
      <Footer />
    </section>
  );
}
