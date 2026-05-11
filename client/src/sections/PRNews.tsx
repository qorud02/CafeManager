import { motion } from "framer-motion";
import { FileText, DollarSign, Lightbulb, ExternalLink } from "lucide-react";

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

  const newsSearchUrl = (query: string) =>
    `https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(query)}`;

  const newsItems = [
    {
      id: "partnership",
      icon: DollarSign,
      category: "투자유치",
      title: "유니컵컴퍼니, 엔젤 투자 유치… 프랜차이즈 확장 기반 조성",
      excerpt:
        "B2B 신뢰도와 가맹 사업 확장을 위한 성장 기반을 강화했습니다.",
      date: "2026.04",
      gradient: "from-uc-deep to-uc-blue",
      image: customImages.partnership,
      link: newsSearchUrl(
        "유니컵컴퍼니 엔젤 투자 유치 프랜차이즈 확장 기반 조성",
      ),
      external: true,
    },
    {
      id: "franchise",
      icon: FileText,
      category: "글로벌",
      title: "유니컵컴퍼니, 중국 CCFA와 산업 교류… WFC 글로벌 프랜차이즈 컨퍼런스 논의",
      excerpt: "중국 프랜차이즈 산업 관계자와 교류하며 글로벌 협력 가능성을 논의했습니다.",
      date: "2026.04",
      gradient: "from-uc-blue to-uc-accent",
      image: customImages.franchise,
      link: newsSearchUrl(
        "유니컵컴퍼니 중국 CCFA 산업 교류 WFC 글로벌 프랜차이즈 컨퍼런스 논의",
      ),
      external: true,
    },
    {
      id: "rnd",
      icon: Lightbulb,
      category: "보도자료",
      title: "유니컵컴퍼니, AI 데이터 전략·특허로 프랜차이즈 기업화 속도",
      excerpt: "데이터·특허 기반 운영 전략으로 프랜차이즈 기업화 속도를 높이고 있습니다.",
      date: "2025.09.01",
      gradient: "from-uc-accent to-uc-blue",
      image: customImages.rnd,
      link: "https://biz.chosun.com/industry/industry_general/2025/09/01/3YPGAXDHW5DWTBUL6N4Q32NQTU/",
      external: true,
    },
  ];

  const handleCardClick = (item: (typeof newsItems)[number]) => {
    if (item.external) {
      // 외부 링크는 새 탭에서 열기
      window.open(item.link, "_blank", "noopener,noreferrer");
    } else {
      // 내부 링크는 현재 탭에서 이동 (React Router 사용시 navigate 사용)
      window.location.href = item.link;
    }
  };

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
          {/* 첫 번째 영역 - 기업뉴스 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="
              bg-white rounded-2xl shadow-lg
              hover:shadow-2xl  
              transition-transform transition-shadow duration-50 ease-out
              overflow-hidden group cursor-pointer
            "
            onClick={() => handleCardClick(newsItems[0])}
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2 flex items-center justify-between">
                <span>{newsItems[0].category}</span>
                {newsItems[0].external && (
                  <ExternalLink className="w-4 h-4 text-uc-accent/60" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[0].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">
                {newsItems[0].excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-uc-gray">{newsItems[0].date}</div>
              </div>
            </div>
          </motion.article>

          {/* 두 번째 영역 - 보도자료 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="
                bg-white rounded-2xl shadow-lg
                hover:shadow-2xl  
                transition-transform transition-shadow duration-50 ease-out
                overflow-hidden group cursor-pointer
              "
            onClick={() => handleCardClick(newsItems[1])}
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2 flex items-center justify-between">
                <span>{newsItems[1].category}</span>
                {newsItems[1].external && (
                  <ExternalLink className="w-4 h-4 text-uc-accent/60" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[1].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">
                {newsItems[1].excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-uc-gray">{newsItems[1].date}</div>
              </div>
            </div>
          </motion.article>

          {/* 세 번째 영역 - 혁신 */}
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="
                bg-white rounded-2xl shadow-lg
                hover:shadow-2xl  
                transition-transform transition-shadow duration-50 ease-out
                overflow-hidden group cursor-pointer
              "
            onClick={() => handleCardClick(newsItems[2])}
          >
            <div className="p-6">
              <div className="text-sm text-uc-accent mb-2 flex items-center justify-between">
                <span>{newsItems[2].category}</span>
                {newsItems[2].external && (
                  <ExternalLink className="w-4 h-4 text-uc-accent/60" />
                )}
              </div>
              <h3 className="text-lg font-semibold text-uc-deep mb-3 group-hover:text-uc-blue transition-colors">
                {newsItems[2].title}
              </h3>
              <p className="text-uc-gray text-sm mb-4">
                {newsItems[2].excerpt}
              </p>
              <div className="flex justify-between items-center">
                <div className="text-xs text-uc-gray">{newsItems[2].date}</div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
