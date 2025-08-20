import type { Metadata } from "next";
import BusinessLines from "../sections/BusinessLines";

export const metadata: Metadata = {
  title: "사업영역",
  description: "통합된 프랜차이즈 솔루션으로 성공을 설계합니다. 가맹점 HQ, 로스팅, 물류까지.",
  openGraph: {
    title: "유니컵컴퍼니 사업영역",
    description: "통합된 프랜차이즈 솔루션",
    url: "https://unicup.company/business",
    images: ["/images/factory.jpg"],
    siteName: "UNICUP COMPANY",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Business() {
  return (
    <div className="pt-16">
      <BusinessLines />
    </div>
  );
}