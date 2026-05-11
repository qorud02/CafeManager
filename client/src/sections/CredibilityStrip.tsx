import Gemini_Generated_Image_tbmyintbmyintbmy______ from "@assets/Gemini_Generated_Image_tbmyintbmyintbmy - 편집함.png";
import ____ from "@assets/다운로드.png";
export default function CredibilityStrip() {
  const stats = [
    { value: "유니컵컴퍼니", label: "F&B 브랜드 운영사" },
    { value: "유니컵커피", label: "운영 브랜드" },
    { value: "운영 구조", label: "본사-매장 운영 시스템" },
    { value: "품질 기준", label: "메뉴·서비스 품질 관리" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-8 items-center">
          {/* Logos */}
          <div className="flex justify-center lg:justify-start items-center gap-6">
            <img
              src={Gemini_Generated_Image_tbmyintbmyintbmy______}
              alt="유니컵컴퍼니 법인 로고"
              className="h-20 md:h-24 object-contain"
            />
            <img
              src={____}
              alt="유니컵커피 브랜드 로고"
              className="h-20 md:h-24 object-contain"
            />
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center lg:text-left">
            {stats.map((stat, index) => (
              <div key={index} className="p-3">
                <div className="text-xl md:text-2xl font-bold text-uc-blue mb-1 leading-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-uc-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
