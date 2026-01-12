import { Link } from 'react-router-dom';

/**
 * Page 404 - Affichée quand l'utilisateur accède à une route inexistante
 */
export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page non trouvée</p>
        <Link
          to="/"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};
