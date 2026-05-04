import { useState } from "react";

function App(){
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);
  return(
    <div>
      <header className="header">
        <div className="logo">
          <img src={`${import.meta.env.BASE_URL}images/logo.svg`} alt="LUBS Logo" />
          </div>
        <nav>
          <a href="#leistungen">Leistungen</a>
          <a href="#kunden">Kunden</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <p className="eyebrow">Werbetechnik für starke Markenauftritte</p>
          <h1>Werbetechnik, die sichtbar wirkt.</h1>
          <p className="hero-text">Von Fahrzeugbeschriftung bis Leuchtwerbung – wir sorgen dafür, dass dein Unternehmen auffällt.</p>
          <div>
            <a className="button primary" href="#leistungen">Leistungen ansehen</a>
            <a className="button secondary" href="#kontakt">Kontakt aufnehmen</a>
          </div>
          <p className="hero-note">
              Persönlich, zuverlässig und mit langjähriger Erfahrung.
          </p>
        </section>

        <section className="services" id="leistungen">
          <p className="eyebrow">Leistungen</p>
          <h2>Alles für einen starken Auftritt</h2>
          <div className="service-list">
            <div className="service">
              <h3>Design</h3>
              <img
                className="service-image"
                src={`${import.meta.env.BASE_URL}images/design.jpg`}
                alt="Design"
              />
              <p>Von der Idee zum fertigen Auftritt.</p>
              <p>Wir entwickeln Logos, Flyer und Visitenkarten, die deine Marke klar und professionell präsentieren.</p>
            </div>

            <div className="service">
              <h3>Beschriftung</h3>
              <img
                className="service-image"
                src={`${import.meta.env.BASE_URL}images/beschriftung.jpg`}
                alt="Beschriftung"
              />
              <p>Werbung, die sichtbar wird.</p>
              <p>Wir beschriften Fahrzeuge, Schaufenster und Räume – präzise, langlebig und wirkungsvoll.</p>
            </div>

            <div className="service">
              <h3>Leuchtwerbung</h3>
              <img
                className="service-image"
                src={`${import.meta.env.BASE_URL}images/leuchtwerbung.jpg`}
                alt="Leuchtwerbung"
              />
              <p>Auffallen – auch im Dunkeln.</p>
              <p>Mit moderner Leuchtwerbung sorgen wir dafür, dass dein Unternehmen sofort ins Auge fällt.</p>
            </div>
          </div>
          <p className="services-note">
            Du hast ein Projekt im Kopf? Lass uns gemeinsam sichtbar werden.
          </p>
          <a className="button primary" href="#kontakt">Jetzt Kontakt aufnehmen</a>
        </section>
        <section className="clients" id="kunden">
          <p className="eyebrow">Kunden</p>
          <h2>Unternehmen, die uns vertrauen</h2>
          <div className="clients-image">
            <img
              src={`${import.meta.env.BASE_URL}images/clients.jpg`}
              alt="Unsere Kunden"
              />
          </div>
        </section>
        <section className="contact" id="kontakt">
          <p className="eyebrow">Kontakt</p>
          <h2>Lass uns dein Projekt umsetzen</h2>

          <p className="contact-text">
            Melde dich unverbindlich und wir finden gemeinsam die passende Lösung für dein Projekt.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea placeholder="Worum geht es?" rows="5"></textarea>
            <button className="primary" type="button">Anfrage senden</button>
          </form>
        </section>
      </main>

    
      <footer className="footer">
        <p>© LUBS Werbetechnik · Alle Rechte vorbehalten</p>

        <div className="footer-links">
          <button className="footer-link" onClick={() => setShowImpressum(true)}>
            Impressum
          </button>
          <button className="footer-link" onClick={() => setShowDatenschutz(true)}>
            Datenschutz
          </button>
        </div>
      </footer>
      {showImpressum && (
        <div className="modal-overlay" onClick={() => setShowImpressum(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowImpressum(false)}>
              ×
            </button>

            <h2>Impressum</h2>

            <p>Angaben gemäß § 5 TMG</p>

            <p>
              LUBS Werbetechnik<br />
              Lervin Mitrovic<br />
              Düsseldorfer Str. 70a<br />
              10719 Berlin
            </p>

            <p>
              Kontakt:<br />
              Telefon: +49 177 / 755 84 33<br />
              E-Mail: info@lubs-wt.de
            </p>

            <p>
              Umsatzsteuer-ID:<br />
              DE283363541
            </p>
          </div>
        </div>
      )}
      {showDatenschutz && (
        <div className="modal-overlay" onClick={() => setShowDatenschutz(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowDatenschutz(false)}>
              ×
            </button>

            <h2>Datenschutzerklärung</h2>

            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Personenbezogene Daten werden auf dieser Website nur im notwendigen Umfang erhoben.
            </p>

            <p>
              Beim Besuch dieser Website werden automatisch Informationen durch den Hosting-Anbieter
              (GitHub Pages) erfasst und in sogenannten Server-Logfiles gespeichert.
            </p>

            <p>
              Wenn Sie uns per Formular kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
            </p>

            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung oder Löschung Ihrer gespeicherten Daten.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;