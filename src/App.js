import { useEffect, useState } from 'react';
import './App.css';
import ShapeGrid from './component/ShapeGrid';
import HomePage from './HomePage';
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';

const getCurrentPage = () => {
  const hash = window.location.hash.replace('#', '');

  if (hash === 'events') return 'events';
  if (hash === 'contact') return 'contact';
  return 'home';
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

  return (
    <div className="App">
      <div className="shapegrid-shell">
        <ShapeGrid
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#050505"
          hoverFillColor="#000000"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      {page === 'home' && <HomePage />}
      {page === 'events' && <EventsPage />}
      {page === 'contact' && <ContactPage />}
      <nav className="glass-navbar" aria-label="Primary">
        <a href="#home" className="glass-navbar__brand">
          Planora
        </a>
        <div className="glass-navbar__links">
          <a href="#home" className={page === 'home' ? 'is-active' : ''}>
            Home
          </a>
          <a href="#events" className={page === 'events' ? 'is-active' : ''}>
            Events
          </a>
          <a href="#contact" className={page === 'contact' ? 'is-active' : ''}>
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default App;
