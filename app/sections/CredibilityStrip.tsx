export default function CredibilityStrip() {
  const stats = [
    { value: "월 15만+", label: "방문 고객" },
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
              src="/images/logo-uc-company.png"
              alt="유니컵컴퍼니 법인 로고"
              className="h-16 mr-8"
            />
            <img
              src="/images/logo-unicup-coffee.png"
              alt="유니컵커피 브랜드 로고"
              className="h-16"
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
