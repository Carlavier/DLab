import { Users, Globe, Lightbulb, MapPin, Award, Shield, Network } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { useTranslation } from "react-i18next";

export default function AboutDAB() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium">{t('aboutDAB.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('aboutDAB.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('aboutDAB.subtitle')}
          </p>
        </div>

        {/* DFL Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden border border-green-200 shadow-lg">
              <ImageWithFallback
                src="/assets/img/city.jpg"
                alt="Da Nang Fintech Lab"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
                {t('aboutDAB.dflTitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('aboutDAB.dflDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Team Features */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('aboutDAB.teamFeatures', { returnObjects: true }) as any[]).map((feature, index) => (
              <div
                key={index}
                className="bg-green-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  {index === 0 && <Users className="w-7 h-7 text-white" />}
                  {index === 1 && <MapPin className="w-7 h-7 text-white" />}
                  {index === 2 && <Award className="w-7 h-7 text-white" />}
                </div>
                <h4 className="text-xl mb-3 text-gray-900 font-semibold">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Da Nang Section */}
        <div className="mb-20">
          <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  {t('aboutDAB.danangTitle')}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t('aboutDAB.danangDescription')}
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-green-200 shadow-lg">
                <ImageWithFallback
                  src="/assets/img/bridge.jpg"
                  alt="Da Nang Night Bridge"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(t('aboutDAB.danangFeatures', { returnObjects: true }) as any[]).map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-md transition-all"
                >
                  <h4 className="text-lg mb-2 text-gray-900 font-semibold">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VIFC Section */}
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden border border-green-200 shadow-lg">
                <ImageWithFallback
                  src="/assets/img/high.png"
                  alt="Vietnam International Finance Center"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-green-600">
                {t('aboutDAB.vifcTitle')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('aboutDAB.vifcDescription')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(t('aboutDAB.vifcFeatures', { returnObjects: true }) as any[]).map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-green-200 hover:border-green-400 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  {index === 0 && <Globe className="w-7 h-7 text-white" />}
                  {index === 1 && <Shield className="w-7 h-7 text-white" />}
                  {index === 2 && <Network className="w-7 h-7 text-white" />}
                </div>
                <h4 className="text-xl mb-3 text-gray-900 font-semibold">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
