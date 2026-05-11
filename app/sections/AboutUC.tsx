import { motion } from "framer-motion";
import { Zap, CheckCircle, Heart } from "lucide-react";

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
        <div className="grid lg:grid-cols-[0.7fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:max-w-[94%]"
          >
            <img
              src="/images/boardroom-uc.jpg"
              alt="유니컵컴퍼니 브랜드 운영 이미지"
              className="rounded-2xl shadow-xl w-full max-h-[420px] object-cover"
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
                운영 표준을 기반으로 성장 구조를 만듭니다
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              유니컵컴퍼니는 유니컵커피의 현장 운영 경험을 바탕으로,
              브랜드 운영·품질관리·가맹 확장에 필요한 프랜차이즈 운영
              구조를 구축합니다.
            </p>

            <blockquote className="border-l-4 border-uc-accent bg-gray-50 p-6 mb-8 italic text-lg text-uc-deep">
              "브랜드 감성과 운영 효율을 함께 설계합니다."
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
