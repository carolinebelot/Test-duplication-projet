import { useNavigate } from 'react-router-dom';
import { useOlympicData } from '../hooks/useOlympicData';
import { Indicator } from '../components/Indicator';
import { MedalsPieChart } from '../components/MedalsPieChart';

/**
 * Page d'accueil : Dashboard des Jeux Olympiques
 *
 * Affiche les statistiques globales et un graphique des médailles par pays
 */
export const Home = () => {
  const data = useOlympicData();
  const navigate = useNavigate();

  const handleCountryClick = (countryId: number) => {
    navigate(`/country/${countryId}`);
  };

  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Chargement des données...</div>
      </div>
    );
  }

  const totalParticipatingCountries = data.length;
  const totalGamesEditions = 5;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Historique des Jeux Olympiques - TéléSport
        </h1>

        <div className="mb-8 text-center">
          <p className="text-lg mb-4">
            Bienvenue sur la page dédiée à l'historique des Jeux Olympiques.
            Explorez les performances des pays au fil des années.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Indicator
            title="Pays participants"
            value={totalParticipatingCountries}
            color="blue"
          />
          <Indicator
            title="Éditions des JO"
            value={totalGamesEditions}
            color="green"
          />
        </div>

        <MedalsPieChart data={data} onCountryClick={handleCountryClick} />

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  );
};
