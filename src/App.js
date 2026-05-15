import { useEffect, useState } from 'react';
import './App.css';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'events', label: 'Events' },
  { id: 'contact', label: 'Contact' }
];

const pageMeta = {
  home: {
    title: 'Planora | Event Planning, Decoration & Anchoring',
    description:
      'Planora plans birthdays, weddings, baby showers, corporate events, brand promotions, decoration, and anchoring.'
  },
  events: {
    title: 'Planora Events | Weddings, Birthdays & Corporate Event Planning',
    description:
      'Explore Planora event planning services for weddings, birthdays, baby showers, corporate events, brand promotions, and live coordination.'
  },
  contact: {
    title: 'Contact Planora | Book Event Planning Services',
    description:
      'Contact Planora for birthday parties, weddings, baby showers, corporate events, brand promotions, decoration, and anchoring.'
  }
};

const getCurrentPage = () => {
  const hash = window.location.hash.replace('#', '');
  return links.some((link) => link.id === hash) ? hash : 'home';
};

function App() {
  const [page, setPage] = useState(getCurrentPage());

  useEffect(() => {
    const handleHashChange = () => {
      setPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const meta = pageMeta[page];
    document.title = meta.title;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute('content', meta.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', meta.description);
    }
  }, [page]);

  return (
    <div className="App">
      <header className="site-header">
        <a href="#home" className="site-logo" aria-label="Planora home">
          <img src="/planora-logo.png" alt="" />
          <span>Planora</span>
        </a>
        <nav className="site-nav" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={page === link.id ? 'is-active' : ''}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {page === 'home' && <HomePage />}
      {page === 'events' && <EventsPage />}
      {page === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;
