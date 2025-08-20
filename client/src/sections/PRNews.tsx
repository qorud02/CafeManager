import { motion } from "framer-motion";
import { FileText, DollarSign, Lightbulb } from "lucide-react";

export default function PRNews() {
  // 📝 PR뉴스 이미지 추가 가이드:
  // 1. 파트너십 뉴스: partnership 이미지 설정됨 ✅
  // 2. 프랜차이즈 뉴스: franchise 이미지 설정됨 ✅  
  // 3. R&D 뉴스: rnd 이미지 설정됨 ✅
  
  const customImages = {
    partnership: "/images/pr-cj-logistics.png", // ✅ 파트너십 뉴스 이미지 (새 CJ 로지스틱스 이미지)
    franchise: "/images/pr-franchise-news.png", // ✅ 프랜차이즈 뉴스 이미지 (새 보도자료 이미지)
    rnd: "/images/pr-meeting-presentation.png", // ✅ R&D 뉴스 이미지 (새 미팅 프레젠테이션 이미지)
  };

  const newsItems = [
    {
      id: "partnership",
      icon: DollarSign,
      category: "기업뉴스",
      title: "신규 파트너십 체결 소식",
      excerpt: "대형 물류업체와의 전략적 파트너십을 통한 공급망 혁신...",
      date: "2024.03.10",
      gradient: "from-uc-deep to-uc-blue",
      image: customImages.partnership,
    },
    {
      id: "franchise",
      icon: FileText,
      category: "보도자료",
      title: "프랜차이즈 확장 계획 발표",
      excerpt:
        "유니컵컴퍼니의 새로운 프랜차이즈 전략과 2024년 확장 계획에 대한...",
      date: "2024.03.15",
      gradient: "from-uc-blue to-uc-accent",
      image: customImages.franchise,
    },
    {
      id: "rnd",
      icon: Lightbulb,
      category: "혁신",
      title: "신메뉴 R&D 성과 발표",
      excerpt: "고객 만족도 극대화를 위한 신메뉴 개발 및 표준화 과정...",
      date: "2024.03.05",
      gradient: "from-uc-accent to-uc-blue",
      image: customImages.rnd,
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

        {/* 첫 번째 영역 - 기업뉴스 */}
        <div className="mb-12">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer max-w-md mx-auto"
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2">
                {newsItems[0].category}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[0].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">{newsItems[0].excerpt}</p>
              <div className="text-xs text-uc-gray">{newsItems[0].date}</div>
            </div>
          </motion.article>
        </div>

        {/* 두 번째 영역 - 보도자료 */}
        <div className="mb-12">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer max-w-md mx-auto"
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2">
                {newsItems[1].category}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[1].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">{newsItems[1].excerpt}</p>
              <div className="text-xs text-uc-gray">{newsItems[1].date}</div>
            </div>
          </motion.article>
        </div>

        {/* 세 번째 영역 - 혁신 */}
        <div className="mb-12">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer max-w-md mx-auto"
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2">
                {newsItems[2].category}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[2].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">{newsItems[2].excerpt}</p>
              <div className="text-xs text-uc-gray">{newsItems[2].date}</div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
