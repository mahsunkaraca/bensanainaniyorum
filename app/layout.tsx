import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Ben Sana İnanıyorum | 13 Kasım Sinemalarda',
  description: 'Bir inanç, bin ihtimal. Ben Sana İnanıyorum filmi için şehrini seç, sinemanı bul ve biletini al.',
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0c0c0c' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
