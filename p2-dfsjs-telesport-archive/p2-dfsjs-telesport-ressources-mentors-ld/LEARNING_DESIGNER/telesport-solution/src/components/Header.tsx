interface HeaderProps {
  showBackButton?: boolean;
  onBack?: () => void;
}

/**
 * Composant Header réutilisable
 * Affiche le titre de l'application et optionnellement un bouton retour
 */
export const Header = ({ showBackButton = false, onBack }: HeaderProps) => {
  return (
    <header className="bg-blue-600 text-white p-6 shadow-lg">
      <h1 className="text-4xl font-bold">TéléSport - Jeux Olympiques</h1>
      <p className="text-lg mt-2">Historique des performances olympiques</p>
      {showBackButton && onBack && (
        <button
          onClick={onBack}
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
        >
          ← Retour au tableau
        </button>
      )}
    </header>
  );
};
