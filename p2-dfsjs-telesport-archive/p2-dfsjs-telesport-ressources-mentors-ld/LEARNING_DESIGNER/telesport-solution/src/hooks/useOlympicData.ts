import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';

/**
 * Données olympiques mockées
 * Dans un projet réel, ces données viendraient d'une API REST
 */
const olympicData: Olympic[] = [
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
];

/**
 * Custom Hook pour gérer les données olympiques
 * Centralise la logique de récupération des données
 *
 * @returns {Object} - Données, état de chargement et fonction de recherche
 */
export const useOlympicData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulation d'un appel API
    const fetchData = async () => {
      try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        setData(olympicData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Trouve un pays par son ID
   */
  const getCountryById = (id: number): Olympic | undefined => {
    return data.find(country => country.id === id);
  };

  return {
    data,
    loading,
    getCountryById
  };
};
