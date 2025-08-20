import { Link } from "wouter";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/about", label: "회사소개" },
    { href: "/business", label: "사업영역" },
    { href: "/news", label: "PR·뉴스" },
    { href: "/contact", label: "문의하기" },
  ];

  return (
    <footer className="bg-uc-deep text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src="/images/logo-uc-company.png"
                alt="유니컵컴퍼니 로고"
                className="h-8 w-auto mr-3"
              />
              <span className="text-xl font-bold text-white">유니컵컴퍼니</span>
            </div>
            <div className="space-y-2 text-sm">
              <p>상호: 주식회사 유니컵컴퍼니</p>
              <p>사업자등록번호: 000-00-00000</p>
              <p>주소: 서울특별시 강남구 테헤란로 XXX</p>
              <p>대표전화: 02-0000-0000</p>
              <p>이메일: info@unicupcompany.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-uc-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">소셜 미디어</h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-uc-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-uc-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-uc-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <div className="text-xs space-y-1">
              <a href="#" className="hover:text-uc-accent transition-colors">
                개인정보처리방침
              </a>
              <br />
              <a href="#" className="hover:text-uc-accent transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 UniCup Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
