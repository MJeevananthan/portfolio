import { motion } from 'framer-motion'
import { FaBriefcase } from 'react-icons/fa'

const experiences = [
  {
    role: 'Artificial Intelligence Intern',
    company: 'One Yes Infotech',
    type: 'Internship',
    color: '#6366f1',
    icon: '🤖',
    points: [
      'Developed and implemented Machine Learning models using Python, including data preprocessing, model training, and performance evaluation for AI applications.',
      'Gained hands-on experience in Generative AI, Large Language Models (LLMs), Prompt Engineering, and AI-powered application development.',
    ],
    skills: ['Python', 'Machine Learning', 'LLMs', 'Prompt Engineering', 'Generative AI'],
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Elysium Private Limited',
    type: 'Internship',
    color: '#06b6d4',
    icon: '💻',
    points: [
      'Learned and applied front-end development using HTML, CSS, and JavaScript to build responsive web pages.',
      'Gained hands-on experience in back-end development with Flask, including routing, API creation, and database integration.',
      'Worked with MySQL/MongoDB for data storage and learned to connect databases with web applications.',
      'Understood the complete workflow of building, testing, and deploying full-stack web applications.',
    ],
    skills: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MySQL', 'MongoDB'],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 24px', background: 'rgba(99,102,241,0.02)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ textAlign: 'center', color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            Work Experience
          </p>
          <h2 className="section-title">Internships</h2>
          <p className="section-subtitle">Hands-on experience in AI and full-stack development</p>
        </motion.div>

        <div style={{ position: 'relative', maxWidth: '780px', margin: '0 auto' }}>
          {/* Center timeline line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #6366f1, #06b6d4, transparent)',
            borderRadius: '2px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', paddingLeft: '70px' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 + 0.2 }}
                  style={{
                    position: 'absolute',
                    left: '-52px',
                    top: '24px',
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: `${exp.color}18`,
                    border: `2px solid ${exp.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.2rem',
                    zIndex: 1,
                  }}
                >
                  {exp.icon}
                </motion.div>

                <div
                  className="card"
                  style={{ position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: `linear-gradient(90deg, ${exp.color}, transparent)`,
                  }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f1f5f9', marginBottom: '4px' }}>
                        {exp.role}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ color: exp.color, fontWeight: 600, fontSize: '0.9rem' }}>
                          {exp.company}
                        </span>
                        <span style={{
                          padding: '2px 10px', borderRadius: '100px',
                          background: `${exp.color}15`, color: exp.color,
                          fontSize: '0.72rem', fontWeight: 600,
                          border: `1px solid ${exp.color}25`,
                        }}>
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      color: '#64748b', fontSize: '0.82rem',
                    }}>
                      <FaBriefcase size={12} />
                      <span>Intern</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {exp.points.map((pt, pi) => (
                      <div key={pi} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ color: exp.color, marginTop: '4px', fontSize: '0.8rem', flexShrink: 0 }}>▸</span>
                        <span style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65 }}>{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.skills.map((s) => (
                      <span key={s} style={{
                        padding: '4px 12px', borderRadius: '100px',
                        fontSize: '0.75rem', fontWeight: 600,
                        background: `${exp.color}10`, color: exp.color,
                        border: `1px solid ${exp.color}25`,
                        fontFamily: 'Fira Code, monospace',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
