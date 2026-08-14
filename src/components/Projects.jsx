import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'AI-Based Disease Prediction & Medical Assistant',
    description:
      'A full-stack ML web application that predicts probable diseases based on user-input symptoms, integrated with a Groq LLM-powered AI chatbot for real-time healthcare guidance.',
    highlights: [
      'ML model trained on symptom datasets for reliable disease classification',
      'Flask web app with interactive front-end for symptom input & predictions',
      'Groq LLM chatbot for medicine descriptions, dosage info & precautions',
      'MySQL storage for user queries, prediction history & chatbot logs',
    ],
    tech: ['Python', 'Flask', 'Machine Learning', 'Groq LLM', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: '#6366f1',
    icon: '🏥',
    github: 'https://github.com/MJeevananthan',
  },
  {
    title: 'College Complaint Priority System',
    description:
      'A smart complaint management platform where student complaints are automatically classified by urgency using ML, with a full admin dashboard for priority-based management.',
    highlights: [
      'ML model auto-classifies complaint urgency from web form submissions',
      'MySQL schema stores complaint details, categories & priority levels',
      'Admin dashboard to view, filter & update complaints by priority/status',
      'Real-time complaint tracking from submission to resolution',
    ],
    tech: ['Python', 'Flask', 'Machine Learning', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: '#06b6d4',
    icon: '📋',
    github: 'https://github.com/MJeevananthan',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 24px' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ textAlign: 'center', color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            What I've Built
          </p>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Real-world applications powered by AI & full-stack development</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ borderColor: `${project.color}50`, boxShadow: `0 0 40px ${project.color}15`, y: -4 }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {/* Left accent bar */}
                <div style={{
                  width: '6px',
                  background: `linear-gradient(180deg, ${project.color}, ${project.color}44)`,
                  flexShrink: 0,
                }} />

                {/* Content */}
                <div style={{ flex: 1, padding: '32px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{
                        width: 50, height: 50, borderRadius: '14px',
                        background: `${project.color}18`,
                        border: `1px solid ${project.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.6rem', flexShrink: 0,
                      }}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f1f5f9', lineHeight: 1.3 }}>
                          {project.title}
                        </h3>
                        <span className="tag" style={{
                          background: `${project.color}15`,
                          color: project.color,
                          border: `1px solid ${project.color}25`,
                          marginTop: '6px',
                          display: 'inline-block',
                        }}>
                          AI + Full Stack
                        </span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        style={{
                          width: 40, height: 40, borderRadius: '10px',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#94a3b8', textDecoration: 'none',
                        }}
                      >
                        <FaGithub size={17} />
                      </motion.a>
                    </div>
                  </div>

                  <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '20px', fontSize: '0.95rem' }}>
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {project.highlights.map((h, hi) => (
                      <motion.div
                        key={hi}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + hi * 0.07 }}
                        style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                      >
                        <span style={{ color: project.color, marginTop: '3px', fontSize: '0.8rem', flexShrink: 0 }}>▸</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.5 }}>{h}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          padding: '4px 12px',
                          borderRadius: '100px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          background: 'rgba(255,255,255,0.04)',
                          color: '#94a3b8',
                          border: '1px solid rgba(255,255,255,0.08)',
                          fontFamily: 'Fira Code, monospace',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '50px' }}
        >
          <p style={{ color: '#64748b', marginBottom: '18px' }}>Want to see more of my work?</p>
          <a
            href="https://github.com/MJeevananthan"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            <FaGithub size={16} /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  )
}
