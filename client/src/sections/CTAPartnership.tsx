import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ContactModal from "../components/ContactModal";
import companyIntroductionPdf from "./companyIntroduction.pdf";

export default function CTAPartnership() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  return (
    <section className="py-20 bg-uc-bg relative overflow-hidden">
      <div className="absolute inset-0 from-uc-deep to-uc-blue opacity-90 bg-[#0d143bed]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            표준을 먼저 만든 뒤<br />
            <span className="text-uc-accent">확장합니다</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10">
            지금, 파트너십을 상담하세요
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              variant="outline"
              className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-uc-deep transition-all duration-300 font-bold text-lg backdrop-blur-sm"
              onClick={() => {
                const link = document.createElement("a");
                link.href = companyIntroductionPdf; // import한 변수를 사용
                link.download = "companyIntroduction.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              회사소개서 다운로드
            </Button>
          </div>
        </motion.div>
      </div>
      {/* Background decoration */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-uc-accent/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </section>
  );
}
