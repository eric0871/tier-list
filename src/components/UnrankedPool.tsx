import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import type { Player } from '../types';
import PlayerCard from './PlayerCard';

interface UnrankedPoolProps {
  playerIds: string[];
  playerMap: Map<string, Player>;
}

export default function UnrankedPool({ playerIds, playerMap }: UnrankedPoolProps) {
  const { setNodeRef } = useDroppable({ id: 'unranked' });

  return (
    <div className="unranked-pool">
      <div className="unranked-pool__header">
        <span className="unranked-pool__title">Unranked</span>
        <span className="unranked-pool__hint">Drag players to tiers above</span>
      </div>
      <div ref={setNodeRef} className="unranked-pool__cards">
        <SortableContext items={playerIds} strategy={rectSortingStrategy}>
          {playerIds.map((id) => {
            const player = playerMap.get(id);
            if (!player) return null;
            return <PlayerCard key={id} player={player} />;
          })}
        </SortableContext>
      </div>
    </div>
  );
}
