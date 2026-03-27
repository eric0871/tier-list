import type { TierId, Region } from '../types';

export const tierColors: Record<Exclude<TierId, 'unranked'>, string> = {
  S: '#f5c842',
  A: '#e74c3c',
  B: '#3498db',
  C: '#2ecc71',
  D: '#95a5a6',
};

export const regionColors: Record<Region, string> = {
  TPC: '#9b59b6',
  AMER: '#3498db',
  EMEA: '#e67e22',
  APAC: '#27ae60',
  CN: '#e74c3c',
};

export const tierLabels: Record<TierId, string> = {
  S: 'S',
  A: 'A',
  B: 'B',
  C: 'C',
  D: '金铲铲',
  unranked: 'Unranked',
};
