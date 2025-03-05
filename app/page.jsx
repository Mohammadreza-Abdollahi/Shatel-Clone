"use client";

import BottomOptions from "@/components/personal/landingPageSections/BottomOptions";
import BottomServices from "@/components/personal/landingPageSections/BottomServices";
import News from "@/components/personal/landingPageSections/News";
import Services from "@/components/personal/landingPageSections/Services";
import Suggestions from "@/components/personal/landingPageSections/suggestions";
import TopOptions from "@/components/personal/landingPageSections/TopOptions";
import LandingTopSlider from "@/components/personal/sliders/LandingTopSlider";

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
      <section>
        <Suggestions/>
      </section>
      <section className="shapes-bg py-20 pb-32 bg-gray3Background">
        <News/>
      </section>
    </>
  );
}
