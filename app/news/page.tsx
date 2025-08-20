import type { Metadata } from "next";
import PRNews from "../sections/PRNews";

export const metadata: Metadata = {
  title: "PR · 뉴스",
  description: "유니컵컴퍼니의 최신 소식과 성과를 확인하세요.",
  openGraph: {
    title: "유니컵컴퍼니 뉴스",
    description: "최신 소식과 성과",
    url: "https://unicup.company/news",
    images: ["/images/slogan.jpg"],
    siteName: "UNICUP COMPANY",
    locale: "ko_KR",
    type: "website",
  },
};

export default function News() {
  return (
    <div className="pt-16">
      <PRNews />
    </div>
  );
}