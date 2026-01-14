import { useState, useEffect } from 'react';
import { Olympic } from '../models/Olympic';
import olympicsDataMock from '../data/olympics.json';

/**
 * Custom Hook pour gérer les données olympiques
 *
 * Dans une version future avec API back-end, ce hook contiendra
 * les appels fetch() vers l'API REST au lieu des données mockées
 *
 * @returns {Olympic[]} La liste des pays avec leurs participations
 */
export const useOlympicData = (): Olympic[] => {
  const [data, setData] = useState<Olympic[]>([]);

  useEffect(() => {
    // Simulation d'un appel API avec un délai
    // Dans une vraie application, ce serait : fetch('/api/olympics')
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 300));
      setData(olympicsDataMock as Olympic[]);
    };

    loadData();
  }, []);

  return data;
};

/**
 * Fonction utilitaire pour calculer le total de médailles d'un pays
 */
export const calculateTotalMedals = (olympic: Olympic): number => {
  return olympic.participations.reduce((sum, participation) => sum + participation.medalsCount, 0);
};

/**
 * Fonction utilitaire pour calculer le total d'athlètes d'un pays
 */
export const calculateTotalAthletes = (olympic: Olympic): number => {
  return olympic.participations.reduce((sum, participation) => sum + participation.athleteCount, 0);
};
