import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

// Données mockées pour simuler une réponse d'API
const mockOlympicData: Olympic[] = [
  {
    id: 1,
    country: 'France',
    participations: [
      { id: 1, year: 2020, city: 'Tokyo', medalsCount: 33, athleteCount: 411 },
      { id: 2, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 401 },
      { id: 3, year: 2012, city: 'Londres', medalsCount: 34, athleteCount: 330 },
      { id: 4, year: 2008, city: 'Pékin', medalsCount: 41, athleteCount: 323 },
      { id: 5, year: 2004, city: 'Athènes', medalsCount: 33, athleteCount: 308 }
    ]
  },
  {
    id: 2,
    country: 'États-Unis',
    participations: [
      { id: 6, year: 2020, city: 'Tokyo', medalsCount: 113, athleteCount: 613 },
      { id: 7, year: 2016, city: 'Rio', medalsCount: 121, athleteCount: 555 },
      { id: 8, year: 2012, city: 'Londres', medalsCount: 104, athleteCount: 530 },
      { id: 9, year: 2008, city: 'Pékin', medalsCount: 112, athleteCount: 596 },
      { id: 10, year: 2004, city: 'Athènes', medalsCount: 103, athleteCount: 533 }
    ]
  },
  {
    id: 3,
    country: 'Chine',
    participations: [
      { id: 11, year: 2020, city: 'Tokyo', medalsCount: 88, athleteCount: 431 },
      { id: 12, year: 2016, city: 'Rio', medalsCount: 70, athleteCount: 416 },
      { id: 13, year: 2012, city: 'Londres', medalsCount: 88, athleteCount: 396 },
      { id: 14, year: 2008, city: 'Pékin', medalsCount: 100, athleteCount: 639 },
      { id: 15, year: 2004, city: 'Athènes', medalsCount: 63, athleteCount: 407 }
    ]
  },
  {
    id: 4,
    country: 'Allemagne',
    participations: [
      { id: 16, year: 2020, city: 'Tokyo', medalsCount: 37, athleteCount: 425 },
      { id: 17, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 425 },
      { id: 18, year: 2012, city: 'Londres', medalsCount: 44, athleteCount: 392 },
      { id: 19, year: 2008, city: 'Pékin', medalsCount: 41, athleteCount: 463 },
      { id: 20, year: 2004, city: 'Athènes', medalsCount: 49, athleteCount: 441 }
    ]
  },
  {
    id: 5,
    country: 'Japon',
    participations: [
      { id: 21, year: 2020, city: 'Tokyo', medalsCount: 58, athleteCount: 582 },
      { id: 22, year: 2016, city: 'Rio', medalsCount: 41, athleteCount: 338 },
      { id: 23, year: 2012, city: 'Londres', medalsCount: 38, athleteCount: 295 },
      { id: 24, year: 2008, city: 'Pékin', medalsCount: 25, athleteCount: 351 },
      { id: 25, year: 2004, city: 'Athènes', medalsCount: 37, athleteCount: 312 }
    ]
  }
];

export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simuler un appel API avec un délai
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simuler un délai réseau de 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(mockOlympicData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fonction pour récupérer un pays par son ID
  const getCountryById = (id: number): Olympic | undefined => {
    return data.find(country => country.id === id);
  };

  // Fonction pour calculer le nombre total de médailles par pays
  const getTotalMedals = (country: Olympic): number => {
    return country.participations.reduce((total, participation) => total + participation.medalsCount, 0);
  };

  // Fonction pour calculer le nombre total d'athlètes par pays
  const getTotalAthletes = (country: Olympic): number => {
    return country.participations.reduce((total, participation) => total + participation.athleteCount, 0);
  };

  return {
    data,
    loading,
    error,
    getCountryById,
    getTotalMedals,
    getTotalAthletes
  };
};
