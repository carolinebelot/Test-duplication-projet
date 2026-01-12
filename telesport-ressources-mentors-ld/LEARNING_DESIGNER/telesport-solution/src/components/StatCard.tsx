interface StatCardProps {
  label: string;
  value: number;
}

/**
 * Composant réutilisable pour afficher une statistique
 * Utilisé dans le Dashboard et la page Country
 */
export const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <p className="text-gray-600 text-sm mb-2">{label}</p>
      <p className="text-3xl font-bold text-blue-600">{value}</p>
    </div>
  );
};
