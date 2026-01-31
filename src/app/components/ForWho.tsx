import { ShieldCheck, Eye, TestTube, Zap, FileCheck, Settings, Rocket, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function ForWho() {
  const { t } = useTranslation();
  const getFeatureIcon = (index: number) => {
    const icons = [ShieldCheck, Eye, TestTube, Zap];
    const Icon = icons[index];
    return <Icon className="w-7 h-7 text-white" />;
  };

  const getProcessIcon = (index: number) => {
    const icons = [FileCheck, Settings, Rocket, CheckCircle2];
    const Icon = icons[index];
    return <Icon className="w-6 h-6 text-white" />;
  };

  return (
    <section
      id="who"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-sm font-medium">{t('forWho.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="text-green-600">
              {t('forWho.title')}
            </span>{" "}
            {t('forWho.titleSuffix')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('forWho.description')}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {(t('forWho.features', { returnObjects: true }) as any[]).map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-2xl border border-green-200 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                {getFeatureIcon(index)}
              </div>
              <h3 className="text-xl mb-3 text-gray-900 font-semibold">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-200">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('forWho.processTitle')}{" "}
              <span className="text-green-600">{t('forWho.processTitleHighlight')}</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t('forWho.processSteps', { returnObjects: true }) as any[]).map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-green-200 hover:shadow-md transition-all relative"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {getProcessIcon(index)}
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-lg mb-3 text-gray-900 font-semibold">
                  {step.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
