import { useParams, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { StatCard } from '../components/StatCard';

/**
 * Page détail d'un pays
 * VERSION SOLUTION COMPLÈTE
 */
export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useOlympicData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Trouver le pays correspondant à l'ID
  const country = data.find(c => c.id === Number(id));

  if (!country) {
    return <ErrorMessage message="Pays non trouvé" />;
  }

  // Calculer les statistiques
  const totalParticipations = country.participations.length;

  const totalMedals = country.participations.reduce(
    (sum, participation) => sum + participation.medalsCount,
    0
  );

  const totalAthletes = country.participations.reduce(
    (sum, participation) => sum + participation.athleteCount,
    0
  );

  // Préparer les données pour le graphique (triées par année)
  const chartData = [...country.participations]
    .sort((a, b) => a.year - b.year)
    .map(participation => ({
      year: participation.year.toString(),
      médailles: participation.medalsCount,
      athlètes: participation.athleteCount,
    }));

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Bouton retour */}
        <Link
          to="/"
          className="inline-block mb-6 text-blue-600 hover:text-blue-800 font-medium"
        >
          ← Retour au tableau
        </Link>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          {country.country}
        </h1>

        {/* Section des statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard label="Nombre de participations" value={totalParticipations} />
          <StatCard label="Total de médailles" value={totalMedals} />
          <StatCard label="Total d'athlètes" value={totalAthletes} />
        </div>

        {/* Section du graphique d'évolution */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Évolution des médailles et athlètes
          </h2>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="médailles"
                stroke="#8884d8"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="athlètes"
                stroke="#82ca9d"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
