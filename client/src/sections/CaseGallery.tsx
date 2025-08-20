import { motion } from "framer-motion";

export default function CaseGallery() {
  const cases = [
    {
      image: "/images/unicup-store-front.jpg", // 실제 유니컵 매장 이미지
      title: "매장 표준화",
      subtitle: "일관된 브랜드 경험",
      alt: "유니컵커피 매장 외관 - 일관된 브랜드 디자인과 전문적인 매장 설계",
    },
    {
      image: null, // 파트너십 이미지를 여기에 추가하세요
      title: "파트너십",
      subtitle: "협업을 통한 성장",
      alt: "유니컵컴퍼니 파트너십 - 프랜차이즈 운영 및 협업 관계",
      fallbackImage: "/images/meeting.jpg", // 기본 이미지
    },
    {
      image: null, // 품질 관리 이미지를 여기에 추가하세요
      title: "품질 관리",
      subtitle: "생산 표준화",
      alt: "유니컵컴퍼니 품질 관리 - 표준화된 생산 및 품질 시스템",
      fallbackImage: "/images/factory.jpg", // 기본 이미지
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-uc-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-uc-deep mb-4">
            브랜드 일관성
          </h2>
          <p className="text-xl text-uc-gray max-w-2xl mx-auto">
            전국 매장에서 동일한 고객 경험을 제공합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={caseItem.image || caseItem.fallbackImage}
                alt={caseItem.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {caseItem.title}
                  </h3>
                  <p className="text-sm opacity-90">{caseItem.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
