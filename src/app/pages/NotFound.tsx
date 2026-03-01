import { Link } from 'react-router';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-4">Page Non Trouvée</h2>
        <p className="text-xl text-white mb-8 max-w-md mx-auto">
          Oups ! La page que vous cherchez n'existe pas. 
          Retournons à la page d'accueil.
        </p>
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg font-medium"
        >
          <Home className="w-5 h-5" />
          <span>Retour à l'Accueil</span>
        </Link>
      </div>
    </div>
  );
}