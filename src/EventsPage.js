import './HomePage.css';

const completedEvents = [
  {
    name: 'Visionary Product Summit 2025',
    type: 'Corporate launch',
    year: '2025',
    detail:
      'Managed stage flow, speaker transitions, registration, vendor timing, and live production across a full-day summit.'
  },
  {
    name: 'Royal Wedding Weekend',
    type: 'Luxury celebration',
    year: '2024',
    detail:
      'Coordinated multi-day hospitality, guest transport, decor teams, catering windows, and ceremony sequencing.'
  },
  {
    name: 'Creators Expo Night',
    type: 'Community event',
    year: '2024',
    detail:
      'Handled exhibitor booths, attendee check-in, sponsor zones, lighting cues, and engagement planning end to end.'
  }
];

const eventDetailPoints = [
  'Pre-event planning with timelines, task allocation, and vendor scheduling',
  'On-ground execution support for entry flow, stage management, and guest coordination',
  'Post-event wrap-up including debrief notes, billing checkpoints, and operational review'
];

function EventsPage() {
  return (
    <main className="page page--events" id="events">
      <section className="page-hero">
        <span className="management-section__eyebrow">Events page</span>
        <h1>Projects we have delivered with full planning and execution detail.</h1>
        <p>
          Explore the events we have managed and the workflow structure we use to keep production, guest
          experience, and coordination under control.
        </p>
      </section>

      <section className="events-section events-section--page">
        <div className="events-section__intro">
          <span className="management-section__eyebrow">Events we have done</span>
          <h2>Recent events managed across corporate, luxury, and community formats.</h2>
          <p>
            Each project below reflects our approach to scheduling, execution support, vendor handling,
            and attendee experience.
          </p>
        </div>

        <div className="events-grid">
          {completedEvents.map((event) => (
            <article key={event.name} className="event-card">
              <span className="event-card__meta">
                {event.type} . {event.year}
              </span>
              <h3>{event.name}</h3>
              <p>{event.detail}</p>
            </article>
          ))}
        </div>

        <div className="event-detail-panel">
          <div className="event-detail-panel__content">
            <span className="management-section__eyebrow">Detailed view</span>
            <h3>How we manage an event from planning table to on-ground delivery.</h3>
            <p>
              We keep every event on one operational path so the team can see ownership, timing, and
              next actions without confusion.
            </p>
          </div>
          <div className="event-detail-panel__list">
            {eventDetailPoints.map((point) => (
              <div key={point} className="event-detail-point">
                <span className="event-detail-point__index" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <div>
          <strong>Planora</strong>
          <p>Event planning, coordination, and delivery for teams that need clarity.</p>
        </div>
        <div className="homepage-footer__links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </main>
  );
}

export default EventsPage;
