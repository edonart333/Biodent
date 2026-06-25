import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80',
      title: 'Dhëmbë të shëndetshëm dhe të pastër',
      description: 'Trajtimet tona përmirësojnë shëndetin oral dhe zvogëlojnë shqetësimet kur qeshni.',
      alt: 'Pacient që qesh me dhëmbë të pastër',
    },
    {
      src: 'https://www.theorthodontists.com.au/theme/theorthodontistscomau/assets/public/Image/blog/Relationship_Between_Face_and_Smile_-_2.jpg',
      title: 'Kujdes i besueshëm për dhëmbët',
      description: 'Ne punojmë me kujdes për çdo trajtim, nga pastrimi deri tek riparimet e thjeshta.',
      alt: 'Dhëmbë të pastër dhe kujdes profesional',
    },
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80',
      title: 'Shërbim miqësor dhe profesional',
      description: 'Stafi ynë ofron trajtim të qetë dhe të saktë për çdo pacient dhe moshë.',
      alt: 'Mjek dentar duke punuar me pacientin',
    },
  ]

  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((current) => (current + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
          else entry.target.classList.remove('is-visible')
        })
      },
      { threshold: 0.1 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const currentSlide = slides[slideIndex]

  const services = [
    { title: 'Kontrolle të plota dhe diagnostikim', description: 'Ne shohim me kujdes çdo pjesë të gojës suaj dhe planifikojmë trajtimin që ju nevojitet.' },
    { title: 'Pastrim profesional', description: 'Pastrimi i dhëmbëve dhe mjekrës krijon kushtet më të mira për një shëndet të mirë oral.' },
    { title: 'Kujdes kozmetik', description: 'Zbardhja ose veshjet e vogla mund t’i japin dhëmbëve një pamje më të pastër dhe të freskët.' },
    { title: 'Riparime dhe kurora', description: 'Kurora, ngulime dhe mbushje riparojnë dhëmbët e dëmtuar dhe rikthejnë funksionin.' },
    { title: 'Aparate dhe korrigjime', description: 'Ofrojmë zgjidhje për dhëmbët e zëna dhe për rregullimin e qafës së gojës.' },
    { title: 'Implante dhe zëvendësime', description: 'Zëvendësojmë dhëmbët e humbur me implante të qëndrueshme dhe të bukura.' },
    { title: 'Ndihmë për urgjenca', description: 'Trajtime të shpejta për dhimbje dhëmbësh dhe probleme të papritura.' },
    { title: 'Udhëzime për kujdesin e përditshëm', description: 'Udhëzime të qarta për rutinën tuaj të përditshme të kujdesit oral.' },
    { title: 'Planifikim pagesash', description: 'Diskutojmë mënyra të thjeshta pagese për të bërë trajtimin të lehtë për ju.' },
  ]

  const [showMoreServices, setShowMoreServices] = useState(false)

  const affordability = [
    { title: 'Kontrolle të qarta', subtitle: 'Transparencë të plotë', description: 'Çmime të thjeshta për kontrollin dhe pastrimin e parë.' },
    { title: 'Paketa familjare', subtitle: 'Zbritje për familjen', description: 'Oferta për prindër dhe fëmijë me tarifa të përballueshme.' },
    { title: 'Pagesa të ndara', subtitle: 'Fleksibilitet', description: 'Opsione financiare për trajtime më të mëdha.' },
  ]

  return (
    <div className="page">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="logo"><span className="logo-icon">🦷</span> Biodent</div>
          <nav className="topnav">
            <a href="#services">Shërbime</a>
            <a href="#affordability">Çmimet</a>
            <a href="#before-after">Rezultatet</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="nav-right">
            <a className="phone" href="tel:+38349176542">(+383) 49-176-542</a>
            <a className="btn primary small" href="#contact">Rezervo Vizitë</a>
          </div>
        </div>
      </div>

      <header className="hero-section">
        <div className="hero-slider">
          <div className="slide-overlay">
            <div className="hero-topline">Mirë se erdhët në Biodent</div>
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.description}</p>
            <div className="hero-actions">
              <a href="#services" className="btn primary">Shiko Shërbime</a>
              <a href="#affordability" className="btn secondary">Më shumë për çmimet</a>
            </div>
            <div className="hero-highlights">
              <span>📍 Lokacion i aksesueshëm</span>
              <span>⏱️ Rezervime të shpejta</span>
              <span>💚 Trajtim i butë</span>
            </div>
          </div>
          <img src={currentSlide.src} alt={currentSlide.alt} className="hero-image" />
          <div className="slide-caption">{currentSlide.alt}</div>
          <div className="slide-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={index === slideIndex ? 'slide-dot active' : 'slide-dot'}
                onClick={() => setSlideIndex(index)}
                aria-label={`Shfaq imazhin ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </header>

      <main className="container">
        <section id="services" className="section">
          <div className="section-header">
            <span className="eyebrow">Çfarë Ofrojmë</span>
            <h2>Trajtime të thjeshta dhe të qarta për shëndetin e gojës.</h2>
            <p>Ofrojmë kontroll, pastrim, riparime dhe zgjidhje të tjera me një qasje të thjeshtë dhe të përshtatshme për ju.</p>
          </div>
          <div className={`cards-grid ${showMoreServices ? 'expanded' : 'collapsed'}`}>
            {services.map((service, index) => (
              <article key={index} className="card fade-up">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="btn secondary show-more-btn"
            onClick={() => setShowMoreServices((prev) => !prev)}
            aria-expanded={showMoreServices}
          >
            {showMoreServices ? 'Shfaq më pak' : 'Shfaq më shumë'}
          </button>
        </section>

        <section id="affordability" className="section">
          <div className="section-header">
            <span className="eyebrow">Planifikimi Financiar</span>
            <h2>Çmimet të qarta dhe mundësi të përshtatshme për familjet.</h2>
          </div>
          <div className="afford-grid">
            {affordability.map((item) => (
              <article key={item.title} className="card fade-up">
                <div className="card-circle">{item.title.charAt(0)}</div>
                <h3>{item.title}</h3>
                <p className="subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="before-after" className="section">
          <div className="section-header">
            <span className="eyebrow">Transformimet</span>
            <h2>Shembuj të ndryshimit pas trajtimit.</h2>
            <p>Markoni përmirësimet që mund të shihen pas trajtimeve tona të dhëmbëve.</p>
          </div>
          <div className="before-after-grid">
            <article className="before-after-card fade-up">
              <div className="before-after-tag">Para</div>
              <img src="https://thfvnext.bing.com/th/id/OIP.kjwTw2wPMzFEGDlxhLKkugHaE8?w=253&h=180&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.3&pid=1.7&rm=3" alt="Dhëmbët para trajtimit" className="before-after-img" />
              <p>Të dhëmbët para trajtimit zakonisht dukeshin të ndotur dhe të zbehur, por kjo është pikënisja e duhur për rezultatin e dëshiruar.</p>
            </article>
            <article className="before-after-card after fade-up">
              <div className="before-after-tag">Pas</div>
              <img src="https://img.freepik.com/premium-photo/closeup-beautiful-male-smile-with-healthy-teeth-dental-care-concept_323316-6809.jpg" alt="Pacient pas trajtimit dental" className="before-after-img" />
              <p>Rezultati pas trajtimit: dhëmbë të bardhë, të shndritshëm dhe një buzëqeshje që ndriçon pamjen tuaj të përgjithshme.</p>
            </article>
          </div>
        </section>

        <section id="reviews" className="section">
          <div className="section-header">
            <span className="eyebrow">Eksperiencat</span>
            <h2>Ajo që thonë pacientët.</h2>
            <p>Lexoni vlerësimet e pacientëve për trajtimin dhe shërbimin në klinikën tonë.</p>
          </div>
          <div className="reviews-grid">
            <article className="card fade-up">
              <h3>Vlerësim i shkëlqyer</h3>
              <p>“Stafi ishte shumë i kujdesshëm dhe trajtimi i dhëmbëve më dha një buzëqeshje që e prisja prej vitesh. Shërbim profesional dhe i ngrohtë.”</p>
              <p className="review-meta">Arta, Mitrovicë</p>
            </article>
            <article className="card fade-up">
              <h3>Përvoja e parë e mrekullueshme</h3>
              <p>“Ishte shumë e lehtë të rezervoja dhe të marrësh informacion të qartë. Dhëmbët e mi tani ndjehen më të fortë dhe më të pastër.”</p>
              <p className="review-meta">Dren, Mitrovicë</p>
            </article>
            <article className="card fade-up">
              <h3>Profesionalizëm dhe besim</h3>
              <p>“Atmosfera është e qetë dhe e sigurt. I rekomandoj të gjithë njerëzit në Mitrovicë që të vijnë këtu për dhëmbë të bukur.”</p>
              <p className="review-meta">Besa, Mitrovicë</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="contact-panel">
            <div>
              <h2 style={{ margin: '0 0 0.75rem 0', color: 'var(--text-h)' }}>Gati për të filluar?</h2>
              <p>Na telefononi në <strong>(+383) 49-176-542</strong> ose na dërgoni një email për të caktuar terminin tuaj.</p>
            </div>
            <a className="btn primary" href="mailto:hello@biodent.com">hello@biodent.com</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Biodent — Kujdes dentar modern për të gjithë familjen tuaj.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
