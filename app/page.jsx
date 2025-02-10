'use client'
import Services from "@/components/landingPageSections/Services";
import LandingTopSlider from "@/components/sliders/LandingTopSlider";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <LandingTopSlider/>
      </section>
      <section style={{backgroundColor: "#fafcfd"}}>
        <Services/>
      </section>
    </>
  );
}
