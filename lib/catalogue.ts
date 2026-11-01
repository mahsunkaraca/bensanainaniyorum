/** Şehir, sinema ve bilet bilgileri. Demo kayıtların bilet butonu pasiftir. */
export type City = { id: string; name: string };
export type Cinema = { id: string; city_id: string; name: string; address: string };
export type Screening = { id: string; cinema_id: string; description: string; ticket_url: string; demo?: boolean };
export type Catalogue = { cities: City[]; cinemas: Cinema[]; screenings: Screening[] };
export const catalogue: Catalogue = {
  cities: [
    { id: 'adana', name: 'Adana' },
    { id: 'istanbul', name: 'İstanbul' },
    { id: 'izmir', name: 'İzmir' },
    { id: 'ankara', name: 'Ankara' },
    { id: 'bursa', name: 'Bursa' },
  ],
  cinemas: [
    { id: 'adana-paribu-cineverse', city_id: 'adana', name: 'Adana Paribu Cineverse', address: '' },
    { id: 'istanbul-demo', city_id: 'istanbul', name: 'İstanbul · Demo Sinema', address: '' },
    { id: 'izmir-demo', city_id: 'izmir', name: 'İzmir · Demo Sinema', address: '' },
    { id: 'ankara-demo', city_id: 'ankara', name: 'Ankara · Demo Sinema', address: '' },
    { id: 'bursa-demo', city_id: 'bursa', name: 'Bursa · Demo Sinema', address: '' },
  ],
  screenings: [
    { id: 'adana-16-kasim-1900', cinema_id: 'adana-paribu-cineverse', description: '16 Kasım 19:00 Seansı', ticket_url: '', demo: true },
    { id: 'istanbul-17-kasim-1930', cinema_id: 'istanbul-demo', description: '17 Kasım 19:30 Seansı', ticket_url: '', demo: true },
    { id: 'izmir-18-kasim-2000', cinema_id: 'izmir-demo', description: '18 Kasım 20:00 Seansı', ticket_url: '', demo: true },
    { id: 'ankara-19-kasim-1830', cinema_id: 'ankara-demo', description: '19 Kasım 18:30 Seansı', ticket_url: '', demo: true },
    { id: 'bursa-20-kasim-1900', cinema_id: 'bursa-demo', description: '20 Kasım 19:00 Seansı', ticket_url: '', demo: true },
  ],
};

// Hatalı bağlantı veya ilişkiyle yayın alınmasını önler.
export function validateCatalogue(data: Catalogue): void {
  for (const list of [data.cities, data.cinemas, data.screenings]) {
    const ids = new Set<string>();
    for (const row of list) {
      if (!row.id.trim() || ids.has(row.id)) throw new Error(`Boş veya tekrarlanan kayıt kimliği: ${row.id}`);
      ids.add(row.id);
    }
  }
  for (const city of data.cities) if (!city.name.trim()) throw new Error('Şehir adı boş olamaz.');
  for (const cinema of data.cinemas) {
    if (!cinema.name.trim() || !data.cities.some(c => c.id === cinema.city_id)) throw new Error(`Sinema bilgisi veya şehir ilişkisi geçersiz: ${cinema.id}`);
  }
  for (const screening of data.screenings) {
    if (!screening.description.trim() || !data.cinemas.some(c => c.id === screening.cinema_id)) throw new Error(`Seans bilgisi veya sinema ilişkisi geçersiz: ${screening.id}`);
    if (screening.demo === true) {
      if (screening.ticket_url) throw new Error(`Demo kayda bilet bağlantısı eklenemez: ${screening.id}`);
      continue;
    }
    const url = new URL(screening.ticket_url);
    if (url.protocol !== 'https:' || url.username || url.password) throw new Error(`Bilet adresi geçerli bir HTTPS bağlantısı olmalı: ${screening.id}`);
  }
}
validateCatalogue(catalogue);
