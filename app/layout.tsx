import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'ben sana inanıyorum | oyunculu gösterim',
  description: 'Ben Sana İnanıyorum oyunculu özel gösterimleri. Şehrini seç, oyuncularla aynı salonda buluş. Bilet bağlantıları 13 Kasım’da paylaşılacak.',
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#0c0c0c' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="tr"><body>{children}</body></html>;
}
