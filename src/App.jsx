import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1400&q=80',
      title: 'Buzëqeshje të shndritshme me dhëmbë të dukshëm',
      description: 'Një buzëqeshje e hapur dhe e ndritshme që tregon sfondin tonë të kujdesit të avancuar.',
      alt: 'Grua që qesh me dhëmbë të dukshëm dhe vetëbesim',
    },
    {
      src: 'https://tse2.mm.bing.net/th/id/OIP.m4eCtlBWcmJWENi8eMYjdwHaEP?cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3',
      title: 'Qeshje natyrale me dhëmbë të bardhë',
      description: 'Rezultate vizualisht të dukshme dhe dhëmbë të shëndetshëm pas trajtimeve tona.',
      alt: 'Burrë që qesh hapur me dhëmbë të dukshëm',
    },
    {
      src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1400&q=80',
      title: 'Paraqitje të pastër dhe të besueshme',
      description: 'Qershia mbi tortë? Dhëmbë të shëndetshëm që shfaqen në një buzëqeshje të plotë.',
      alt: 'Grua që qesh me dhëmbë të dukshëm dhe energji të ngrohtë',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
      title: 'Buzëqeshje të mbushura me energji',
      description: 'Buzëqeshjet e pacientëve tanë pas traumave të dhëmbëve rritin besimin dhe komoditetin.',
      alt: 'Burrë që qesh hapur dhe tregon dhëmbët',
    },
    {
      src: 'https://static.vecteezy.com/system/resources/previews/057/087/596/large_2x/a-handsome-man-with-a-genuine-smile-and-perfect-teeth-poses-against-a-neutral-background-conveying-joy-and-a-sense-of-well-being-free-photo.jpg',
      title: 'Dhëmbë të bardhë që bëjnë ndryshimin',
      description: 'Trajtimet tona estetike mbi dhëmbë të dukshëm sjellin rezultate të qarta.',
      alt: 'Grup me buzëqeshje të hapura dhe dhëmbë të dukshëm',
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
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          } else {
            entry.target.classList.remove('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const currentSlide = slides[slideIndex]

  const services = [
    {
      title: 'Kontrolle të plota dhe diagnostikim',
      description: 'Fillojmë me një vlerësim të plotë diagnostikues për të identifikuar çdo shqetësim dhe për të krijuar një plan trajtimi të personalizuar.',
      details: 'Përdorim imazheri moderne për të pritur ndryshimet e hershme dhe për të krijuar rrugën më efektive drejt një shëndeti të mirë oral.',
    },
    {
      title: 'Pastrim profesional dhe profilaksi',
      description: 'Higjena dentare me pastrimin më të avancuar për të mbajtur dhëmbët dhe mishrat e shëndetshëm për një buzëqeshje të pastër.',
      details: 'Pastrimi i thellë i gurëve dhe mbetjeve, plus trajtime të specializuara për të parandaluar inflamacionin dhe rrjedhjen e mishrave.',
    },
    {
      title: 'Trajtime kozmetike',
      description: 'Zbardhje, veneers dhe dizajn i buzëqeshjes për t’i dhënë fytyrës suaj një pamje më të freskët dhe më të sigurt.',
      details: 'Nga zbardhimi profesional deri te veshjet e hollë dhe dhëmbët artificialë, ne krijojmë buzëqeshjen që i përshtatet strukturës tuaj unike.',
    },
    {
      title: 'Kujdes restaurues',
      description: 'Kurora, ngulime dhe riparime të besueshme për të rikthyer estetikën, funksionin dhe rehati gjatë ngrënies.',
      details: 'Riparimet tona dhurojnë forcë dhe funksion natyral, duke rikthyer dhëmbin në formë dhe duke parandaluar dëmtime të mëtejshme.',
    },
    {
      title: 'Ortodontia dhe bitegjenika',
      description: 'Fiksimi i buzëqeshjes me metoda të reja ortodontike dhe mbështetje për funksion dhe estetikë.',
      details: 'Aparate transparente, bitegat, dhe rregullime të buta për të përshtatur epokën tuaj jetese dhe për të përmirësuar funksionin e betejës.',
    },
    {
      title: 'Implante dhe zëvendësime',
      description: 'Zgjidhje të qëndrueshme për dhëmbët e humbur me implante me cilësi dhe restaurime natyrale.',
      details: 'Implantet e planifikuara me kujdes dhe kurorat modernë ofrojnë një zëvendësim të fortë, të bukur dhe të qëndrueshëm.',
    },
    {
      title: 'Trajtim urgjent i dhimbjes',
      description: 'Ndihmë e shpejtë për dhimbjet e dhëmbëve, abscesset dhe problemet akute të gojës.',
      details: 'Ofrojmë trajtime emergjente me kujdes të shpejtë dhe lehtësim të simptomave për të ndaluar dhimbjen dhe inflamacionin.',
    },
    {
      title: 'Këshillim për higjienën orale',
      description: 'Udhëzime të personalizuara për të pasur një rutinë të përditshme që mbron shëndetin e buzëqeshjes tuaj.',
      details: 'Udhëzojmë teknikën e duhur të furçës, përdorimin e fillit dentar dhe produkteve që sjellin rezultate të qëndrueshme.',
    },
    {
      title: 'Konsulenca për planin financiar',
      description: 'Diskutojmë mundësi fleksibël pagesash dhe zgjidhje për të bërë trajtimin më të përshtatshëm për buxhetin tuaj.',
      details: 'Ofrojmë opsione pagesash, paketim të trajtimeve dhe këshilla të qarta për të reduktuar surprizat në faturë.',
    },
  ]

  const affordability = [
    {
      title: 'Kontrolle të qarta',
      subtitle: 'Transparencë të plotë',
      description: 'Çmime të thjeshta për kontrollin dhe pastrimin e parë.',
    },
    {
      title: 'Paketa familjare',
      subtitle: 'Zbritje për familjen',
      description: 'Oferta për prindër dhe fëmijë me tarifa të përballueshme.',
    },
    {
      title: 'Pagesa të ndara',
      subtitle: 'Fleksibilitet',
      description: 'Opsione financiare për trajtime më të mëdha.',
    },
  ]

  return (
    <div className="page">
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="logo"><span className="logo-icon">🦷</span>Biodent</div>
          <nav className="topnav">
            <a href="#services">Shërbimet</a>
            <a href="#affordability">Affordabiliteti</a>
            <a href="#contact">Kontakt</a>
          </nav>
          <div className="nav-right">
            <a className="phone" href="tel:+15551234567">(555) 123-4567</a>
            <a className="btn primary small" href="#contact">Rezervo</a>
          </div>
        </div>
      </div>
      <header className="hero-section">
        <div className="hero-slider slide-in">
          <div className="slide-overlay fade-up">
            <div className="hero-topline">Biodent</div>
            <h1>{currentSlide.title}</h1>
            <p>{currentSlide.description}</p>
            <div className="hero-actions">
              <a href="#services" className="btn primary">Shiko shërbimet</a>
              <a href="#affordability" className="btn secondary">Më shumë për çmimet</a>
            </div>
            <div className="hero-highlights">
              <span>📍 Lokacion i aksesueshëm</span>
              <span>⏱️ Rezervime të shpejta</span>
              <span>💚 Trajtim i butë</span>
            </div>
          </div>
          <img key={slideIndex} src={currentSlide.src} alt={currentSlide.alt} className="hero-image" />
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

      <main>
        <section id="services" className="section services">
          <div className="section-header">
            <span className="eyebrow">Shërbimet</span>
            <h2>Zgjidhje të plota dentare për çdo nevojë të buzëqeshjes.</h2>
            <p>Nga diagnostikimi i saktë dhe higjiena e përditshme, te trajtimet estetike, implantet dhe urgjencat, ne ofrojmë shërbime gjithëpërfshirëse për të ruajtur dhe përmirësuar shëndetin tuaj oral.</p>
          </div>
          <div className="cards-grid services-grid">
            {services.map((service, index) => (
              <article key={index} className="card fade-up">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="affordability" className="section affordability">
          <div className="section-header">
            <span className="eyebrow">Affordabiliteti</span>
            <h2>Cmime të qarta dhe struktura të përshtatshme për çdo familje.</h2>
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

        <section id="before-after" className="section before-after">
          <div className="section-header">
            <span className="eyebrow">Përpara & Pas</span>
            <h2>Shihni ndryshimin real të dhëmbëve në trajtimet tona.</h2>
            <p>Fotografitë tregojnë qartë transformimin nga dhëmbët e pakujdesur te një buzëqeshje e pastër dhe e ndritshme.</p>
          </div>
          <div className="before-after-grid">
            <article className="before-after-card fade-up">
              <div className="before-after-tag">Para</div>
              <img src="https://thfvnext.bing.com/th/id/OIP.kjwTw2wPMzFEGDlxhLKkugHaE8?w=253&h=180&c=7&r=0&o=7&cb=thfvnextfalcon2&dpr=1.3&pid=1.7&rm=3" className="before-after-img" />
              <p>Të dhëmbët para trajtimit zakonisht dukeshin të ndotur dhe të zbehur, por kjo është pikënisja e duhur për rezultatin e dëshiruar.</p>
            </article>
            <article className="before-after-card after fade-up">
              <div className="before-after-tag">Pas</div>
              <img src="https://img.freepik.com/premium-photo/closeup-beautiful-male-smile-with-healthy-teeth-dental-care-concept_323316-6809.jpg" alt="Pacient pas trajtimit dental" className="before-after-img" />
              <p>Rezultati pas trajtimit: dhëmbë të bardhë, të shndritshëm dhe një buzëqeshje që ndriçon pamjen tuaj të përgjithshme.</p>
            </article>
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <div className="section-header">
            <span className="eyebrow">Rishikimet</span>
            <h2>Çfarë thonë pacientët tanë</h2>
            <p>Lexoni përvojat e pacientëve nga Mitrovica që vijnë tek ne për një buzëqeshje më të shëndetshme.</p>
          </div>
          <div className="reviews-grid">
            <article className="card fade-up">
              <h3>Vlerësim i shkëlqyer</h3>
              <p>“Stafi ishte shumë i kujdesshëm dhe trajtimi i dhëmbëve më dha një buzëqeshje që e prisja prej vitesh. Shërbim profesional dhe i ngrohtë.”</p>
              <p className="review-meta">— Arta, Mitrovicë</p>
            </article>
            <article className="card fade-up">
              <h3>Përvoja e parë e mrekullueshme</h3>
              <p>“Ishte shumë e lehtë të rezervoja dhe të marrësh informacion të qartë. Dhëmbët e mi tani ndjehen më të fortë dhe më të pastër.”</p>
              <p className="review-meta">— Dren, Mitrovicë</p>
            </article>
            <article className="card fade-up">
              <h3>Profesionalizëm dhe besim</h3>
              <p>“Atmosfera është e qetë dhe e sigurt. I rekomandoj të gjithë njerëzit në Mitrovicë që të vijnë këtu për dhëmbë të bukur.”</p>
              <p className="review-meta">— Besa, Mitrovicë</p>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section-header">
            <span className="eyebrow">Kontakt</span>
            <h2>Merrni një lidhje me ekipin tonë.
</h2>
          </div>
          <div className="contact-panel">
            <div>
              <p>Na telefononi në <strong>(555) 123-4567</strong> ose na dërgoni një mesazh për të filluar kujdesin tuaj.</p>
            </div>
            <a className="btn primary" href="mailto:hello@biodent.com">
              hello@biodent.com
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Biodent — kujdes dentar modern për të gjithë familjen tuaj.</p>
      </footer>
    </div>
  )
}

export default App
