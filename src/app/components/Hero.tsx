import CountUp from "@/components/CountUp";
import { Rocket, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();
  const slogans = t('hero.textType', { returnObjects: true }) as string[];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-6 py-3 rounded-full mb-8">
            <span className="font-bold">{t('hero.comingSoon')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
            <span className="text-gray-900 font-bold">
              {t('hero.title1')}
            </span>
            <div className="text-green-600 font-bold">
              {t('hero.title2')}
            </div>
            <span className="text-gray-900 font-bold">
              {t('hero.title3')}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            {slogans[0]}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#contact">
              <button className="bg-green-600 text-white px-10 py-5 rounded-full hover:bg-green-700 hover:shadow-lg transition-all flex items-center gap-3 text-lg font-semibold">
                {t('hero.cta_join')}
                <Rocket className="w-6 h-6" />
              </button>
            </a>
            <a href="#about">
              <button className="border-2 border-green-600 text-green-600 px-10 py-5 rounded-full hover:bg-green-50 transition-all text-lg font-semibold">
                {t('hero.cta_learn')}
              </button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                <CountUp
                  from={0}
                  to={40}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />
                -
                <CountUp
                  from={20}
                  to={50}
                  separator=","
                  direction="up"
                  duration={3}
                  className="count-up-text"
                />
                %
              </div>
              <div className="text-sm text-gray-600">{t('hero.stat1_label')}</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                #1
              </div>
              <div className="text-sm text-gray-600">{t('hero.stat2_label')}</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                Sandbox
              </div>
              <div className="text-sm text-gray-600">{t('hero.stat3_label')}</div>
            </div>
            <div className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-4xl font-bold text-green-600 mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-600">{t('hero.stat4_label')}</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            <span className="text-sm">{t('hero.explore')}</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
