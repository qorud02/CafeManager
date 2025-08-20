"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/about", label: "회사소개" },
    { href: "/business", label: "사업영역" },
    { href: "/news", label: "PR·뉴스" },
    { href: "/contact", label: "문의" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-sm shadow-lg"
          : "bg-white/95 backdrop-blur-sm"
      } border-b border-gray-100`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo-uc-company.png"
                alt="유니컵컴퍼니 로고"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  isActive(item.href)
                    ? "text-uc-blue"
                    : "text-uc-deep hover:text-uc-blue"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-uc-blue text-white px-6 py-2 rounded-full hover:bg-uc-deep transition-colors duration-300 font-medium">
              파트너십 문의
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-uc-gray hover:text-uc-blue p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 font-medium ${
                    isActive(item.href)
                      ? "text-uc-blue"
                      : "text-uc-deep hover:text-uc-blue"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="w-full mt-2 bg-uc-blue text-white px-6 py-2 rounded-full font-medium">
                파트너십 문의
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}