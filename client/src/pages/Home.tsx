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
      {/* 구글 지도 임베드 https://www.google.com/mymaps에서 수정 */}
      <div className="bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-uc-deep text-center">
          찾아오시는 길
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "500px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/d/embed?mid=12oKrUpLaWVwHJm1jAL0fPqiE7z5JiF4&ehbc=2E312F"
            width="100%"
            height="500"
            style={{ border: 0 }}
          />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "85px", // 가릴 높이
              background: "#f9fafb",
              zIndex: 10,
            }}
          ></div>
        </div>
      </div>
      <CTAPartnership />
    </>
  );
}
