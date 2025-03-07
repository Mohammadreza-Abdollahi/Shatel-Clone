"use client";
import BottomOptions from "@/components/organization/landingPageSections/RightOptions";
import News from "@/components/organization/landingPageSections/News";
import Services from "@/components/organization/landingPageSections/Services";
import Suggestions from "@/components/organization/landingPageSections/suggestions";
import TopOptions from "@/components/organization/landingPageSections/LeftOptions";
import LandingTopSlider from "@/components/organization/sliders/LandingTopSlider";

export default function Home() {
  return (
    <>
      <section>
        <LandingTopSlider />
      </section>
      <section>
        <Services />
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
