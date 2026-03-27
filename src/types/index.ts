export type TierId = 'S' | 'A' | 'B' | 'C' | 'D' | 'unranked';

export type Region = 'TPC' | 'AMER' | 'EMEA' | 'APAC' | 'CN';

export interface Player {
  id: string;
  name: string;
  region: Region;
  imageUrl?: string;
}

export type TierListState = Record<TierId, string[]>;
