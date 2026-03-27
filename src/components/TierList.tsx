import { useRef } from 'react';
import {
  DndContext,
  DragOverlay,
  pointerWithin,
  rectIntersection,
  PointerSensor,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { CollisionDetection } from '@dnd-kit/core';
import type { TierId } from '../types';
import { playerMap } from '../data/players';
import { tierLabels } from '../utils/colors';
import { exportTierListAsImage } from '../utils/exportImage';
import { useTierList } from '../hooks/useTierList';
import TierRow from './TierRow';
import UnrankedPool from './UnrankedPool';
import { PlayerCardOverlay } from './PlayerCard';
import Toolbar from './Toolbar';

const TIER_ORDER: Exclude<TierId, 'unranked'>[] = ['S', 'A', 'B', 'C', 'D'];

// Use pointerWithin first (works well for containers), fall back to rectIntersection
const collisionDetection: CollisionDetection = (args) => {
  const pointerCollisions = pointerWithin(args);
  if (pointerCollisions.length > 0) return pointerCollisions;
  return rectIntersection(args);
};

export default function TierList() {
  const {
    tierState,
    activeId,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    handleDragCancel,
    reset,
  } = useTierList();

  const tierListRef = useRef<HTMLDivElement>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 200, tolerance: 5 } }),
    useSensor(KeyboardSensor)
  );

  const activePlayer = activeId ? playerMap.get(activeId) : null;

  const handleExport = async () => {
    if (tierListRef.current) {
      await exportTierListAsImage(tierListRef.current);
    }
  };

  return (
    <>
      <Toolbar onReset={reset} onExport={handleExport} />
      <DndContext
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="tier-list" ref={tierListRef}>
          {TIER_ORDER.map((tierId) => (
            <TierRow
              key={tierId}
              tierId={tierId}
              label={tierLabels[tierId]}
              playerIds={tierState[tierId]}
              playerMap={playerMap}
            />
          ))}
        </div>
        <UnrankedPool playerIds={tierState.unranked} playerMap={playerMap} />

        <DragOverlay>
          {activePlayer ? <PlayerCardOverlay player={activePlayer} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
}
