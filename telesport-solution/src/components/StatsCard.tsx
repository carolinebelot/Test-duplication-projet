interface StatsCardProps {
  label: string;
  value: number | string;
}

export const StatsCard = ({ label, value }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
      <h3 className="text-gray-600 text-sm font-medium mb-2">{label}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );
};
