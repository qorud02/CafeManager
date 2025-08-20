import { motion } from "framer-motion";
import { Zap, CheckCircle, Heart } from "lucide-react";

import nano_banana_Model___Nanobanana____1_ from "@assets/nano-banana_Model___Nanobanana_피 (1).png";

export default function AboutUC() {
  const features = [
    {
      icon: Zap,
      title: "Speed",
      subtitle: "빠른 오픈",
    },
    {
      icon: CheckCircle,
      title: "Quality",
      subtitle: "일관된 품질",
    },
    {
      icon: Heart,
      title: "Consistency",
      subtitle: "표준화 운영",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={nano_banana_Model___Nanobanana____1_}
              alt="유니컵컴퍼니 임원진 회의실 - 전략 기획 및 의사결정 현장"
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <div className="w-12 h-1 bg-uc-accent mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-uc-deep mb-4">
                About UniCup Company
              </h2>
              <h3 className="text-xl md:text-2xl text-uc-gray font-light mb-6">
                검증된 표준으로 만드는 성공 공식
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              유니컵커피 본점에서 검증된 운영·브랜딩·공급망 표준을 기반으로,
              가맹 파트너의 빠른 오픈·안정 운영·고객 재방문을 설계합니다.
            </p>

            <blockquote className="border-l-4 border-uc-accent bg-gray-50 p-6 mb-8 italic text-lg text-uc-deep">
              "당신의 매일을 한층 특별하게"
            </blockquote>

            {/* 3 Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center p-4">
                    <div className="w-12 h-12 bg-uc-blue rounded-xl flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-uc-deep mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-uc-gray">{feature.subtitle}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
