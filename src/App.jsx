

function App(){
  return(
    <div>
      <header className="header">
        <div className="logo">LUBS</div>
        <nav>
          <a href="#">Leistungen</a>
          <a href="#">Projekte</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <p className="eyebrow">Werbetechnik für starke Markenauftritte</p>
          <h1>Wir machen deine Marke sichtbar.</h1>
          <p className="hero-text">Von Fahrzeugbeschriftung bis Leuchtwerbung – wir sorgen dafür, dass dein Unternehmen auffällt.</p>
          <div>
            <button className="primary">Projekte ansehen</button>
            <button className="secondary">Kontakt aufnehmen</button>
          </div>
        </section>

        <section className="services">
          <p className="eyebrow">Leistungen</p>
          <h2>Alles für einen starken Auftritt</h2>
          <div className="service-list">
            <div className="service">
              <h3>Design</h3>
              <p>Wir entwickeln klare und moderne Markenauftritte.</p>
            </div>

            <div className="service">
              <h3>Beschriftung</h3>
              <p>Fahrzeuge, Schaufenster und Flächen werden zu Werbeträgern.</p>
            </div>

            <div className="service">
              <h3>Leuchtwerbung</h3>
              <p>Wir sorgen dafür, dass dein Unternehmen auch im Dunkeln sichtbar ist.</p>
            </div>
          </div>
          <p className="services-note">
            Du hast ein Projekt im Kopf? Lass uns gemeinsam sichtbar werden.
          </p>
          <button className="primary">Jetzt Kontakt aufnehmen</button>
        </section>
      </main>
      <footer className="footer">
        <p>© LUBS Werbetechnik</p>
        </footer>
    </div>
  );
}

export default App;