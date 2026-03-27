import type { Player } from '../types';

export const players: Player[] = [
  // TFT Pro Circuit (12)
  { id: 'wasianiverson', name: 'wasianiverson', region: 'TPC', imageUrl: 'images/players/wasianiverson.jpg' },
  { id: 'reven', name: 'Reven', region: 'TPC', imageUrl: 'images/players/reven.jpg' },
  { id: 'aq1h', name: 'AQ1H', region: 'TPC', imageUrl: 'images/players/aq1h.jpg' },
  { id: 'cangshan', name: 'CangShan', region: 'TPC' },
  { id: 'weimuluoqiu', name: 'weimuluoqiu', region: 'TPC' },
  { id: 'darth-nub', name: 'Darth Nub', region: 'TPC', imageUrl: 'images/players/darth-nub.jpg' },
  { id: 'lituchuan', name: 'LiTuChuan', region: 'TPC', imageUrl: 'images/players/lituchuan.jpg' },
  { id: 'ringo', name: 'Ringo', region: 'TPC', imageUrl: 'images/players/ringo.jpg' },
  { id: 'gobosteur', name: 'Gobosteur', region: 'TPC', imageUrl: 'images/players/gobosteur.jpg' },
  { id: 'yby1', name: 'YBY1', region: 'TPC', imageUrl: 'images/players/yby1.jpg' },
  { id: 'kubixon', name: 'kubixon', region: 'TPC' },
  { id: 'iron-bog', name: 'Iron Bog', region: 'TPC', imageUrl: 'images/players/iron-bog.jpg' },

  // AMER Regional Finals (8)
  { id: 'marcel-p', name: 'Marcel P', region: 'AMER', imageUrl: 'images/players/marcel-p.jpg' },
  { id: 'cambulee', name: 'Cambulee', region: 'AMER', imageUrl: 'images/players/cambulee.jpg' },
  { id: 'broseph', name: 'Broseph', region: 'AMER' },
  { id: 'robinsongz', name: 'robinsongz', region: 'AMER', imageUrl: 'images/players/robinsongz.jpg' },
  { id: 'j-or-c', name: 'J or C', region: 'AMER', imageUrl: 'images/players/j-or-c.jpg' },
  { id: 'rety', name: 'rety', region: 'AMER', imageUrl: 'images/players/rety.jpg' },
  { id: 'kaiweng', name: 'Kaiweng', region: 'AMER', imageUrl: 'images/players/kaiweng.jpg' },
  { id: 'setsuko', name: 'setsuko', region: 'AMER', imageUrl: 'images/players/setsuko.jpg' },

  // EMEA Regional Finals (5)
  { id: 'elia', name: 'Elia', region: 'EMEA', imageUrl: 'images/players/elia.jpg' },
  { id: 'traviscwat', name: 'traviscwat', region: 'EMEA', imageUrl: 'images/players/traviscwat.jpg' },
  { id: 'double61', name: 'Double61', region: 'EMEA', imageUrl: 'images/players/double61.jpg' },
  { id: 'deis1k', name: 'Deis1k', region: 'EMEA' },
  { id: 'ryko', name: 'Ryko', region: 'EMEA' },

  // APAC Regional Finals (7)
  { id: 'lilbear', name: 'Lilbear', region: 'APAC', imageUrl: 'images/players/lilbear.jpg' },
  { id: 'midfeed', name: 'MIDFEED', region: 'APAC', imageUrl: 'images/players/midfeed.jpg' },
  { id: 'milo', name: 'Milo', region: 'APAC', imageUrl: 'images/players/milo.png' },
  { id: 'jazlatte', name: 'JazLatte', region: 'APAC', imageUrl: 'images/players/jazlatte.jpg' },
  { id: 'oubo', name: 'oubo', region: 'APAC' },
  { id: 'royal', name: 'Royal', region: 'APAC' },
  { id: 'mori', name: 'mori', region: 'APAC' },

  // CN Regional Finals (8)
  { id: 'huanmie', name: 'Huanmie', region: 'CN' },
  { id: 'lishao', name: 'LiShao', region: 'CN', imageUrl: 'images/players/lishao.jpg' },
  { id: 'koyui', name: 'Koyui', region: 'CN', imageUrl: 'images/players/koyui.jpg' },
  { id: 'saya', name: 'Saya', region: 'CN' },
  { id: 'diaomei', name: 'diaomei', region: 'CN' },
  { id: 'yeyoushuang', name: 'Yeyoushuang', region: 'CN' },
  { id: 'binbin', name: 'binbin', region: 'CN' },
  { id: 'hanxing', name: 'HanXing', region: 'CN', imageUrl: 'images/players/hanxing.jpg' },
];

export const playerMap = new Map(players.map((p) => [p.id, p]));
