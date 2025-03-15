"use client";
import Services from "@/components/organization/landingPageSections/Services";
import LandingTopSlider from "@/components/organization/sliders/LandingTopSlider";
import Options from "@/components/organization/landingPageSections/Options";
import Catalog from "@/components/organization/landingPageSections/Catalog";
import Comments from "@/components/organization/landingPageSections/Comments";

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
      <section>
        <Comments/>
      </section>
    </>
  );
}
