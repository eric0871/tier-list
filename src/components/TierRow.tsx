import { useDroppable } from '@dnd-kit/core';
import { SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';
import type { TierId, Player } from '../types';
import { tierColors } from '../utils/colors';
import PlayerCard from './PlayerCard';

interface TierRowProps {
  tierId: TierId;
  label: string;
  playerIds: string[];
  playerMap: Map<string, Player>;
}

export default function TierRow({ tierId, label, playerIds, playerMap }: TierRowProps) {
  const { setNodeRef } = useDroppable({ id: tierId });
  const color = tierColors[tierId as keyof typeof tierColors];

  return (
    <div className="tier-row">
      <div className="tier-row__label" style={{ backgroundColor: color }}>
        {label}
      </div>
      <div ref={setNodeRef} className="tier-row__cards">
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
