import type { Metadata } from "next";
import ContactForm from "../sections/ContactForm";

export const metadata: Metadata = {
  title: "문의하기",
  description: "프랜차이즈 가맹 및 제휴 관련 문의를 남겨주세요.",
  openGraph: {
    title: "유니컵컴퍼니 문의",
    description: "가맹 및 제휴 문의",
    url: "https://unicup.company/contact",
    images: ["/images/slogan.jpg"],
    siteName: "UNICUP COMPANY",
    locale: "ko_KR",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="pt-16">
      <ContactForm />
    </div>
  );
}