import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { StatCard } from '../components/StatCard';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

/**
 * Page Dashboard - Accueil de l'application
 * VERSION SOLUTION COMPLÈTE
 */
export const Home = () => {
  const { data, loading, error } = useOlympicData();
  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Calculer les statistiques
  const totalCountries = data.length;

  // Trouver le nombre total de Jeux Olympiques (années uniques)
  const allYears = new Set<number>();
  data.forEach(country => {
    country.participations.forEach(participation => {
      allYears.add(participation.year);
    });
  });
  const totalOlympics = allYears.size;

  // Préparer les données pour le graphique
  const chartData = data.map(country => {
    const totalMedals = country.participations.reduce(
      (sum, participation) => sum + participation.medalsCount,
      0
    );
    return {
      name: country.country,
      value: totalMedals,
      id: country.id,
    };
  });

  // Fonction pour gérer le clic sur un pays
  const handlePieClick = (entry: { id: number }) => {
    navigate(`/country/${entry.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Jeux Olympiques - Tableau des Médailles
        </h1>

        {/* Section des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <StatCard label="Nombre de pays participants" value={totalCountries} />
          <StatCard label="Nombre de Jeux Olympiques" value={totalOlympics} />
        </div>

        {/* Section du graphique */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Médailles par pays (Total toutes années confondues)
          </h2>

          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                onClick={handlePieClick}
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

          <p className="text-gray-600 text-center mt-4">
            Cliquez sur un pays pour voir les détails
          </p>
        </div>
      </div>
    </div>
  );
};
