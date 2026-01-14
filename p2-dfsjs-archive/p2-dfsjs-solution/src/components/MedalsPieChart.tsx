import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Olympic } from '../models/Olympic';
import { calculateTotalMedals } from '../hooks/useOlympicData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface MedalsPieChartProps {
  data: Olympic[];
  onCountryClick: (countryId: number) => void;
}

/**
 * Composant affichant un graphique en camembert des médailles par pays
 *
 * @param data - La liste des pays avec leurs données olympiques
 * @param onCountryClick - Callback appelé lors du clic sur un pays
 */
export const MedalsPieChart = ({ data, onCountryClick }: MedalsPieChartProps) => {
  const chartData = {
    labels: data.map(olympic => olympic.country),
    datasets: [
      {
        label: 'Total des médailles',
        data: data.map(olympic => calculateTotalMedals(olympic)),
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
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    onClick: (_event: unknown, elements: { index: number }[]) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const country = data[index];
        onCountryClick(country.id);
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
      title: {
        display: true,
        text: 'Total des médailles par pays',
        color: 'white',
      },
    },
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div style={{ height: '400px' }}>
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};
