import { Rocket, Users, TrendingUp, Target } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function WhyChoose() {
  const { t } = useTranslation();

  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Vision Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-full mb-6">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">{t('whyChoose.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900 font-bold">
            {t('whyChoose.title')}{" "}
            <span className="text-green-600">
              {t('whyChoose.titleHighlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('whyChoose.description')}
          </p>
        </div>

        {/* Strategic Description */}
        <div className="bg-green-50 rounded-3xl p-8 md:p-12 border border-green-200 mb-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              {t('whyChoose.subtitle1')}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('whyChoose.description1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('whyChoose.description2')}
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-600 px-4 py-2 rounded-full mb-6">
              <Rocket className="w-4 h-4" />
              <span className="text-sm font-medium">{t('whyChoose.missionBadge')}</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('whyChoose.missionTitle')}{" "}
              <span className="text-green-600">{t('whyChoose.missionTitleHighlight')}</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('whyChoose.missionDescription')}
            </p>
          </div>

          {/* Mission Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">
                {t('whyChoose.stats.startups')}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t('whyChoose.stats.startupsLabel')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('whyChoose.stats.startupsDescription')}
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">
                {t('whyChoose.stats.jobs')}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t('whyChoose.stats.jobsLabel')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('whyChoose.stats.jobsDescription')}
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-2xl border border-green-200 hover:shadow-lg transition-all text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl md:text-6xl font-bold text-green-600 mb-4">
                {t('whyChoose.stats.investment')}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {t('whyChoose.stats.investmentLabel')}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {t('whyChoose.stats.investmentDescription')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
