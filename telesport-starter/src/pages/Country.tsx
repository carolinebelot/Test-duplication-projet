import { useParams, useNavigate, Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useOlympicData } from '../hooks/useOlympicData';
import { Header } from '../components/Header';
import { StatsCard } from '../components/StatsCard';
import { Loading } from '../components/Loading';
import { ErrorMessage } from '../components/ErrorMessage';
import { useEffect } from 'react';

export const Country = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, loading, error, getCountryById, getTotalMedals, getTotalAthletes } = useOlympicData();

  const countryId = id ? parseInt(id, 10) : undefined;
  const country = countryId ? getCountryById(countryId) : undefined;

  useEffect(() => {
    // Rediriger vers la page 404 si le pays n'existe pas après le chargement
    if (!loading && !country && countryId) {
      navigate('/not-found', { replace: true });
    }
  }, [loading, country, countryId, navigate]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!country) return <Loading />;

  // Préparer les données pour le graphique d'évolution
  const chartData = country.participations.map(participation => ({
    year: participation.year,
    médailles: participation.medalsCount,
    city: participation.city
  }));

  const totalMedals = getTotalMedals(country);
  const totalAthletes = getTotalAthletes(country);
  const totalParticipations = country.participations.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={`TéléSport - ${country.country}`} />

      <main className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-6 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Retour au tableau de bord
        </Link>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Statistiques pour {country.country}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard label="Nombre de participations" value={totalParticipations} />
            <StatsCard label="Total de médailles" value={totalMedals} />
            <StatsCard label="Total d'athlètes" value={totalAthletes} />
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Évolution des médailles au fil du temps
          </h3>
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
                stroke="#0066CC"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </section>

        <section className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Historique des participations
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Année
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ville
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Médailles
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Athlètes
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {country.participations.map((participation) => (
                  <tr key={participation.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {participation.year}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.city}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.medalsCount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {participation.athleteCount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};
