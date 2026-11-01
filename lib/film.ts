/** Filmin IMDb sayfası. */
export const film: { imdbUrl: string } = {
  imdbUrl: 'https://www.imdb.com/title/tt45162733/',
};

if (film.imdbUrl) {
  const url = new URL(film.imdbUrl);
  if (url.protocol !== 'https:' || !['imdb.com', 'www.imdb.com'].includes(url.hostname) || url.username || url.password) {
    throw new Error('IMDb bağlantısı geçerli bir HTTPS IMDb adresi olmalı.');
  }
}
