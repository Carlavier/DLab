import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(t('contact.form.submitSuccess'));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 border border-green-300 text-green-700 px-4 py-2 rounded-full mb-6">
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">{t('contact.badge')}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-green-50 rounded-2xl border border-green-200 p-8 shadow-lg">
            <h3 className="text-2xl mb-8 text-gray-900 font-semibold">
              {t('contact.form.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-700 font-medium">
                    {t('contact.form.name')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-700 font-medium">
                    {t('contact.form.email')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm text-gray-700 font-medium">
                    {t('contact.form.company')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm text-gray-700 font-medium">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm text-gray-700 font-medium">
                  {t('contact.form.message')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-green-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold text-lg"
              >
                {t('contact.form.submit')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-green-50 rounded-2xl border border-green-200 p-8">
              <h3 className="text-xl mb-6 text-gray-900 font-semibold">
                {t('contact.info.title')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{t('contact.info.address.title')}</div>
                    <div className="text-gray-600 text-sm leading-relaxed">
                      {t('contact.info.address.text')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{t('contact.info.email.title')}</div>
                    <div className="text-gray-600 text-sm">
                      {t('contact.info.email.text')}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-1">{t('contact.info.hours.title')}</div>
                    <div className="text-gray-600 text-sm">
                      {t('contact.info.hours.text')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <h4 className="font-bold text-lg mb-2">{t('contact.community.title')}</h4>
              <p className="text-green-50 text-sm mb-4">{t('contact.community.description')}</p>
              <button className="text-sm font-semibold text-white underline underline-offset-4 hover:text-green-100">
                {t('contact.community.cta')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
