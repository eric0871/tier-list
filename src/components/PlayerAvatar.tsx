import type { Player } from '../types';
import { regionColors } from '../utils/colors';

interface PlayerAvatarProps {
  player: Player;
  size?: number;
}

function getInitials(name: string): string {
  const parts = name.split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

export default function PlayerAvatar({ player, size = 48 }: PlayerAvatarProps) {
  if (player.imageUrl) {
    return (
      <img
        src={player.imageUrl}
        alt={player.name}
        className="player-avatar"
        style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover' }}
        draggable={false}
      />
    );
  }

  return (
    <div
      className="player-avatar"
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: regionColors[player.region],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 700,
        fontSize: size * 0.38,
        userSelect: 'none',
        flexShrink: 0,
      }}
    >
      {getInitials(player.name)}
    </div>
  );
}
