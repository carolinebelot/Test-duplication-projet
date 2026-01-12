import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

/**
 * Custom Hook pour récupérer les données olympiques
 * Dans ce projet, les données sont mockées localement
 * Dans un projet futur, ce hook fera un appel API
 */
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulation d'un appel API avec setTimeout
    const fetchData = async () => {
      try {
        setLoading(true);

        // Simulation d'un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));

        // Données mockées complètes - VERSION SOLUTION
        const mockData: Olympic[] = [
          {
            id: 1,
            country: 'France',
            participations: [
              { id: 1, year: 2020, city: 'Tokyo', medalsCount: 33, athleteCount: 378 },
              { id: 2, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 396 },
              { id: 3, year: 2012, city: 'Londres', medalsCount: 34, athleteCount: 330 },
              { id: 4, year: 2008, city: 'Pékin', medalsCount: 43, athleteCount: 323 },
            ],
          },
          {
            id: 2,
            country: 'États-Unis',
            participations: [
              { id: 5, year: 2020, city: 'Tokyo', medalsCount: 113, athleteCount: 613 },
              { id: 6, year: 2016, city: 'Rio', medalsCount: 121, athleteCount: 554 },
              { id: 7, year: 2012, city: 'Londres', medalsCount: 104, athleteCount: 530 },
              { id: 8, year: 2008, city: 'Pékin', medalsCount: 112, athleteCount: 596 },
            ],
          },
          {
            id: 3,
            country: 'Chine',
            participations: [
              { id: 9, year: 2020, city: 'Tokyo', medalsCount: 88, athleteCount: 431 },
              { id: 10, year: 2016, city: 'Rio', medalsCount: 70, athleteCount: 411 },
              { id: 11, year: 2012, city: 'Londres', medalsCount: 88, athleteCount: 396 },
              { id: 12, year: 2008, city: 'Pékin', medalsCount: 100, athleteCount: 639 },
            ],
          },
          {
            id: 4,
            country: 'Japon',
            participations: [
              { id: 13, year: 2020, city: 'Tokyo', medalsCount: 58, athleteCount: 582 },
              { id: 14, year: 2016, city: 'Rio', medalsCount: 41, athleteCount: 338 },
              { id: 15, year: 2012, city: 'Londres', medalsCount: 38, athleteCount: 293 },
              { id: 16, year: 2008, city: 'Pékin', medalsCount: 25, athleteCount: 351 },
            ],
          },
          {
            id: 5,
            country: 'Allemagne',
            participations: [
              { id: 17, year: 2020, city: 'Tokyo', medalsCount: 37, athleteCount: 425 },
              { id: 18, year: 2016, city: 'Rio', medalsCount: 42, athleteCount: 425 },
              { id: 19, year: 2012, city: 'Londres', medalsCount: 44, athleteCount: 392 },
              { id: 20, year: 2008, city: 'Pékin', medalsCount: 41, athleteCount: 463 },
            ],
          },
        ];

        setData(mockData);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
