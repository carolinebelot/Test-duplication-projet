import { useParams, useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/**
 * Page Country - Détails d'un pays
 * Affiche les statistiques détaillées et l'évolution historique
 */
export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getCountryById, loading } = useOlympicData();

  if (loading) {
    return <Loading />;
  }

  const country = getCountryById(parseInt(id || '0'));

  if (!country) {
    return <ErrorMessage message="Pays non trouvé. Veuillez revenir à la page d'accueil." />;
  }

  // Données mockées pour l'évolution historique
  // Dans un projet réel, ces données viendraient de l'API
  const historyData = {
    labels: ['2000', '2004', '2008', '2012', '2016', '2020'],
    datasets: [
      {
        label: 'Or',
        data: [40, 35, 36, 46, 46, 39],
        backgroundColor: 'rgba(255, 206, 86, 0.6)',
      },
      {
        label: 'Argent',
        data: [24, 39, 38, 28, 37, 41],
        backgroundColor: 'rgba(192, 192, 192, 0.6)',
      },
      {
        label: 'Bronze',
        data: [33, 27, 36, 32, 38, 33],
        backgroundColor: 'rgba(205, 127, 50, 0.6)',
      },
    ],
  };

  const medalsPerAthlete = (country.total / country.athletes).toFixed(2);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header showBackButton onBack={() => navigate('/')} />

      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">{country.country}</h2>

        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Participations"
            value={country.participations}
          />
          <StatsCard
            title="Médailles d'or"
            value={country.gold}
            bgColor="bg-yellow-100"
            textColor="text-yellow-600"
          />
          <StatsCard
            title="Médailles d'argent"
            value={country.silver}
            bgColor="bg-gray-100"
            textColor="text-gray-600"
          />
          <StatsCard
            title="Médailles de bronze"
            value={country.bronze}
            bgColor="bg-orange-100"
            textColor="text-orange-600"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Statistiques générales */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Statistiques générales</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Total médailles:</span>
                <span className="font-bold">{country.total}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Athlètes:</span>
                <span className="font-bold">{country.athletes}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Médailles par athlète:</span>
                <span className="font-bold">{medalsPerAthlete}</span>
              </div>
            </div>
          </div>

          {/* Graphique d'évolution */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Évolution historique</h3>
            <Bar
              data={historyData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                },
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
