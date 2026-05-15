import './HomePage.css';

const services = [
  {
    title: 'Birthday Parties',
    description:
      'Theme planning, decor, guest movement, entertainment cues, and celebration moments managed with polish.'
  },
  {
    title: 'Weddings',
    description:
      'Ceremony flow, hospitality, vendor timing, decor teams, guest care, and multi-day coordination.'
  },
  {
    title: 'Corporate Events',
    description:
      'Launches, meetings, brand activations, stage direction, scheduling, and on-ground production control.'
  },
  {
    title: 'Baby Shower',
    description:
      'Soft, detail-led planning for family celebrations, decor, games, gifting flow, and guest experience.'
  },
  {
    title: 'Brand Promotion',
    description:
      'Visibility-focused event planning for promotions, audience interaction, partner zones, and brand recall.'
  },
  {
    title: 'Decoration & Anchoring',
    description:
      'Event styling, thematic setup, hosting support, announcements, and smooth transitions through the program.'
  }
];

const metrics = [
  ['120+', 'event boards structured'],
  ['18h', 'saved per production week'],
  ['24/7', 'live coordination rhythm']
];

function HomePage() {
  return (
    <main className="site-main">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Event direction and execution</p>
          <h1>
            Where plans align perfectly<span className="headline-period" aria-hidden="true">.</span>
          </h1>
          <p className="hero-copy__lead">
            Planora plans birthdays, weddings, showers, corporate events, brand promotions, decor,
            and anchoring with a premium black-and-off-white visual identity.
          </p>
          <div className="hero-actions">
            <a href="#events" className="button button--dark">
              View Events
            </a>
            <a href="#contact" className="button button--light">
              Start Planning
            </a>
          </div>
        </div>
        <figure className="hero-visual">
          <img src="/planora-hero.png" alt="Black and off-white event planning materials" />
          <figcaption>
            <span>01</span>
            <p>Monochrome planning boards for precise event movement.</p>
          </figcaption>
        </figure>
      </section>

      <section className="metrics-strip" aria-label="Planora performance highlights">
        {metrics.map(([value, label]) => (
          <div key={label} className="metric">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="services-section" id="management">
        <div className="section-heading">
          <p className="eyebrow">What replaces the noise</p>
          <h2>Services built around celebration, presence, and clean execution.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article key={service.title} className="service-card">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/planora-logo.png" alt="" />
          <p>
            Planora provides event planning, decoration, anchoring, guest flow, and coordination
            for personal celebrations and business events.
          </p>
        </div>
        <nav aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </main>
  );
}

export default HomePage;
