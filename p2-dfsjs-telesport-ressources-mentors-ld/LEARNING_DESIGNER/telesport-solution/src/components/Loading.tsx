/**
 * Composant Loading
 * Affiche un message de chargement centré
 */
export const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Chargement des données...</p>
      </div>
    </div>
  );
};
