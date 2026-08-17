import facultyData from '../data/faculty.json'
import './Faculty.css'

interface FacultyMember {
  id: number
  name: string
  designation: string
  department: string
  image: string
}

function FacultyCard({ member }: { member: FacultyMember }) {
  return (
    <div className="faculty-card">
      <div className="faculty-card__photo-wrap">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="faculty-card__photo"
          />
        ) : (
          <div className="faculty-card__photo-placeholder">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
        )}
      </div>
      <div className="faculty-card__info">
        <h3 className="faculty-card__name">{member.name}</h3>
        <p className="faculty-card__designation">{member.designation}</p>
        <p className="faculty-card__dept">{member.department}</p>
      </div>
    </div>
  )
}

export default function Faculty() {
  const faculty = facultyData as FacultyMember[]

  return (
    <div className="faculty-page">
      {/* Page Hero */}
      <section className="faculty-hero">
        <div className="container faculty-hero__inner">
          <p className="section-eyebrow">Our People</p>
          <h1 className="faculty-hero__title">Faculty</h1>
          <div className="section-divider" style={{ margin: '16px auto 0' }} />
          <p className="faculty-hero__sub">
            Meet the dedicated faculty driving innovation in design and entrepreneurship at NITK.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="faculty-content section">
        <div className="container">
          {faculty.length === 0 ? (
            <div className="faculty-coming">
              <div className="faculty-coming__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h2 className="faculty-coming__title">Faculty Profiles Coming Soon</h2>
              <p className="faculty-coming__text">
                We're preparing detailed profiles for our distinguished faculty members.
              </p>
            </div>
          ) : (
            <div className="faculty-grid">
              {faculty.map((member) => (
                <FacultyCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
