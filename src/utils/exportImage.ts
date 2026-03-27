import { toPng } from 'html-to-image';

export async function exportTierListAsImage(element: HTMLElement) {
  const dataUrl = await toPng(element, {
    backgroundColor: '#1a1a2e',
    pixelRatio: 2,
  });

  const link = document.createElement('a');
  link.download = `tft-tier-list-${Date.now()}.png`;
  link.href = dataUrl;
  link.click();
}
