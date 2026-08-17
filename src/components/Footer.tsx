import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Branding */}
          <div className="footer__brand">
            <h3 className="footer__dept-name">Department of Design<br />and Entrepreneurship</h3>
            <p className="footer__nitk">National Institute of Technology Karnataka, Surathkal</p>
            <p className="footer__address">
              Mangaluru – 575025<br />Karnataka, India
            </p>
            <div className="footer__social">
              <a href="https://nitk.ac.in" target="_blank" rel="noopener noreferrer" aria-label="NITK Website">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              </a>
              <a href="mailto:dept.design@nitk.edu.in" aria-label="Email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About Department</a></li>
              <li><a href="/faculty">Faculty</a></li>
              <li><a href="#vision">Vision & Mission</a></li>
              <li><a href="#objectives">Objectives</a></li>
            </ul>
          </div>

          {/* NITK Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">NITK Portal</h4>
            <ul className="footer__links">
              <li><a href="https://nitk.ac.in" target="_blank" rel="noopener noreferrer">NITK Main Website</a></li>
              <li><a href="https://iris.nitk.ac.in" target="_blank" rel="noopener noreferrer">IRIS Portal</a></li>
              <li><a href="https://cdc.nitk.ac.in" target="_blank" rel="noopener noreferrer">Career Development Centre</a></li>
              <li><a href="https://crf.nitk.ac.in" target="_blank" rel="noopener noreferrer">Central Research Facility</a></li>
              <li><a href="https://library.nitk.ac.in" target="_blank" rel="noopener noreferrer">Library</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <a href="mailto:dept.design@nitk.edu.in">dept.design@nitk.edu.in</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>NIT Karnataka, Surathkal, Mangaluru – 575025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Department of Design and Entrepreneurship, NIT Karnataka. All rights reserved.</p>
          <a href="https://nitk.ac.in" target="_blank" rel="noopener noreferrer">
            nitk.ac.in
          </a>
        </div>
      </div>
    </footer>
  )
}
