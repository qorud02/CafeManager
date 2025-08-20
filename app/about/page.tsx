import type { Metadata } from "next";
import AboutUC from "../sections/AboutUC";

export const metadata: Metadata = {
  title: "회사소개",
  description: "프랜차이즈 HQ · 운영 표준 · 브랜드 일관성으로 성공을 설계합니다.",
  openGraph: {
    title: "유니컵컴퍼니 소개",
    description: "합리적 프리미엄의 운영 표준",
    url: "https://unicup.company/about",
    images: ["/images/boardroom-uc.jpg"],
    siteName: "UNICUP COMPANY",
    locale: "ko_KR",
    type: "website",
  },
};

export default function About() {
  return (
    <div className="pt-16">
      <AboutUC />
    </div>
  );
}