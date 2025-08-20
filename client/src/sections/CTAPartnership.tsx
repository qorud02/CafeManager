import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CTAPartnership() {
  return (
    <section className="py-20 bg-uc-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-uc-deep to-uc-blue opacity-90"></div>
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
            <Button className="bg-uc-accent text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-uc-accent transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              가맹·제휴 문의하기
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white px-10 py-4 rounded-2xl hover:bg-white hover:text-uc-deep transition-all duration-300 font-bold text-lg backdrop-blur-sm"
            >
              브랜드 가이드 요청
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
    </section>
  );
}
