import { motion } from "framer-motion";
import { Building2, Settings, Package } from "lucide-react";

export default function BusinessLines() {
  const businessLines = [
    {
      icon: Building2,
      title: "Franchise HQ",
      description: "매뉴얼·교육·메뉴 R&D를 통한 체계적인 가맹점 지원 시스템",
      hasBackground: false,
    },
    {
      icon: Settings,
      title: "Roasting / Production",
      description: "스케일러블 생산 파트너로서 안정적인 품질 관리 시스템",
      hasBackground: true,
      backgroundImage: "/images/factory.jpg",
    },
    {
      icon: Package,
      title: "Logistics & Ops",
      description: (
        <>
          대형 물류사 연동 구조 검토 중<br />
          <span className="text-sm text-gray-400">(파트너십 체결 후 적용)</span>
        </>
      ),
      hasBackground: false,
    },
  ];

  return (
    <section className="py-20 bg-uc-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-uc-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            사업영역
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            통합된 프랜차이즈 솔루션으로 성공을 설계합니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {businessLines.map((business, index) => {
            const IconComponent = business.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                {business.hasBackground ? (
                  <div className="bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-uc-accent backdrop-blur-sm relative">
                    <div
                      className="h-16 bg-cover bg-center relative mb-6"
                      style={{
                        backgroundImage: `url('${business.backgroundImage}')`,
                      }}
                    >
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {business.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {business.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700 hover:border-uc-accent backdrop-blur-sm">
                    <div className="w-16 h-16 bg-uc-blue rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">
                      {business.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {business.description}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
