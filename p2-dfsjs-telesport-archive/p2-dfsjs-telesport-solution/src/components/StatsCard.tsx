interface StatsCardProps {
  title: string;
  value: number | string;
  bgColor?: string;
  textColor?: string;
}

/**
 * Composant StatsCard réutilisable
 * Affiche une carte de statistique avec titre et valeur
 */
export const StatsCard = ({
  title,
  value,
  bgColor = 'bg-white',
  textColor = 'text-gray-800'
}: StatsCardProps) => {
  return (
    <div className={`${bgColor} p-6 rounded-lg shadow`}>
      <h3 className="text-gray-600 text-sm uppercase">{title}</h3>
      <p className={`text-3xl font-bold ${textColor}`}>{value}</p>
    </div>
  );
};
