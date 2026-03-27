import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Player } from '../types';
import PlayerAvatar from './PlayerAvatar';

interface PlayerCardProps {
  player: Player;
}

export default function PlayerCard({ player }: PlayerCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: player.id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
    cursor: 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="player-card"
      {...attributes}
      {...listeners}
    >
      <PlayerAvatar player={player} size={44} />
      <span className="player-card__name">{player.name}</span>
    </div>
  );
}

/** Presentational-only card for DragOverlay (no useSortable) */
export function PlayerCardOverlay({ player }: { player: Player }) {
  return (
    <div className="player-card player-card--dragging">
      <PlayerAvatar player={player} size={44} />
      <span className="player-card__name">{player.name}</span>
    </div>
  );
}
