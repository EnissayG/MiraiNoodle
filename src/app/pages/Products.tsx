import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Wifi, CreditCard, Thermometer, Package } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';

export function Products() {
  const { t } = useLanguage();
  const specs = [
    { icon: <Package className="w-10 h-10" />, title: t('products.spec1Title'), description: t('products.spec1Desc'), color: 'bg-red-600' },
    { icon: <CreditCard className="w-10 h-10" />, title: t('products.spec2Title'), description: t('products.spec2Desc'), color: 'bg-yellow-400' },
    { icon: <Thermometer className="w-10 h-10" />, title: t('products.spec3Title'), description: t('products.spec3Desc'), color: 'bg-red-600' },
    { icon: <Wifi className="w-10 h-10" />, title: t('products.spec4Title'), description: t('products.spec4Desc'), color: 'bg-yellow-400' },
  ];
  const products = [
    { name: t('products.product1Name'), description: t('products.product1Desc'), image: 'https://www.nissinfoods.com/wp-content/uploads/2023/03/23_NISSIN_Content_Product_CN_Global_Original_SM_X1_0204_retouched_R1V1_3000x3000.jpg' },
    { name: t('products.product2Name'), description: t('products.product2Desc'), image: 'https://www.nissinfoods.com/wp-content/uploads/2023/03/23_Nissin_Content_Product_HS_BlazingHot_SM_X1_0090_retouched_R2V1_3000x3000.jpg' },
    { name: t('products.product3Name'), description: t('products.product3Desc'), image: 'https://images.seattletimes.com/wp-content/uploads/2021/09/Cup-Noodles-FM.jpg?d=2040x1224' },
  ];
  const machineFeatures = [
    { title: t('products.feature1Title'), desc: t('products.feature1Desc') },
    { title: t('products.feature2Title'), desc: t('products.feature2Desc') },
    { title: t('products.feature3Title'), desc: t('products.feature3Desc') },
    { title: t('products.feature4Title'), desc: t('products.feature4Desc') },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-36 sm:pt-36 sm:pb-44">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          
          {/* Japanese pattern overlay */}
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-red-600/20 rounded-full"></div>
          <div className="absolute bottom-32 right-1/4 w-24 h-24 border-4 border-yellow-400/20 rounded-full"></div>
          
          {/* Subtle wave pattern */}
          <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC2626" d="M43.3,-59.4C54.8,-49.7,61.8,-34.9,66.3,-19.1C70.8,-3.3,72.8,13.5,67.7,27.7C62.6,41.9,50.4,53.5,36.6,61.4C22.8,69.3,7.4,73.5,-7.6,73.1C-22.6,72.7,-37.2,67.7,-49.9,58.9C-62.6,50.1,-73.4,37.5,-77.9,23C-82.4,8.5,-80.6,-7.9,-74.3,-22.1C-68,-36.3,-57.2,-48.3,-44.3,-57.6C-31.4,-66.9,-15.7,-73.5,0.4,-74.1C16.5,-74.7,32.9,-69.1,43.3,-59.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
            {t('products.badge')}
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
            {t('products.heroTitle')} <span className="text-red-600">{t('products.heroTitle2')}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('products.heroSubtitle')}
          </p>
        </motion.div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-20 sm:h-28 bg-white">
        <svg className="absolute bottom-0 w-full h-20 sm:h-28 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 8.41379C120 16.8276 240 33.6552 360 37.931C480 42.2069 600 33.6552 720 29.3793C840 25.1034 960 25.1034 1080 29.3793C1200 33.6552 1320 42.2069 1380 46.6207L1440 50.8966V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Main Product Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute inset-0 bg-red-600/10 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758633854748-15ed2ef681a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2ZW5kaW5nJTIwbWFjaGluZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzI0MzYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Distributeur Mirai Ramen"
                className="rounded-3xl shadow-2xl relative z-10"
              />
            </motion.div>
            <motion.div 
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
                {t('products.sectionBadge')}
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                {t('products.sectionTitle')} <span className="text-red-600">{t('products.sectionTitle2')}</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t('products.sectionDesc')}
              </p>
              <div className="space-y-6 pt-4">
                {machineFeatures.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center mr-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <span className="text-black font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-black text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-lg">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
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

      {/* Product Options Section */}
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
              {t('products.productsBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('products.productsTitle')} <span className="text-red-600">{t('products.productsTitle2')}</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('products.productsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-72 sm:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">{product.name}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
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
              {t('products.specsBadge')}
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              {t('products.specsTitle')} <span className="text-red-600">{t('products.specsTitle2')}</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('products.specsSubtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                className="group text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-24 h-24 ${spec.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg group-hover:scale-110 transition-transform`}>
                  {spec.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-black">{spec.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{spec.description}</p>
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
            {t('products.ctaTitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            {t('products.ctaSubtitle')}
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all text-xl font-bold shadow-2xl hover:-translate-y-1"
          >
            {t('products.ctaButton')}
          </Link>
        </motion.div>
      </section>
    </div>
  );
}