import { useState, useCallback, useEffect, useRef } from 'react';
import type { DragStartEvent, DragOverEvent, DragEndEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import type { TierListState } from '../types';
import { players } from '../data/players';
import { findContainer } from '../utils/dndUtils';
import { useLocalStorage } from './useLocalStorage';

const allPlayerIds = players.map((p) => p.id);

function createInitialState(): TierListState {
  return {
    S: [],
    A: [],
    B: [],
    C: [],
    D: [],
    unranked: [...allPlayerIds],
  };
}

export function useTierList() {
  const { save, load } = useLocalStorage();
  const [tierState, setTierState] = useState<TierListState>(() => {
    return load() ?? createInitialState();
  });
  const [activeId, setActiveId] = useState<string | null>(null);
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  // Auto-save with debounce
  useEffect(() => {
    clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      save(tierState);
    }, 500);
    return () => clearTimeout(saveTimeoutRef.current);
  }, [tierState, save]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragOver = useCallback((event: DragOverEvent) => {
    const { active, over } = event;
    if (!over) return;

    setTierState((prev) => {
      const activeContainer = findContainer(active.id as string, prev);
      const overContainer = findContainer(over.id as string, prev);

      if (!activeContainer || !overContainer || activeContainer === overContainer) return prev;

      const activeItems = [...prev[activeContainer]];
      const overItems = [...prev[overContainer]];
      const activeIndex = activeItems.indexOf(active.id as string);

      // Remove from source
      activeItems.splice(activeIndex, 1);

      // Find insertion index (over.id might be a tier ID, not a player)
      const overIndex = overItems.indexOf(over.id as string);
      const insertIndex = overIndex >= 0 ? overIndex : overItems.length;

      // Insert into destination
      overItems.splice(insertIndex, 0, active.id as string);

      return {
        ...prev,
        [activeContainer]: activeItems,
        [overContainer]: overItems,
      };
    });
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);

    if (!over) return;

    setTierState((prev) => {
      const activeContainer = findContainer(active.id as string, prev);
      const overContainer = findContainer(over.id as string, prev);

      if (!activeContainer || !overContainer) return prev;

      if (activeContainer === overContainer) {
        const items = prev[activeContainer];
        const oldIndex = items.indexOf(active.id as string);
        const newIndex = items.indexOf(over.id as string);

        if (oldIndex !== newIndex && newIndex >= 0) {
          return {
            ...prev,
            [activeContainer]: arrayMove(prev[activeContainer], oldIndex, newIndex),
          };
        }
      }
      return prev;
    });
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const reset = useCallback(() => {
    if (window.confirm('Reset all tiers? All players will be moved back to Unranked.')) {
      setTierState(createInitialState());
    }
  }, []);

  return {
    tierState,
    activeId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    reset,
  };
}
