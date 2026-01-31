import { Network } from "lucide-react";
import Hero from "@/app/components/Hero";
import AboutDAB from "@/app/components/AboutDAB";
import WhyChoose from "@/app/components/WhyChoose";
import ForWho from "@/app/components/ForWho";
import Contact from "@/app/components/Contact";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import LanguageTest from "@/app/components/LanguageTest";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Fixed Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white backdrop-blur-xl z-50 border-b border-green-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div>
                <img
                  src="/assets/img/dfl_1764273424335.png"
                  alt="DFL Logo"
                  className="h-14"
                />
              </div>
            </div>
            <div className="flex gap-8 items-center">
              <div className="hidden md:flex gap-8">
                <a
                  href="#about"
                  className="text-gray-700 hover:text-green-600 transition-colors font-bold"
                >
                  {t('nav.about')}
                </a>
                <a
                  href="#why"
                  className="text-gray-700 hover:text-green-600 transition-colors font-bold"
                >
                  {t('nav.why')}
                </a>
                <a
                  href="#who"
                  className="text-gray-700 hover:text-green-600 transition-colors font-bold"
                >
                  {t('nav.who')}
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-green-600 transition-colors font-bold"
                >
                  {t('nav.contact')}
                </a>
              </div>
              <LanguageSwitcher />
            </div>
            <a href="#contact">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 hover:shadow-lg transition-all font-medium">
                {t('nav.join')}
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About DFL Section */}
      <AboutDAB />

      {/* Why Choose DFL Section */}
      <WhyChoose />

      {/* For Who Section */}
      <ForWho />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="bg-green-50 border-t border-green-200 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <Network className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-green-600">{t('footer.title')}</div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {t('footer.slogan')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-600">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li>
                  <a href="#about" className="hover:text-green-600 transition">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#why" className="hover:text-green-600 transition">
                    {t('nav.why')}
                  </a>
                </li>
                <li>
                  <a href="#who" className="hover:text-green-600 transition">
                    {t('nav.who')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-green-600 transition">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-600">{t('footer.address')}</h4>
              <p className="text-gray-600 leading-relaxed">
                {t('footer.addressText')}
                <br />
                {t('footer.city')}
                <br />
                <span className="text-green-600 font-semibold">{t('footer.innovationHub')}</span>
              </p>
            </div>
          </div>
          <div className="border-t border-green-200 pt-8">
            <div className="text-center">
              <p className="text-gray-600 mb-2">
                &copy; 2026 DFL. {t('footer.copyright')}
              </p>
              <p className="text-xs text-gray-500">
                The premier incubator and regulatory sandbox in Central Vietnam
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
