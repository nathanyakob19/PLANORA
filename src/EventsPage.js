import './HomePage.css';

const serviceHighlights = [
  {
    title: 'Weddings & Celebrations',
    detail:
      'Planora manages wedding flow, birthday parties, baby showers, decor teams, hospitality, and guest movement.'
  },
  {
    title: 'Corporate Events',
    detail:
      'Launches, meetings, office celebrations, stage plans, schedules, and production details stay organized.'
  },
  {
    title: 'Brand Promotion',
    detail:
      'Promotional events are shaped around visibility, audience interaction, partner areas, and brand recall.'
  }
];

const processSteps = [
  'Map the event brief into owners, dates, dependencies, vendors, and decisions.',
  'Run pre-event rehearsals with stage cues, guest routes, entry flow, and contingency notes.',
  'Close with debriefs, billing checkpoints, performance notes, and the next planning board.'
];

function EventsPage() {
  return (
    <main className="site-main page-main">
      <section className="page-intro">
        <p className="eyebrow">Events</p>
        <h1>Event planning services with the operational detail left visible.</h1>
        <p>
          Planora supports personal celebrations and business events with planning, coordination,
          decoration, anchoring, and live execution support.
        </p>
      </section>

      <section className="event-list" aria-label="Planora event planning services">
        {serviceHighlights.map((event) => (
          <article key={event.title} className="event-row">
            <div>
              <span className="event-row__meta">Planora service</span>
              <h2>{event.title}</h2>
            </div>
            <p>{event.detail}</p>
          </article>
        ))}
      </section>

      <section className="process-panel">
        <div className="section-heading">
          <p className="eyebrow">Method</p>
          <h2>From brief to live floor, every step has an owner.</h2>
        </div>
        <div className="process-list">
          {processSteps.map((step, index) => (
            <div key={step} className="process-item">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/planora-logo.png" alt="" />
          <p>
            Book Planora for weddings, birthdays, baby showers, corporate events, brand
            promotions, decoration, and anchoring.
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

export default EventsPage;
