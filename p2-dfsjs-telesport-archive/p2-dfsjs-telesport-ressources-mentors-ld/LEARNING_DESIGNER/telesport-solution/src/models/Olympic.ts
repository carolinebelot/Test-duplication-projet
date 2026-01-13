/**
 * Interface représentant les données olympiques d'un pays
 */
export interface Olympic {
  id: number;
  country: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
  participations: number;
  athletes: number;
}
