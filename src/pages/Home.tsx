import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import deptBuilding from '../assets/dept-building.jpg'
import './Home.css'

/* ---- Animated counter hook ---- */
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

/* ---- Intersection observer hook ---- */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, inView }
}

/* ---- Stat counter component ---- */
function StatCounter({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const { ref, inView } = useInView(0.3)
  const count = useCountUp(value, 1600, inView)
  return (
    <div className="stat" ref={ref}>
      <span className="stat__number">{count}{suffix}</span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

/* ---- Objective icon map ---- */
const objectiveIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
]

const objectives = [
  'Promote innovation and entrepreneurial thinking through design thinking, creativity, and human-centered approaches.',
  'Develop students\' creative confidence, critical thinking, and problem-solving skills to address complex real-world challenges.',
  'Foster entrepreneurship by supporting startup creation, venture development, and entrepreneurial leadership.',
  'Advance interdisciplinary research, innovation, and knowledge creation in design, technology, and entrepreneurship.',
  'Strengthen collaboration with industry, academia, government, and the startup ecosystem to enhance experiential learning.',
  'Develop sustainable, inclusive, and socially responsible solutions that contribute to economic growth and societal well-being.',
]

/* ---- Quick links ---- */
const quickLinks = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>,
    title: 'Faculty',
    desc: 'Meet our expert faculty members driving innovation in design education.',
    link: '/faculty',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>,
    title: 'Programs',
    desc: 'Explore our innovative programs blending design, tech, and entrepreneurship.',
    link: '#',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>,
    title: 'Research',
    desc: 'Discover groundbreaking research in human-centered design and innovation.',
    link: '#',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>,
    title: 'Labs & Facilities',
    desc: 'State-of-the-art innovation labs and design studios at your disposal.',
    link: '#',
  },
]

/* ============================
   HOME PAGE
   ============================ */
export default function Home() {
  const { ref: objRef, inView: objInView } = useInView(0.1)

  return (
    <div className="home">
      {/* ---- HERO ---- */}
      <section className="hero" id="home">
        <div className="hero__image-wrap">
          <img src={deptBuilding} alt="Department of Design and Entrepreneurship Building, NITK" className="hero__image" />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content container">
          <p className="hero__eyebrow">National Institute of Technology Karnataka, Surathkal</p>
          <h1 className="hero__title">
            Department of Design<br />
            <span className="hero__title-accent">&amp; Entrepreneurship</span>
          </h1>
          <p className="hero__tagline">
            Bridging creativity, technology, and business — <br className="hero__br" />
            transforming ideas into impactful solutions.
          </p>
          <div className="hero__cta-group">
            <a href="#about" className="btn-primary">Explore Department</a>
            <Link to="/faculty" className="btn-outline">Meet Our Faculty</Link>
          </div>
        </div>
        <a href="#about" className="hero__scroll-hint" aria-label="Scroll down">
          <span className="hero__scroll-arrow" />
        </a>
      </section>

      {/* ---- STATS BAR ---- */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          <StatCounter value={15} label="Faculty Members" suffix="+" />
          <div className="stats-bar__divider" />
          <StatCounter value={200} label="Students Enrolled" suffix="+" />
          <div className="stats-bar__divider" />
          <StatCounter value={5} label="Innovation Labs" suffix="" />
          <div className="stats-bar__divider" />
          <StatCounter value={30} label="Industry Partners" suffix="+" />
        </div>
      </section>

      {/* ---- ABOUT ---- */}
      <section className="about section" id="about">
        <div className="container about__grid">
          <div className="about__image-col">
            <div className="about__img-frame">
              <img src={deptBuilding} alt="Department of Design and Entrepreneurship, NITK" />
              <div className="about__img-badge">
                <span className="about__img-badge-year">Est.</span>
                <span className="about__img-badge-num">2025</span>
              </div>
            </div>
          </div>
          <div className="about__text-col">
            <span className="section-eyebrow">About the Department</span>
            <h2 className="section-title about__title">Bridging Creativity,<br />Technology &amp; Business</h2>
            <div className="section-divider" style={{ margin: '0 0 24px' }} />
            <p className="about__para">
              The Department of Design and Entrepreneurship is dedicated to bridging creativity, technology, and business
              by fostering innovation, design excellence, and entrepreneurial thinking. The department equips students
              with the knowledge, skills, and practical experience to transform ideas into impactful products, services,
              and sustainable ventures.
            </p>
            <p className="about__para">
              The curriculum integrates design thinking, human-centered design, product and service innovation,
              business strategy, entrepreneurship, digital technologies, and sustainability through interdisciplinary
              and experiential learning.
            </p>
            <p className="about__para">
              Students engage in project-based learning, industry collaborations, innovation laboratories, startup
              incubation, and global partnerships to develop solutions for real-world challenges.
            </p>
            <a href="#vision" className="btn-primary about__cta">
              Our Vision &amp; Mission
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ---- VISION & MISSION ---- */}
      <section className="vision section" id="vision">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Our Purpose</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
            <div className="section-divider" />
          </div>

          <div className="vision__grid">
            {/* Vision Card */}
            <div className="vision-card vision-card--vision">
              <div className="vision-card__icon-wrap">
                <svg className="vision-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3 className="vision-card__title">Vision</h3>
              <p className="vision-card__text">
                To become a globally recognized center of excellence in design innovation and entrepreneurship,
                fostering creativity, human-centered thinking, innovation, and entrepreneurial leadership to develop
                sustainable solutions and create lasting societal and economic impact.
              </p>
            </div>

            {/* Mission Card */}
            <div className="vision-card vision-card--mission">
              <div className="vision-card__icon-wrap">
                <svg className="vision-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <h3 className="vision-card__title">Mission</h3>
              <ul className="vision-card__list">
                <li>Provide interdisciplinary, experiential, and learner-centered education in design thinking, innovation, and entrepreneurship.</li>
                <li>Foster research, innovation, and product development through human-centered design and evidence-based approaches.</li>
                <li>Promote an entrepreneurial ecosystem by facilitating startup creation, incubation, and industry collaboration.</li>
                <li>Cultivate ethical leadership, sustainability, inclusivity, and lifelong learning to prepare future-ready graduates.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---- OBJECTIVES ---- */}
      <section className="objectives section" id="objectives" ref={objRef}>
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Aim For</span>
            <h2 className="section-title">Our Objectives</h2>
            <div className="section-divider" />
            <p className="section-subtitle">
              Six core pillars that guide our pursuit of excellence in design education and entrepreneurial development.
            </p>
          </div>
          <div className="objectives__grid">
            {objectives.map((obj, i) => (
              <div
                key={i}
                className={`objective-card ${objInView ? 'objective-card--visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="objective-card__num">{String(i + 1).padStart(2, '0')}</div>
                <div className="objective-card__icon">{objectiveIcons[i]}</div>
                <p className="objective-card__text">{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- QUICK LINKS ---- */}
      <section className="quicklinks section" id="explore">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Explore</span>
            <h2 className="section-title">What We Offer</h2>
            <div className="section-divider" />
          </div>
          <div className="quicklinks__grid">
            {quickLinks.map((item) => (
              <Link to={item.link} key={item.title} className="quicklink-card">
                <div className="quicklink-card__icon">{item.icon}</div>
                <h3 className="quicklink-card__title">{item.title}</h3>
                <p className="quicklink-card__desc">{item.desc}</p>
                <span className="quicklink-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- GRADUATES PROFILE ---- */}
      <section className="graduates section">
        <div className="container graduates__inner">
          <div className="graduates__text">
            <span className="section-eyebrow">Career Outcomes</span>
            <h2 className="section-title">Where Our Graduates Go</h2>
            <div className="section-divider" style={{ margin: '0 0 24px' }} />
            <p className="graduates__para">
              Graduates of the Department of Design and Entrepreneurship are prepared to excel across a wide spectrum
              of roles — combining creative and analytical skills with entrepreneurial drive.
            </p>
            <div className="graduates__roles">
              {['Designers', 'Innovators', 'Entrepreneurs', 'Product Managers', 'Consultants', 'Startup Founders', 'Innovation Leaders'].map((role) => (
                <span key={role} className="graduates__role-tag">{role}</span>
              ))}
            </div>
          </div>
          <div className="graduates__visual">
            <div className="graduates__circle-bg">
              <div className="graduates__center-text">
                <span className="graduates__center-pct">100%</span>
                <span className="graduates__center-label">Industry Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- CONTACT CTA ---- */}
      <section className="contact-cta" id="contact">
        <div className="container contact-cta__inner">
          <div className="contact-cta__text">
            <h2 className="contact-cta__title">Get in Touch</h2>
            <p className="contact-cta__sub">Have questions about our programs, admissions, or research? We'd love to hear from you.</p>
          </div>
          <div className="contact-cta__actions">
            <a href="mailto:dept.design@nitk.edu.in" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email Us
            </a>
            <a href="https://nitk.ac.in/contact-us" target="_blank" rel="noopener noreferrer" className="btn-outline contact-cta__secondary">
              Visit NITK
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
