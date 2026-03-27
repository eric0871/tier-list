import { useCallback } from 'react';
import type { TierListState } from '../types';
import { players } from '../data/players';

const STORAGE_KEY = 'tft-tier-list';

const allPlayerIds = new Set(players.map((p) => p.id));

export function useLocalStorage() {
  const save = useCallback((state: TierListState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, []);

  const load = useCallback((): TierListState | null => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw) as TierListState;

      // Validate: collect all ids found in saved state
      const foundIds = new Set<string>();
      for (const tier of Object.values(parsed)) {
        for (const id of tier) {
          if (allPlayerIds.has(id)) {
            foundIds.add(id);
          }
        }
      }

      // Remove invalid ids and deduplicate
      for (const key of Object.keys(parsed) as (keyof TierListState)[]) {
        parsed[key] = parsed[key].filter((id) => allPlayerIds.has(id));
      }

      // Add missing players to unranked
      for (const id of allPlayerIds) {
        if (!foundIds.has(id)) {
          parsed.unranked.push(id);
        }
      }

      return parsed;
    } catch {
      return null;
    }
  }, []);

  return { save, load };
}
