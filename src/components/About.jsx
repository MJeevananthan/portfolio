import { motion } from 'framer-motion'
import { FaUser, FaCalendar, FaMapMarkerAlt, FaHeart, FaCode } from 'react-icons/fa'

const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: 'easeOut' },
}

const stats = [
  { value: '8.1', label: 'CGPA', icon: '🎓' },
  { value: '2+', label: 'Projects', icon: '🚀' },
  { value: '2', label: 'Internships', icon: '💼' },
  { value: '5+', label: 'Certifications', icon: '🏆' },
]

const details = [
  { icon: <FaUser size={14} />, label: 'Name', value: 'Jeevananthan M' },
  { icon: <FaCalendar size={14} />, label: 'DOB', value: '14 September 2005' },
  { icon: <FaMapMarkerAlt size={14} />, label: 'Location', value: 'Coimbatore, Tamil Nadu' },
  { icon: <FaHeart size={14} />, label: 'Hobbies', value: 'Music & Building Projects' },
  { icon: <FaCode size={14} />, label: 'Languages', value: 'Tamil, English' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ textAlign: 'center', color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Get To Know Me
          </p>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate developer with a drive for AI innovation</p>
        </motion.div>

        <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Left: Info */}
          <motion.div {...fadeInLeft} style={{ flex: '1', minWidth: '280px' }}>
            <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
              }} />
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: '#f1f5f9' }}>
                Career Objective
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '24px' }}>
                Highly motivated B.Tech AI & Data Science aspirant with a strong foundation in Python,
                Machine Learning, Generative AI, and Full-Stack Web Development. Passionate about building
                intelligent software solutions that solve real-world problems through applied AI.
              </p>
              <p style={{ color: '#94a3b8', lineHeight: 1.8 }}>
                Seeking an entry-level opportunity to apply technical knowledge, strengthen problem-solving
                skills, and contribute to organizational growth.
              </p>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '20px', color: '#f1f5f9' }}>
                Personal Details
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {details.map((d) => (
                  <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '8px',
                      background: 'rgba(99,102,241,0.1)',
                      border: '1px solid rgba(99,102,241,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#818cf8', flexShrink: 0,
                    }}>
                      {d.icon}
                    </div>
                    <div>
                      <span style={{ color: '#64748b', fontSize: '0.75rem', display: 'block' }}>{d.label}</span>
                      <span style={{ color: '#f1f5f9', fontSize: '0.9rem', fontWeight: 500 }}>{d.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Stats + Education */}
          <motion.div {...fadeInRight} style={{ flex: '1', minWidth: '280px' }}>
            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                    borderRadius: '16px',
                    padding: '24px 20px',
                    textAlign: 'center',
                    transition: 'all 0.3s',
                  }}
                  whileHover={{ y: -4, borderColor: 'rgba(99,102,241,0.4)' }}
                >
                  <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                  <div style={{
                    fontSize: '2rem', fontWeight: 800,
                    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {s.value}
                  </div>
                  <div style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '4px' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="card">
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '24px', color: '#f1f5f9' }}>
                🎓 Education
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    degree: 'B.Tech - AI & Data Science',
                    school: 'RVS College of Engineering and Technology',
                    year: '2023 – 2027',
                    score: 'CGPA: 8.1',
                    tag: 'Current',
                  },
                  {
                    degree: 'HSC (12th)',
                    school: 'Srivalli Varadaraj Matric Hr Sec School',
                    year: '2022 – 2023',
                    score: '85%',
                    tag: 'Completed',
                  },
                  {
                    degree: 'SSLC (10th)',
                    school: 'Srivalli Varadaraj Matric Hr Sec School',
                    year: '2020 – 2021',
                    score: '',
                    tag: 'Completed',
                  },
                ].map((edu, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{
                        width: 12, height: 12, borderRadius: '50%',
                        background: i === 0 ? '#6366f1' : '#334155',
                        border: '2px solid', borderColor: i === 0 ? '#6366f1' : '#475569',
                        marginTop: '4px', flexShrink: 0,
                      }} />
                      {i < 2 && <div style={{ width: 2, flex: 1, background: '#1e293b', marginTop: '4px' }} />}
                    </div>
                    <div style={{ paddingBottom: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <span style={{ fontWeight: 600, color: '#f1f5f9', fontSize: '0.9rem' }}>{edu.degree}</span>
                        <span className={`tag ${i === 0 ? 'tag-primary' : 'tag-secondary'}`} style={{ fontSize: '0.65rem' }}>
                          {edu.tag}
                        </span>
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>{edu.school}</div>
                      <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
                        <span style={{ color: '#64748b', fontSize: '0.78rem' }}>{edu.year}</span>
                        {edu.score && <span style={{ color: '#818cf8', fontSize: '0.78rem', fontWeight: 600 }}>{edu.score}</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
