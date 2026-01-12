import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';

const COLORS = ['#0066CC', '#FF6B35', '#4CAF50', '#FFC107', '#9C27B0'];

export const Home = () => {
  const { data, loading, error, getTotalMedals } = useOlympicData();
  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  // Préparer les données pour le graphique
  const chartData = data.map(country => ({
    name: country.country,
    value: getTotalMedals(country),
    id: country.id
  }));

  // Calculer les statistiques globales
  const totalCountries = data.length;
  const totalOlympics = data[0]?.participations.length || 0;

  const handleClick = (entry: { id: number }) => {
    navigate(`/country/${entry.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="TéléSport - Jeux Olympiques" />

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenue sur la plateforme TéléSport
          </h2>
          <p className="text-gray-600 mb-6">
            Découvrez les performances olympiques des pays à travers les années.
            Cliquez sur un pays dans le graphique pour voir ses statistiques détaillées.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <StatsCard label="Nombre de pays participants" value={totalCountries} />
            <StatsCard label="Nombre d'éditions des JO" value={totalOlympics} />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Médailles totales par pays
          </h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => entry.name}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>
      </main>
    </div>
  );
};
