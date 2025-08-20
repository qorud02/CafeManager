import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ContactModal from "../components/ContactModal";

import Gemini_Generated_Image_tbmyintbmyintbmy______ from "@assets/Gemini_Generated_Image_tbmyintbmyintbmy - 편집함.png";

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="hero-bg min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-uc-accent/10 px-4 py-2 rounded-full text-sm font-medium mb-6 text-[#344570]">
              프랜차이즈 본사 · 식음료 테크 법인
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              유니컵컴퍼니<br />
              <span className="text-[49px] text-[#344570]">F&B에 '프리미엄 효율'</span>
              <br />을 더하다
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              합리적 가격과 프리미엄 감성의 운영 표준을 만드는 프랜차이즈 본사
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-uc-blue text-white px-8 py-4 rounded-2xl hover:bg-uc-deep transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                가맹·제휴 문의하기
              </Button>
              <Button
                variant="outline"
                className="border-2 border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-uc-deep transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                회사소개서 다운로드
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Logo */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="animate-float">
              <img
                src={Gemini_Generated_Image_tbmyintbmyintbmy______}
                alt="유니컵컴퍼니 로고 - 프리미엄 F&B 솔루션"
                className="w-80 md:w-96 lg:w-full max-w-lg opacity-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-white" />
      </motion.div>
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </section>
  );
}
