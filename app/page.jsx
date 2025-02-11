'use client'
import BottomServices from "@/components/landingPageSections/BottomServices";
import Services from "@/components/landingPageSections/Services";
import LandingTopSlider from "@/components/sliders/LandingTopSlider";

export default function Home() {
  return (
    <>
      <section>
        <LandingTopSlider/>
      </section>
      <section>
        <Services/>
        <BottomServices/>
      </section>
    </>
  );
}
