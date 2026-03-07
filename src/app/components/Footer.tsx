import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useLanguage } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <img src={logo} alt="Mirai Ramen" className="h-12 w-auto mb-6" />
            <p className="text-gray-400 leading-relaxed text-lg">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-600">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-red-600 transition-colors text-lg flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-red-600 transition-colors text-lg flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.products')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-red-600 transition-colors text-lg flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-lg flex items-center group">
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-600">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Phone size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">+1 (514) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <Mail size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">info@mirairamen.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 group hover:text-white transition-colors">
                <MapPin size={20} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg">Montréal, Québec</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">&copy; 2026 Mirai Ramen. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}