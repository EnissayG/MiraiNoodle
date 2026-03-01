import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Zap, Clock, Utensils, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import logo from '../../assets/logo.png'; 

export function Home() {
  const features = [
    {
      icon: <Zap className="w-10 h-10 text-red-600" />,
      title: 'Rapide et Pratique',
      description: 'Nouilles instantanées prêtes en quelques minutes',
    },
    {
      icon: <Clock className="w-10 h-10 text-red-600" />,
      title: 'Disponible 24/7',
      description: 'Accessible à tout moment, jour et nuit',
    },
    {
      icon: <Utensils className="w-10 h-10 text-red-600" />,
      title: 'Saveurs Variées',
      description: 'Plusieurs options de nouilles délicieuses',
    },
  ];

  const locations = [
    {
      name: 'Guy-Concordia',
      details: 'Station de métro Guy-Concordia',
    },
    {
      name: 'UQAM Campus',
      details: '2 emplacements disponibles',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Full Height with Logo Top and Text Center */}
      <section className="relative bg-black h-screen overflow-hidden">
        {/* Video Background from Cloudinary, covering full area */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://res.cloudinary.com/dkdllswlj/video/upload/_users_427e3900-721d-4f47-af2a-8b32a1409660_generated_a770ece7-5cb3-4ae6-8d88-db2f37971d50_generated_video_ste0fi.mp4"
          />

          {/* Overlay gradient */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
        </div>
        
        {/* Logo en Haut */}
        <motion.div 
          className="absolute top-24 left-1/2 -translate-x-1/2 z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img src={logo} alt="Mirai Ramen" className="h-28 sm:h-32 lg:h-36 w-auto" />
        </motion.div>
        
        {/* Texte au Centre */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center px-6 space-y-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white">
            Des Nouilles
            <span className="block text-red-600 mt-3">Instantanées</span>
            <span className="block text-yellow-400 mt-3">24/7</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed max-w-xl mx-auto">
            Découvrez nos distributeurs automatiques de ramen. 
            Délicieux, rapide et toujours disponible sur les campus de Montréal.
          </p>
        </motion.div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-20 sm:h-28 bg-black">
        <svg className="absolute bottom-0 w-full h-20 sm:h-28 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 8.41379C120 16.8276 240 33.6552 360 37.931C480 42.2069 600 33.6552 720 29.3793C840 25.1034 960 25.1034 1080 29.3793C1200 33.6552 1320 42.2069 1380 46.6207L1440 50.8966V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50 relative">
        {/* Subtle Japanese wave pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#DC2626" d="M43.3,-59.4C54.8,-49.7,61.8,-34.9,66.3,-19.1C70.8,-3.3,72.8,13.5,67.7,27.7C62.6,41.9,50.4,53.5,36.6,61.4C22.8,69.3,7.4,73.5,-7.6,73.1C-22.6,72.7,-37.2,67.7,-49.9,58.9C-62.6,50.1,-73.4,37.5,-77.9,23C-82.4,8.5,-80.6,-7.9,-74.3,-22.1C-68,-36.3,-57.2,-48.3,-44.3,-57.6C-31.4,-66.9,-15.7,-73.5,0.4,-74.1C16.5,-74.7,32.9,-69.1,43.3,-59.4Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <motion.div 
            className="text-center mb-20 sm:mb-24 space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Pourquoi <span className="text-red-600">Mirai Ramen</span> ?
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une solution pratique pour un repas rapide et délicieux, 
              parfaite pour les étudiants et professionnels pressés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl p-10 sm:p-12 hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Ligne jaune cartoonesque japonaise qui grandit au hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 bg-yellow-400 rounded-full transition-all duration-500 ease-out w-0 group-hover:w-[80%]"
                     style={{
                       boxShadow: '0 2px 8px rgba(251, 191, 36, 0.4)'
                     }}
                ></div>
                
                <div className="w-20 h-20 bg-red-50 rounded-xl flex items-center justify-center mb-8 transition-all duration-500">
                  <div className="transition-colors duration-500">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-5 text-black">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-yellow-50 text-yellow-700 px-5 py-2.5 rounded-full font-semibold">
              Nos Emplacements
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Trouvez-Nous à <span className="text-red-600">Montréal</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nos distributeurs sont situés dans les endroits les plus fréquentés
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-10 border-2 border-gray-100 hover:border-red-600 transition-all duration-300 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute top-8 right-8 w-16 h-16 bg-red-50 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-all">
                  <MapPin className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4 pr-20">{location.name}</h3>
                <p className="text-gray-600 text-xl leading-relaxed">{location.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
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
              <div className="absolute inset-0 bg-yellow-400/10 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761125065373-05a8e2f85cd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwbm9vZGxlcyUyMHJhbWVuJTIwYm93bHxlbnwxfHx8fDE3NzIzMjQzNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bol de ramen"
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
                Qualité Supérieure
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Des Nouilles <span className="text-red-600">de Qualité</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Nos distributeurs proposent une sélection de nouilles instantanées 
                soigneusement choisies. Prêt en quelques minutes pour satisfaire 
                votre faim rapidement.
              </p>
              <div className="space-y-6 pt-4">
                {[
                  'Plusieurs saveurs disponibles',
                  'Préparation rapide et facile',
                  'Prix abordable pour les étudiants'
                ].map((item, index) => (
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
                    <span className="text-gray-700 text-xl">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            Une Question ou Une Suggestion ?
          </h2>
          <p className="text-xl sm:text-2xl text-white/95 max-w-2xl mx-auto leading-relaxed">
            N'hésitez pas à nous contacter pour toute information sur nos distributeurs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-red-600 px-12 py-6 rounded-xl hover:bg-gray-50 transition-all text-xl font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1"
          >
            Contactez-Nous
          </Link>
        </motion.div>
      </section>
    </div>
  );
}