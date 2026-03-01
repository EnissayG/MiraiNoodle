import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  const faqs = [
    {
      question: 'Comment utiliser les distributeurs Mirai Ramen ?',
      answer: 'C\'est très simple ! Sélectionnez vos nouilles sur l\'écran tactile, effectuez le paiement par carte, et récupérez vos nouilles avec l\'eau chaude fournie.',
    },
    {
      question: 'Quels modes de paiement acceptez-vous ?',
      answer: 'Nos machines acceptent les cartes de crédit, débit et les paiements sans contact (Apple Pay, Google Pay, etc.).',
    },
    {
      question: 'Où sont situés vos distributeurs ?',
      answer: 'Nous avons actuellement 3-4 machines : une à Guy-Concordia et deux à l\'UQAM. Consultez notre page "À Propos" pour les emplacements précis.',
    },
    {
      question: 'Comment obtenir un distributeur dans mon établissement ?',
      answer: 'Nous installons nos distributeurs dans des lieux à fort passage. Utilisez le formulaire ci-dessus pour nous parler de votre emplacement.',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-white pt-28 pb-36 sm:pt-36 sm:pb-44">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
          
          {/* Japanese decorative elements */}
          <div className="absolute top-20 left-1/4 w-32 h-32 border-4 border-red-600/20 rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border-4 border-yellow-400/20 rounded-full"></div>
          
          {/* Organic shape pattern */}
          <div className="absolute top-1/4 right-10 w-64 h-64 opacity-5">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC2626" d="M43.3,-59.4C54.8,-49.7,61.8,-34.9,66.3,-19.1C70.8,-3.3,72.8,13.5,67.7,27.7C62.6,41.9,50.4,53.5,36.6,61.4C22.8,69.3,7.4,73.5,-7.6,73.1C-22.6,72.7,-37.2,67.7,-49.9,58.9C-62.6,50.1,-73.4,37.5,-77.9,23C-82.4,8.5,-80.6,-7.9,-74.3,-22.1C-68,-36.3,-57.2,-48.3,-44.3,-57.6C-31.4,-66.9,-15.7,-73.5,0.4,-74.1C16.5,-74.7,32.9,-69.1,43.3,-59.4Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>
        
        <motion.div 
          className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block bg-red-50 text-red-600 px-5 py-2.5 rounded-full font-semibold">
            Parlons Ensemble
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">
            <span className="text-red-600">Contactez</span> Nous
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            Une question ? Vous voulez un distributeur ? Nous sommes à votre écoute.
          </p>
        </motion.div>
      </section>

      {/* Wave Separator */}
      <div className="relative h-20 sm:h-28 bg-white">
        <svg className="absolute bottom-0 w-full h-20 sm:h-28 text-gray-50" preserveAspectRatio="none" viewBox="0 0 1440 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L60 8.41379C120 16.8276 240 33.6552 360 37.931C480 42.2069 600 33.6552 720 29.3793C840 25.1034 960 25.1034 1080 29.3793C1200 33.6552 1320 42.2069 1380 46.6207L1440 50.8966V74H1380C1320 74 1200 74 1080 74C960 74 840 74 720 74C600 74 480 74 360 74C240 74 120 74 60 74H0V0Z" fill="currentColor"/>
        </svg>
      </div>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Contact Info */}
            <motion.div 
              className="lg:col-span-1 space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                  Informations de Contact
                </h2>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Nous sommes là pour répondre à toutes vos questions.
                </p>
              </div>
              
              <div className="space-y-8">
                <motion.div 
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black mb-2 text-xl">Téléphone</h3>
                      <p className="text-gray-600 text-lg">+1 (514) 123-4567</p>
                      <p className="text-gray-500 mt-1">Lun-Ven 9h-18h</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Mail className="w-8 h-8 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black mb-2 text-xl">Courriel</h3>
                      <p className="text-gray-600 text-lg break-all">info@mirairamen.com</p>
                      <p className="text-gray-600 text-lg break-all">support@mirairamen.com</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  className="group bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-5">
                    <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black mb-2 text-xl">Emplacements</h3>
                      <p className="text-gray-600 text-lg">Guy-Concordia</p>
                      <p className="text-gray-600 text-lg">UQAM (2 emplacements)</p>
                      <p className="text-gray-600 text-lg">Montréal, QC</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-red-600 rounded-3xl p-8 text-white shadow-xl">
                <div className="flex items-start space-x-4 mb-4">
                  <MessageCircle className="w-7 h-7 mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold">Réponse Rapide</h3>
                </div>
                <p className="text-white/95 text-lg leading-relaxed">
                  Nous répondons généralement aux demandes dans les 24 heures. 
                  Pour les urgences, appelez-nous directement.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-10 sm:p-12 lg:p-14">
                <div className="mb-10 space-y-4">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    Envoyez-nous un Message
                  </h2>
                  <p className="text-gray-600 text-xl leading-relaxed">
                    Remplissez le formulaire ci-dessous et nous vous répondrons rapidement.
                  </p>
                </div>
                
                {submitted ? (
                  <motion.div 
                    className="bg-green-50 border-2 border-green-500 rounded-3xl p-12 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                      <Send className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-4xl font-bold text-green-700 mb-4">Merci !</h3>
                    <p className="text-gray-600 text-xl leading-relaxed">
                      Votre message a été envoyé avec succès. Nous vous répondrons bientôt.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block font-bold text-gray-700 mb-3 text-lg">
                          Nom Complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-all text-lg"
                          placeholder="Jean Dupont"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-bold text-gray-700 mb-3 text-lg">
                          Adresse Courriel *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-all text-lg"
                          placeholder="jean@exemple.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block font-bold text-gray-700 mb-3 text-lg">
                          Numéro de Téléphone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-all text-lg"
                          placeholder="+1 (514) 123-4567"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block font-bold text-gray-700 mb-3 text-lg">
                          Sujet *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-all text-lg"
                        >
                          <option value="">Sélectionnez un sujet</option>
                          <option value="question">Question générale</option>
                          <option value="machine">Problème avec une machine</option>
                          <option value="location">Demande d'installation</option>
                          <option value="partnership">Partenariat</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-bold text-gray-700 mb-3 text-lg">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-6 py-5 border-2 border-gray-200 rounded-xl focus:border-red-600 focus:outline-none transition-all resize-none text-lg"
                        placeholder="Parlez-nous de votre demande..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-6 rounded-xl hover:bg-red-700 transition-all text-xl font-bold shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 flex items-center justify-center space-x-3 hover:-translate-y-0.5"
                    >
                      <span>Envoyer le Message</span>
                      <Send className="w-6 h-6" />
                    </button>

                    <p className="text-gray-500 text-center text-lg">
                      * Champs obligatoires
                    </p>
                  </form>
                )}
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

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div 
            className="text-center mb-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-yellow-50 text-yellow-700 px-5 py-2.5 rounded-full font-semibold">
              FAQ
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">
              Questions <span className="text-red-600">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trouvez rapidement les réponses à vos questions
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="group bg-gray-50 rounded-3xl p-10 hover:bg-white hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-red-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 flex items-start">
                  <span className="text-red-600 mr-4 flex-shrink-0">Q.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-gray-600 leading-relaxed pl-10 text-xl">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}