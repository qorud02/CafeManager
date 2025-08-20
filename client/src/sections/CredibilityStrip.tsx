import BRAND_IDENTITY__unicup_coffee____0524 from "@assets/BRAND-IDENTITY-[unicup-coffee]-_-0524.png";
import Gemini_Generated_Image_tbmyintbmyintbmy______ from "@assets/Gemini_Generated_Image_tbmyintbmyintbmy - 편집함.png";
import ____ from "@assets/다운로드.png";
export default function CredibilityStrip() {
  const stats = [
    { value: "48%+", label: "재방문율" },
    { value: "HQ O2O", label: "운영 시스템" },
    { value: "품질 KPI", label: "실측 운영" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Logos */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Gemini_Generated_Image_tbmyintbmyintbmy______}
              alt="유니컵컴퍼니 법인 로고"
              className="h-32 mr-8"
            />
            <img
              src={____}
              alt="유니컵커피 브랜드 로고"
              className="h-32"
            />
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-3 gap-4 text-center md:text-left">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-2xl font-bold text-uc-blue mb-1">
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
