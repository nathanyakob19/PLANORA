import { useEffect, useState } from 'react';
import './HomePage.css';

const slides = [
  {
    eyebrow: 'Event planning',
    title: 'Run polished events with one flexible planning workspace.',
    description:
      'Coordinate schedules, vendors, guest details, and team tasks in one place without losing momentum.',
    accent: 'Live operations',
    statLabel: 'Active event boards',
    statValue: '128+'
  },
  {
    eyebrow: 'Team alignment',
    title: 'Keep timelines, approvals, and logistics moving in one flow.',
    description:
      'Move between speakers, venue tasks, production notes, and guest updates without bouncing across tools.',
    accent: 'Shared command',
    statLabel: 'Real-time updates',
    statValue: '24/7'
  },
  {
    eyebrow: 'Clear execution',
    title: 'Turn scattered event ideas into a calm, focused control center.',
    description:
      'Give every launch, conference, or celebration a clear structure with flexible modules and fast collaboration.',
    accent: 'Confident delivery',
    statLabel: 'Hours saved weekly',
    statValue: '18h'
  }
];

const managementCards = [
  {
    title: 'Event Scheduling',
    description:
      'Build timelines for ceremonies, sessions, launches, and production moments without losing track of dependencies.'
  },
  {
    title: 'Vendor Coordination',
    description:
      'Keep decorators, caterers, venues, technical crews, and partners aligned with one shared planning view.'
  },
  {
    title: 'Guest Experience',
    description:
      'Track invites, seating, check-in flow, and special requests so every attendee interaction feels well managed.'
  },
  {
    title: 'Team Task Control',
    description:
      'Assign responsibilities, follow progress, and resolve blockers quickly across organizers, volunteers, and leads.'
  }
];

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="homepage">
      <section className="homepage-banner">
        <div
          className="homepage-banner__track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <section key={slide.title} className="homepage-banner__slide">
              <div className="homepage-banner__content">
                <span className="homepage-banner__eyebrow">{slide.eyebrow}</span>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="homepage-banner__actions">
                  <button
                    type="button"
                    className="homepage-banner__button homepage-banner__button--primary"
                    onClick={() => scrollToSection('management')}
                  >
                    Get started
                  </button>
              
                </div>
              </div>
              <aside className="homepage-banner__panel">
                <span className="homepage-banner__panel-label">{slide.accent}</span>
                <strong>{slide.statValue}</strong>
                <p>{slide.statLabel}</p>
              </aside>
            </section>
          ))}
        </div>
        <div className="homepage-banner__dots" aria-label="Banner navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`homepage-banner__dot${index === activeIndex ? ' is-active' : ''}`}
              aria-label={`Show slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </section>

      <section className="management-section" id="management">
        <div className="management-section__intro">
          <span className="management-section__eyebrow">How we manage events</span>
          <h2>Everything your team needs after the hero section, in a clean card layout.</h2>
          <p>
            Planora helps event teams organize operations from first brief to final execution with clear,
            collaborative workflows.
          </p>
        </div>
        <div className="management-grid">
          {managementCards.map((card) => (
            <article key={card.title} className="management-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="homepage-footer">
        <div>
          <strong>Planora</strong>
          <p>Simple event planning, scheduling, and coordination for modern teams.</p>
        </div>
        <div className="homepage-footer__links">
          <a href="/">Home</a>
          <a href="/">Events</a>
          <a href="/">Schedule</a>
          <a href="/">Contact</a>
        </div>
      </footer>
    </main>
  );
}

export default HomePage;
