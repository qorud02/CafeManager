import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "유니컵컴퍼니 - F&B에 프리미엄 효율을 더하다",
    template: "%s | 유니컵컴퍼니",
  },
  description: "합리적 가격과 프리미엄 감성의 운영 표준을 만드는 프랜차이즈 본사. 매뉴얼, 품질, 공급망을 한 화면에서 설계합니다.",
  keywords: ["프랜차이즈", "F&B", "커피", "유니컵", "가맹점", "본사", "프리미엄"],
  authors: [{ name: "유니컵컴퍼니" }],
  creator: "유니컵컴퍼니",
  publisher: "유니컵컴퍼니",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://unicup.company",
    siteName: "UNICUP COMPANY",
    title: "유니컵컴퍼니 - F&B 프랜차이즈 본사",
    description: "합리적 가격과 프리미엄 감성의 운영 표준을 만드는 프랜차이즈 본사",
    images: [
      {
        url: "/images/slogan.jpg",
        width: 1200,
        height: 630,
        alt: "유니컵컴퍼니 - 당신의 매일을 한층 특별하게",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "유니컵컴퍼니 - F&B 프랜차이즈 본사",
    description: "합리적 가격과 프리미엄 감성의 운영 표준을 만드는 프랜차이즈 본사",
    images: ["/images/slogan.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://unicup.company",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "유니컵컴퍼니",
    description: "F&B 프랜차이즈 본사",
    url: "https://unicup.company",
    logo: "https://unicup.company/images/logo-uc-company.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
      addressRegion: "서울특별시",
      addressLocality: "강남구",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+82-2-0000-0000",
      contactType: "customer service",
      availableLanguage: "Korean",
    },
    sameAs: [],
  };

  return (
    <html lang="ko" className={inter.variable}>
      <head>
        {/* Pretendard Font */}
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData),
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="min-h-screen bg-background">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}