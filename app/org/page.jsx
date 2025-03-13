"use client";
import News from "@/components/organization/landingPageSections/News";
import Services from "@/components/organization/landingPageSections/Services";
import Suggestions from "@/components/organization/landingPageSections/suggestions";
import LandingTopSlider from "@/components/organization/sliders/LandingTopSlider";
import RightOptions from "@/components/organization/landingPageSections/RightOptions";
import LeftOptions from "@/components/organization/landingPageSections/LeftOptions";
import Options from "@/components/organization/landingPageSections/Options";
import Catalog from "@/components/organization/landingPageSections/catalog";

export default function Home() {
  return (
    <>
      <section>
        <LandingTopSlider />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Options/>
      </section>
      <section>
        <Catalog/>
      </section>
    </>
  );
}
