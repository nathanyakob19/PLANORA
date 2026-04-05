import './HomePage.css';

function ContactPage() {
  return (
    <main className="page page--contact" id="contact">
      <section className="page-hero">
        <span className="management-section__eyebrow">Contact page</span>
        <h1>Talk to us about your next event.</h1>
        <p>
          Share your event format, date, guest count, and expectations. We will help shape the plan and
          guide execution from the start.
        </p>
      </section>

      <section className="contact-section contact-section--page">
        <div className="contact-section__intro">
          <span className="management-section__eyebrow">Contact</span>
          <h2>Reach our team directly for bookings and planning support.</h2>
          <p>
            We are available to discuss launches, weddings, conferences, private functions, and custom
            event requirements.
          </p>
        </div>
        <div className="contact-card">
          <div>
            <strong>Call us</strong>
            <p>+91 9833825682</p>
          </div>
          <div>
            <strong>Email</strong>
            <p>planora3045@gamil.com</p>
          </div>
          <div>
            <strong>Office hours</strong>
            <p>Mon - Sat, 9:00 AM to 7:00 PM</p>
          </div>
        </div>
      </section>

      <footer className="homepage-footer">
        <div>
          <strong>Planora</strong>
          <p>Connect with our team for event planning, coordination, and execution support.</p>
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

export default ContactPage;
