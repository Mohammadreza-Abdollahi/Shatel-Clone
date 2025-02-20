"use client";
import BottomOptions from "@/components/landingPageSections/BottomOptions";
import BottomServices from "@/components/landingPageSections/BottomServices";
import Services from "@/components/landingPageSections/Services";
import TopOptions from "@/components/landingPageSections/TopOptions";
import LandingTopSlider from "@/components/sliders/LandingTopSlider";

export default function Home() {
  return (
    <>
      <section>
        <LandingTopSlider />
      </section>
      <section>
        <Services />
        <BottomServices />
      </section>
      <section className="shapes-bg py-14 bg-gray3Background">
        <TopOptions />
        <BottomOptions />
      </section>
    </>
  );
}
