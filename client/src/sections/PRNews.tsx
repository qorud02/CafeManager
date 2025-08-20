import { motion } from "framer-motion";
import { FileText, DollarSign, Lightbulb } from "lucide-react";

export default function PRNews() {
  const newsItems = [
    {
      icon: FileText,
      category: "보도자료",
      title: "프랜차이즈 확장 계획 발표",
      excerpt:
        "유니컵컴퍼니의 새로운 프랜차이즈 전략과 2024년 확장 계획에 대한...",
      date: "2024.03.15",
      gradient: "from-uc-blue to-uc-accent",
    },
    {
      icon: DollarSign,
      category: "기업뉴스",
      title: "신규 파트너십 체결 소식",
      excerpt: "대형 물류업체와의 전략적 파트너십을 통한 공급망 혁신...",
      date: "2024.03.10",
      gradient: "from-uc-deep to-uc-blue",
    },
    {
      icon: Lightbulb,
      category: "혁신",
      title: "신메뉴 R&D 성과 발표",
      excerpt: "고객 만족도 극대화를 위한 신메뉴 개발 및 표준화 과정...",
      date: "2024.03.05",
      gradient: "from-uc-accent to-uc-blue",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="w-12 h-1 bg-uc-accent mx-auto mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-uc-deep mb-4">
            PR · News
          </h2>
          <p className="text-xl text-uc-gray max-w-2xl mx-auto">
            유니컵컴퍼니의 최신 소식과 성과를 확인하세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${item.gradient} relative`}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-white/70" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-uc-accent mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-uc-gray text-sm mb-4">{item.excerpt}</p>
                  <div className="text-xs text-uc-gray">{item.date}</div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
