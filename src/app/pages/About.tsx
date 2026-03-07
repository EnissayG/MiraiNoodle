import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Target, Users, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function About() {
  const { t } = useLanguage();
  const values = [
    { icon: <Target className="w-12 h-12" />, title: t('about.value1Title'), description: t('about.value1Desc'), color: 'bg-red-600' },
    { icon: <Users className="w-12 h-12" />, title: t('about.value2Title'), description: t('about.value2Desc'), color: 'bg-yellow-400' },
    { icon: <Clock className="w-12 h-12" />, title: t('about.value3Title'), description: t('about.value3Desc'), color: 'bg-red-600' },
  ];
  const locations = [
    { name: 'Guy-Concordia', address: t('about.location1Address'), students: t('about.location1Students'), count: t('about.location1Count') },
    { name: 'UQAM - Pavillon Principal', address: t('about.location2Address'), students: t('about.location2Students'), count: t('about.location2Count') },
    { name: 'UQAM - Campus', address: t('about.location3Address'), students: t('about.location3Students'), count: t('about.location3Count') },
  ];
  const benefits = [
    { title: t('about.benefit1Title'), description: t('about.benefit1Desc') },
    { title: t('about.benefit2Title'), description: t('about.benefit2Desc') },
    { title: t('about.benefit3Title'), description: t('about.benefit3Desc') },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-36 sm:pt-36 sm:pb-44">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          
          {/* Japanese decorative circles */}
          <div className="absolute top-16 left-16 w-40 h-40 border-4 border-yellow-400/20 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border-4 border-red-600/20 rounded-full"></div>
          
          {/* Diamond pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23FBBF24' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
            {t('about.badge')}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
            {t('about.heroTitle')} <span className="text-red-600">{t('about.heroTitle2')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            {t('about.heroSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-20 sm:h-28 bg-white">
        <svg className="absolute bottom-0 w-full h-20 sm:h-28 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 8.41379C120 16.8276 240 33.6552 360 37.931C480 42.2069 600 33.6552 720 29.3793C840 25.1034 960 25.1034 1080 29.3793C1200 33.6552 1320 42.2069 1380 46.6207L1440 50.8966V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Story Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
                {t('about.missionBadge')}
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {t('about.missionTitle')} <span className="text-red-600">{t('about.missionTitle2')}</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed">
                <p>{t('about.missionP1')}</p>
                <p>{t('about.missionP2')}</p>
                <p>
                  {t('about.missionP3')} <span className="font-bold text-black">{t('about.missionP3Bold')}</span> {t('about.missionP3End')}
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763739527737-e3626d731072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzI0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Campus universitaire"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagonal Separator */}
      <div className="relative h-20 sm:h-28 bg-gray-50">
        <svg className="absolute bottom-0 w-full h-20 sm:h-28 text-white" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 74L1440 0V74H0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Locations Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-20 sm:mb-24 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-yellow-50 text-yellow-700 px-5 py-2.5 rounded-full font-semibold">
              {t('about.locationsBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('about.locationsTitle')} <span className="text-red-600">{t('about.locationsTitle2')}</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.locationsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-10 hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-8 right-8">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all">
                    <MapPin className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div className="pr-20 space-y-4">
                  <div className="inline-block bg-yellow-50 text-yellow-700 px-4 py-1.5 rounded-full text-sm font-bold">
                    {location.count}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black">{location.name}</h3>
                  <p className="text-gray-600 text-lg">{location.address}</p>
                  <p className="text-gray-500">{location.students}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg">
              {t('about.comingSoon')}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-20 sm:mb-24 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
              {t('about.valuesBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('about.valuesTitle')} <span className="text-red-600">{t('about.valuesTitle2')}</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.valuesSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className={`inline-flex items-center justify-center w-28 h-28 ${value.color} rounded-2xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed text-xl">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-yellow-50 text-yellow-700 px-5 py-2.5 rounded-full font-semibold">
              {t('about.benefitsBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('about.benefitsTitle')} <span className="text-red-600">{t('about.benefitsTitle2')}</span>
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="group bg-white rounded-3xl p-10 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-5">{benefit.title}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 bg-red-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            {t('about.ctaTitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            {t('about.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all text-xl font-bold shadow-2xl hover:-translate-y-1"
          >
            {t('about.ctaButton')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}