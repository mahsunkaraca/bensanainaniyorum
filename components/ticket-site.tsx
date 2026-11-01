'use client';
import { useState } from 'react';
import { ArrowDown, ArrowUpRight, ChevronDown, MapPin, Ticket, ArrowRight } from 'lucide-react';
import { catalogue } from '@/lib/catalogue';
export default function TicketSite() {
  const data = catalogue;
  const [city, setCity] = useState('');
  const selected = data.cities.find(c => c.id === city);
  const venues = data.cinemas.filter(c => c.city_id === city);
  return <>
    <header className="header"><a className="wordmark" href="#" aria-label="Ana sayfa">BEN SANA<br/><span>İNANIYORUM</span><i>.</i></a><nav><a href="#film">Oyunculu gösterimler</a><a className="nav-ticket" href="#bilet"><Ticket size={16}/> Gösterimleri keşfet <ArrowUpRight size={15}/></a></nav></header>
    <main>
      <section className="hero" id="film">
        <div className="hero-art" role="img" aria-label="Kırmızı ışıklar içindeki sinema koltukları"/>
        <div className="hero-shade" aria-hidden="true"/>
        <div className="hero-content"><div className="eyebrow"><span/> OYUNCULU ÖZEL GÖSTERİMLER</div>
          <h1>BEN SANA<br/><em>İNANIYORUM</em><span>.</span></h1>
          <p className="hero-copy">Filmi oyuncularla aynı salonda izle.<br/>Bu özel buluşmanın bir parçası ol.</p>
          <div className="release"><span>13</span><div><strong>KASIM</strong><small>SİNEMALARDA</small></div><div className="release-line"/><p>Oyuncularla.<br/>Aynı salonda.</p></div>
          <a href="#bilet" className="button hero-button"><Ticket size={19}/> Gösterimleri keşfet <ArrowUpRight size={20}/></a>
        </div>
        <div className="hero-bottom"><span>OYUNCULARLA AYNI SALONDA.</span><a href="#bilet">Oyunculu gösterimleri keşfet <ArrowDown size={16}/></a><span className="hero-number">01 / 02</span></div>
      </section>
      <div className="marquee" aria-hidden="true"><span>OYUNCULU ÖZEL GÖSTERİMLER</span><i>✦</i><span>BEN SANA İNANIYORUM</span><i>✦</i><span>OYUNCULU ÖZEL GÖSTERİMLER</span><i>✦</i><span>BEN SANA İNANIYORUM</span></div>
      <section className="booking" id="bilet"><div className="booking-heading"><div><div className="eyebrow muted">OYUNCULARLA BULUŞUYORUZ</div><h2>Senin şehrin.<br/><span>Oyuncularla aynı salon.</span></h2></div><p>Şehrindeki oyunculu özel gösterimi keşfet.<br/>Bilet bağlantıları 13 Kasım’da burada paylaşılacak.</p></div>
        <div className="selector-wrap"><div className="selector-icon"><MapPin size={24}/></div><div className="select-field"><label htmlFor="city">HANGİ ŞEHİRDE BULUŞALIM?</label><select id="city" value={city} onChange={e => setCity(e.target.value)}><option value="">Şehrini seç</option>{data.cities.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}</select></div><ChevronDown size={20}/><span className="selector-note">Oyunculu gösterime yerini ayır.</span></div>
        <div className="results-title"><span>{selected ? `${selected.name.toLocaleUpperCase('tr')} · OYUNCULU GÖSTERİMLER` : 'OYUNCULU GÖSTERİMLER VE BİLETLER'}</span><small>{city && venues.length ? `${venues.length} sinema` : 'Bilet bağlantıları 13 Kasım’da'}</small></div>
        <div aria-live="polite">{city && venues.length ? <div className="cinema-list">{venues.map((v, index) => <article className="cinema" key={v.id}><span className="cinema-index">{String(index + 1).padStart(2, '0')}</span><div className="cinema-details"><h3>{v.name}</h3>{v.address && <p><MapPin size={13}/>{v.address}</p>}<div className="sessions">{data.screenings.filter(s => s.cinema_id === v.id).map(s => <div className="session" key={s.id}><span>{s.description}</span><a className="button" href={s.ticket_url} target="_blank" rel="noopener noreferrer">Bilet Al <ArrowUpRight size={17}/></a></div>)}{!data.screenings.some(s => s.cinema_id === v.id) && <p>Oyunculu gösterimin detayları ve bilet bağlantısı yakında burada.</p>}</div></div></article>)}</div> : <div className="empty"><div className="empty-icon"><Ticket size={28}/></div><h3>{city ? 'Bu şehirde oyunculu gösterim için hazırlanıyoruz.' : data.cities.length ? 'Oyuncularla aynı salonda buluşalım.' : 'Büyük buluşmaya hazırlanıyoruz.'}</h3><p>{city ? 'Oyunculu gösterimin detayları ve bilet bağlantısı 13 Kasım’da burada paylaşılacak.' : data.cities.length ? 'Oyunculu gösterimleri keşfetmek için şehrini seç. Bilet bağlantıları 13 Kasım’da paylaşılacak.' : 'Oyunculu gösterimlerin bilet bağlantıları 13 Kasım’da burada paylaşılacak.'}</p><span className="empty-date">OYUNCULU ÖZEL GÖSTERİMLER</span></div>}</div>
        <div className="booking-note"><span><span className="status-dot"/> Burada yalnızca oyunculu gösterimlerin bilet bağlantıları paylaşılır.</span><span>Oyuncularla birlikte izleyelim. <ArrowRight size={14}/></span></div>
      </section>
      <section className="quote"><span>“</span><p>Aynı hikâye.<br/><em>Oyuncularla aynı salonda.</em></p><div>BEN SANA İNANIYORUM <i>·</i> 13 KASIM</div></section>
    </main>
    <footer><a className="wordmark" href="#">BEN SANA<br/><span>İNANIYORUM</span><i>.</i></a><p>© {new Date().getFullYear()} Ben Sana İnanıyorum.<br/>Tüm hakları saklıdır.</p><a href="#bilet">Gösterimde görüşürüz. <ArrowUpRight size={16}/></a></footer>
  </>;
}
