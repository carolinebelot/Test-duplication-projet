import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement)

// BAD PRACTICE: Data directly in the component file
const olympicData: any = [
  {
    id: 1,
    country: 'États-Unis',
    gold: 113,
    silver: 94,
    bronze: 72,
    total: 279,
    participations: 28,
    athletes: 613
  },
  {
    id: 2,
    country: 'France',
    gold: 71,
    silver: 86,
    bronze: 75,
    total: 232,
    participations: 29,
    athletes: 378
  },
  {
    id: 3,
    country: 'Chine',
    gold: 88,
    silver: 72,
    bronze: 65,
    total: 225,
    participations: 11,
    athletes: 431
  },
  {
    id: 4,
    country: 'Grande-Bretagne',
    gold: 67,
    silver: 79,
    bronze: 69,
    total: 215,
    participations: 29,
    athletes: 327
  },
  {
    id: 5,
    country: 'Allemagne',
    gold: 57,
    silver: 66,
    bronze: 81,
    total: 204,
    participations: 25,
    athletes: 428
  }
]

// BAD PRACTICE: Everything in one giant component
function Dashboard() {
  const navigate = useNavigate()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // BAD PRACTICE: Side effect not properly managed (missing dependencies)
  useEffect(() => {
    console.log('Loading data...') // BAD PRACTICE: console.log left in code
    // Simulating API call
    setTimeout(() => {
      setData(olympicData)
      setLoading(false)
      console.log('Data loaded!') // BAD PRACTICE: console.log
    }, 500)
  })

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Chargement...</div>
  }

  // BAD PRACTICE: Complex logic directly in render
  const totalGold = data.reduce((acc: any, country: any) => acc + country.gold, 0)
  const totalSilver = data.reduce((acc: any, country: any) => acc + country.silver, 0)
  const totalBronze = data.reduce((acc: any, country: any) => acc + country.bronze, 0)
  const totalMedals = totalGold + totalSilver + totalBronze

  // BAD PRACTICE: Chart data preparation in component
  const chartData = {
    labels: data.map((country: any) => country.country),
    datasets: [
      {
        label: 'Médailles totales',
        data: data.map((country: any) => country.total),
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
  }

  const handleChartClick = (event: any, elements: any) => {
    if (elements.length > 0) {
      const index = elements[0].index
      const countryId = data[index].id
      navigate(`/country/${countryId}`)
    }
  }

  // BAD PRACTICE: Huge JSX directly in component
  return (
    <div className="min-h-screen bg-gray-100">
      {/* BAD PRACTICE: No reusable Header component */}
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">TéléSport - Jeux Olympiques</h1>
        <p className="text-lg mt-2">Historique des performances olympiques</p>
      </header>

      <main className="container mx-auto p-6">
        {/* BAD PRACTICE: Stats hardcoded inline, no component */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Total Médailles</h3>
            <p className="text-3xl font-bold text-gray-800">{totalMedals}</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Or</h3>
            <p className="text-3xl font-bold text-yellow-600">{totalGold}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Argent</h3>
            <p className="text-3xl font-bold text-gray-600">{totalSilver}</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Bronze</h3>
            <p className="text-3xl font-bold text-orange-600">{totalBronze}</p>
          </div>
        </div>

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

        {/* BAD PRACTICE: Table could be its own component */}
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
              {data.map((country: any, index: number) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 cursor-pointer"
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
  )
}

// BAD PRACTICE: Another big component in same file
function CountryDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [country, setCountry] = useState<any>(null)

  // BAD PRACTICE: Data fetching logic repeated
  useEffect(() => {
    console.log('Loading country data for id:', id) // BAD PRACTICE: console.log
    const foundCountry = olympicData.find((c: any) => c.id === parseInt(id || '0'))
    setCountry(foundCountry)
  }, [id])

  if (!country) {
    return <div className="flex items-center justify-center h-screen">Pays non trouvé</div>
  }

  // BAD PRACTICE: Chart data inline (hardcoded mock data)
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
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* BAD PRACTICE: Duplicated header code */}
      <header className="bg-blue-600 text-white p-6 shadow-lg">
        <h1 className="text-4xl font-bold">TéléSport - Jeux Olympiques</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100"
        >
          ← Retour au tableau
        </button>
      </header>

      <main className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">{country.country}</h2>

        {/* BAD PRACTICE: Duplicated stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Participations</h3>
            <p className="text-3xl font-bold text-gray-800">{country.participations}</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Médailles d'or</h3>
            <p className="text-3xl font-bold text-yellow-600">{country.gold}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Médailles d'argent</h3>
            <p className="text-3xl font-bold text-gray-600">{country.silver}</p>
          </div>
          <div className="bg-orange-100 p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-sm uppercase">Médailles de bronze</h3>
            <p className="text-3xl font-bold text-orange-600">{country.bronze}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <span className="font-bold">{(country.total / country.athletes).toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Évolution historique</h3>
            <Bar data={historyData} options={{ responsive: true }} />
          </div>
        </div>
      </main>
    </div>
  )
}

// BAD PRACTICE: Router setup in App component instead of separate file
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/country/:id" element={<CountryDetail />} />
        {/* BAD PRACTICE: No 404 route */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
