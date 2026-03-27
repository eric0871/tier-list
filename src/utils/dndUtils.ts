import type { TierId, TierListState } from '../types';

const TIER_IDS: TierId[] = ['S', 'A', 'B', 'C', 'D', 'unranked'];

export function findContainer(id: string, tierState: TierListState): TierId | undefined {
  // Check if the id is a tier container itself
  if (TIER_IDS.includes(id as TierId)) {
    return id as TierId;
  }

  // Otherwise find which tier contains this player id
  for (const tier of TIER_IDS) {
    if (tierState[tier].includes(id)) {
      return tier;
    }
  }

  return undefined;
}
