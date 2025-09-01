import Hero from "@/sections/Hero";
import CredibilityStrip from "@/sections/CredibilityStrip";
import AboutUC from "@/sections/AboutUC";
import BusinessLines from "@/sections/BusinessLines";
import CaseGallery from "@/sections/CaseGallery";
import PRNews from "@/sections/PRNews";
import CTAPartnership from "@/sections/CTAPartnership";

export default function Home() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <AboutUC />
      <BusinessLines />
      <CaseGallery />
      <PRNews />
      {/* 구글 지도 임베드 */}
      <div className="w-full h-[400px]">
        <iframe
          src={`https://www.google.com/maps?q=${35.14673},${129.065694}&hl=ko&z=15&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <CTAPartnership />
    </>
  );
}
