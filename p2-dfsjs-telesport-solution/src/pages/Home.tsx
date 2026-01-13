import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';

ChartJS.register(ArcElement, Tooltip, Legend);

/**
 * Page Home - Dashboard principal
 * Affiche les statistiques globales et un graphique des médailles par pays
 */
export const Home = () => {
  const navigate = useNavigate();
  const { data, loading } = useOlympicData();

  // Calcul des statistiques globales (mémoïsé pour optimisation)
  const stats = useMemo(() => {
    const totalGold = data.reduce((acc, country) => acc + country.gold, 0);
    const totalSilver = data.reduce((acc, country) => acc + country.silver, 0);
    const totalBronze = data.reduce((acc, country) => acc + country.bronze, 0);
    const totalMedals = totalGold + totalSilver + totalBronze;

    return { totalGold, totalSilver, totalBronze, totalMedals };
  }, [data]);

  // Préparation des données pour le graphique
  const chartData = useMemo(() => ({
    labels: data.map(country => country.country),
    datasets: [
      {
        label: 'Médailles totales',
        data: data.map(country => country.total),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }), [data]);

  const handleChartClick = (_event: unknown, elements: { index: number }[]) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      const countryId = data[index].id;
      navigate(`/country/${countryId}`);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto p-6">
        {/* Cartes de statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Médailles"
            value={stats.totalMedals}
          />
          <StatsCard
            title="Or"
            value={stats.totalGold}
            bgColor="bg-yellow-100"
            textColor="text-yellow-600"
          />
          <StatsCard
            title="Argent"
            value={stats.totalSilver}
            bgColor="bg-gray-100"
            textColor="text-gray-600"
          />
          <StatsCard
            title="Bronze"
            value={stats.totalBronze}
            bgColor="bg-orange-100"
            textColor="text-orange-600"
          />
        </div>

        {/* Graphique circulaire */}
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">Répartition des médailles par pays</h2>
          <div className="max-w-md mx-auto">
            <Pie
              data={chartData}
              options={{
                onClick: handleChartClick,
                responsive: true,
                plugins: {
                  legend: {
                    position: 'bottom',
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Tableau des pays */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Pays
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Or
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Argent
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Bronze
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((country) => (
                <tr
                  key={country.id}
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/country/${country.id}`)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {country.country}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-bold">
                    {country.gold}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 font-bold">
                    {country.silver}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 font-bold">
                    {country.bronze}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                    {country.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
