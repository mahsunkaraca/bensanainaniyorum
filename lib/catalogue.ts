/** Gerçek şehir, sinema ve bilet bilgileri burada tutulur. Örnek bilet yoktur. */
export type City = { id: string; name: string };
export type Cinema = { id: string; city_id: string; name: string; address: string };
export type Screening = { id: string; cinema_id: string; description: string; ticket_url: string };
export type Catalogue = { cities: City[]; cinemas: Cinema[]; screenings: Screening[] };
export const catalogue: Catalogue = {
  cities: [],
  cinemas: [],
  screenings: [],
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
    const url = new URL(screening.ticket_url);
    if (url.protocol !== 'https:' || url.username || url.password) throw new Error(`Bilet adresi geçerli bir HTTPS bağlantısı olmalı: ${screening.id}`);
  }
}
validateCatalogue(catalogue);
