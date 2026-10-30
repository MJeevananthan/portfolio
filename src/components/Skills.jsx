import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Programming',
    emoji: '🐍',
    color: '#6366f1',
    skills: ['Python'],
  },
  {
    category: 'Artificial Intelligence',
    emoji: '🤖',
    color: '#06b6d4',
    skills: ['Machine Learning', 'Generative AI', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    category: 'Web Development',
    emoji: '🌐',
    color: '#f59e0b',
    skills: ['HTML', 'CSS', 'JavaScript', 'Flask'],
  },
  {
    category: 'Databases',
    emoji: '🗄️',
    color: '#10b981',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    category: 'Tools & DevOps',
    emoji: '🛠️',
    color: '#8b5cf6',
    skills: ['VS Code', 'Git', 'GitHub', 'Jupyter Notebook'],
  },
  {
    category: 'AI Tools',
    emoji: '✨',
    color: '#ef4444',
    skills: ['ChatGPT', 'Claude AI', 'Google Gemini', 'Groq'],
  },
  {
    category: 'Operating Systems',
    emoji: '💻',
    color: '#64748b',
    skills: ['Windows', 'Linux'],
  },
]

const techIcons = {
  Python: '🐍',
  'Machine Learning': '🧠',
  'Generative AI': '✨',
  'Scikit-learn': '📊',
  Pandas: '🐼',
  NumPy: '🔢',
  HTML: '🌐',
  CSS: '🎨',
  JavaScript: '⚡',
  Flask: '🌶️',
  MySQL: '🐬',
  MongoDB: '🍃',
  'VS Code': '💙',
  Git: '🔀',
  GitHub: '🐙',
  'Jupyter Notebook': '📒',
  ChatGPT: '🤖',
  'Claude AI': '🟣',
  'Google Gemini': '💎',
  Groq: '⚡',
  Windows: '🪟',
  Linux: '🐧',
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '100px 24px', background: 'rgba(99,102,241,0.02)' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ textAlign: 'center', color: '#6366f1', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '8px' }}>
            What I Know
          </p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="card"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: `linear-gradient(90deg, ${group.color}, transparent)`,
              }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
                <span style={{ fontSize: '1.4rem' }}>{group.emoji}</span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f1f5f9' }}>
                  {group.category}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: gi * 0.08 + si * 0.05 }}
                    whileHover={{ scale: 1.07, y: -2 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '6px 12px',
                      borderRadius: '100px',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      background: `${group.color}14`,
                      color: group.color,
                      border: `1px solid ${group.color}30`,
                      cursor: 'default',
                    }}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{techIcons[skill] || '•'}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
