import './HomePage.css';

const contactMethods = [
  ['Call', '+91 9833825682'],
  ['Email', 'planora3045@gmail.com'],
  ['Instagram', '@workbyplanora'],
  ['Hours', 'Mon - Sat, 9:00 AM to 7:00 PM']
];

function ContactPage() {
  return (
    <main className="site-main page-main">
      <section className="contact-layout">
        <div className="page-intro page-intro--contact">
          <p className="eyebrow">Contact</p>
          <h1>Bring the event. We will shape the operating plan.</h1>
          <p>
            Send the event format, date, guest count, venue status, and the kind of experience you
            want people to remember.
          </p>
        </div>

        <div className="contact-panel">
          {contactMethods.map(([label, value]) => (
            <div key={label} className="contact-method">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
          <a href="mailto:planora3045@gmail.com" className="button button--dark">
            Write to Planora
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <img src="/planora-logo.png" alt="" />
          <p>
            Call +91 9833825682 or email planora3045@gmail.com to start planning your event.
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

export default ContactPage;
