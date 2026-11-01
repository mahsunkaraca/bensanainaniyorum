/** Filmin doğrulanmış IMDb sayfası geldiğinde buraya ekleyin. */
export const film: { imdbUrl: string } = {
  imdbUrl: '',
};

if (film.imdbUrl) {
  const url = new URL(film.imdbUrl);
  if (url.protocol !== 'https:' || !['imdb.com', 'www.imdb.com'].includes(url.hostname) || url.username || url.password) {
    throw new Error('IMDb bağlantısı geçerli bir HTTPS IMDb adresi olmalı.');
  }
}
