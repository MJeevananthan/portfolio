import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const certs = [
  {
    title: 'Google AI Essentials',
    issuer: 'Google (Coursera)',
    icon: '🔵',
    color: '#4285f4',
    description: 'Foundations of AI and responsible AI practices from Google.',
  },
  {
    title: 'ChatGPT for Advanced Data Analysis',
    issuer: 'Vanderbilt University (Coursera)',
    icon: '📊',
    color: '#6366f1',
    description: 'Advanced data analysis techniques using ChatGPT and AI tools.',
  },
  {
    title: 'Generative AI',
    issuer: 'Microsoft',
    icon: '🪟',
    color: '#00a4ef',
    description: 'Core concepts and applications of Generative AI by Microsoft.',
  },
  {
    title: 'Python Course Completion',
    issuer: 'Cybernaut',
    icon: '🐍',
    color: '#f59e0b',
    description: 'Comprehensive Python programming skills and best practices.',
  },
  {
    title: 'Web Development using Vibecode',
    issuer: 'Sparked Academy (Workshop)',
    icon: '🌐',
    color: '#10b981',
    description: 'Hands-on web development workshop using modern AI-assisted coding tools.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: '100px 24px' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ textAlign: 'center', color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Credentials
          </p>
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Professional certifications and achievements</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${cert.color}18` }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top gradient line */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${cert.color}, transparent)`,
              }} />

              {/* Background glow */}
              <div style={{
                position: 'absolute', top: -30, right: -30, width: 120, height: 120,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${cert.color}10 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '14px',
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', flexShrink: 0,
                }}>
                  {cert.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.4, marginBottom: '4px' }}>
                    {cert.title}
                  </h3>
                  <span style={{ color: cert.color, fontSize: '0.8rem', fontWeight: 600 }}>
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {cert.description}
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' }}>
                <FaCertificate size={12} style={{ color: cert.color }} />
                <span style={{ color: '#64748b', fontSize: '0.75rem' }}>Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
