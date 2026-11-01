/** Filmin IMDb sayfası. */
export const film: { imdbUrl: string; eksiUrl: string } = {
  imdbUrl: 'https://www.imdb.com/title/tt45162733/',
  eksiUrl: '',
};

if (film.imdbUrl) {
  const url = new URL(film.imdbUrl);
  if (url.protocol !== 'https:' || !['imdb.com', 'www.imdb.com'].includes(url.hostname) || url.username || url.password) {
    throw new Error('IMDb bağlantısı geçerli bir HTTPS IMDb adresi olmalı.');
  }
}

if (film.eksiUrl) {
  const url = new URL(film.eksiUrl);
  if (url.protocol !== 'https:' || !['eksisozluk.com', 'www.eksisozluk.com'].includes(url.hostname) || url.username || url.password) {
    throw new Error('Ekşi Sözlük bağlantısı geçerli bir HTTPS Ekşi Sözlük adresi olmalı.');
  }
}
