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
    <header className="header"><a className="wordmark" href="#" aria-label="Ana sayfa">BEN SANA<br/><span>İNANIYORUM</span><i>.</i></a><nav><a href="#film">Film hakkında</a><a className="nav-ticket" href="#bilet"><Ticket size={16}/> Biletini al <ArrowUpRight size={15}/></a></nav></header>
    <main>
      <section className="hero" id="film">
        <div className="hero-art" role="img" aria-label="Kırmızı ışıklar içindeki sinema salonunu gösteren temsili film görseli"/>
        <div className="hero-shade"/>
        <div className="hero-content"><div className="eyebrow"><span/> BAZI HİKÂYELER İNANMAKLA BAŞLAR.</div>
          <h1>BEN SANA<br/><em>İNANIYORUM</em><span>.</span></h1>
          <p className="hero-copy">Bazen tek bir kişinin sana inanması,<br/>her şeyi değiştirmeye yeter.</p>
          <div className="release"><span>13</span><div><strong>KASIM</strong><small>SİNEMALARDA</small></div><div className="release-line"/><p>Büyük perdede.<br/>Birlikte.</p></div>
          <a href="#bilet" className="button hero-button"><Ticket size={19}/> Biletini al <ArrowUpRight size={20}/></a>
        </div>
        <div className="hero-bottom"><span>BİR FİLM. BİNLERCE DUYGU.</span><a href="#bilet">Hikâyenin bir parçası ol <ArrowDown size={16}/></a><span className="hero-number">01 / 02</span></div>
      </section>
      <div className="marquee" aria-hidden="true"><span>13 KASIM SİNEMALARDA</span><i>✦</i><span>BEN SANA İNANIYORUM</span><i>✦</i><span>13 KASIM SİNEMALARDA</span><i>✦</i><span>BEN SANA İNANIYORUM</span></div>
      <section className="booking" id="bilet"><div className="booking-heading"><div><div className="eyebrow muted">BÜYÜK PERDEDE BULUŞALIM</div><h2>Senin şehrin.<br/><span>Senin sineman.</span></h2></div><p>Şehrini seç, sana en yakın sinemayı bul.<br/>Bu hikâyeyi birlikte yaşayalım.</p></div>
        <div className="selector-wrap"><div className="selector-icon"><MapPin size={24}/></div><div className="select-field"><label htmlFor="city">NEREDE İZLEMEK İSTERSİN?</label><select id="city" value={city} onChange={e => setCity(e.target.value)}><option value="">Şehrini seç</option>{data.cities.map(c => <option value={c.id} key={c.id}>{c.name}</option>)}</select></div><ChevronDown size={20}/><span className="selector-note">Sinema deneyimin burada başlıyor.</span></div>
        <div className="results-title"><span>{selected ? `${selected.name.toLocaleUpperCase('tr')} SİNEMALARI` : 'SİNEMALAR VE BİLETLER'}</span><small>{city ? `${venues.length} sinema` : '13 Kasım’da buluşuyoruz'}</small></div>
        <div aria-live="polite">{city && venues.length ? <div className="cinema-list">{venues.map((v, index) => <article className="cinema" key={v.id}><span className="cinema-index">{String(index + 1).padStart(2, '0')}</span><div className="cinema-details"><h3>{v.name}</h3>{v.address && <p><MapPin size={13}/>{v.address}</p>}<div className="sessions">{data.screenings.filter(s => s.cinema_id === v.id).map(s => <div className="session" key={s.id}><span>{s.description}</span><a className="button" href={s.ticket_url} target="_blank" rel="noopener noreferrer">Bilet Al <ArrowUpRight size={17}/></a></div>)}{!data.screenings.some(s => s.cinema_id === v.id) && <p>Seans ve bilet bilgileri yakında açıklanacak.</p>}</div></div></article>)}</div> : <div className="empty"><div className="empty-icon"><Ticket size={28}/></div><h3>{city ? 'Bu şehirde sinemalar yakında açıklanacak.' : data.cities.length ? 'Hikâyeye en yakın koltuğu bul.' : 'Büyük buluşmaya hazırlanıyoruz.'}</h3><p>{city ? 'Seans ve bilet bilgileri açıklandığında burada yer alacak.' : data.cities.length ? 'Sinema ve bilet bilgilerini görmek için şehrini seç.' : 'Sinema ve bilet bağlantıları açıklandığında burada yer alacak.'}</p><span className="empty-date">13 KASIM <span>·</span> SİNEMALARDA</span></div>}</div>
        <div className="booking-note"><span><span className="status-dot"/> Doğrudan sinemanın bilet sayfasına yönlendirilirsin.</span><span>Güzel hikâyeler, birlikte izlenir. <ArrowRight size={14}/></span></div>
      </section>
      <section className="quote"><span>“</span><p>Birinin sana inanmasıyla<br/><em>başlar her şey.</em></p><div>BEN SANA İNANIYORUM <i>·</i> 13 KASIM</div></section>
    </main>
    <footer><a className="wordmark" href="#">BEN SANA<br/><span>İNANIYORUM</span><i>.</i></a><p>© {new Date().getFullYear()} Ben Sana İnanıyorum.<br/>Tüm hakları saklıdır.</p><a href="#bilet">Sinemada görüşürüz. <ArrowUpRight size={16}/></a></footer>
  </>;
}
