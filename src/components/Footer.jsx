import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { Link } from 'react-scroll'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      padding: '40px 24px',
      borderTop: '1px solid rgba(99,102,241,0.1)',
      background: 'rgba(10,10,15,0.8)',
    }}>
      <div className="section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          {/* Logo */}
          <span style={{
            fontSize: '1.2rem', fontWeight: 800,
            background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            &lt;Jeevan /&gt;
          </span>

          {/* Nav links */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={600}
                offset={-68}
                style={{
                  color: '#64748b', fontSize: '0.85rem', cursor: 'pointer',
                  textTransform: 'capitalize', textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#818cf8'}
                onMouseLeave={e => e.target.style.color = '#64748b'}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { icon: <FaGithub size={17} />, href: 'https://github.com/MJeevananthan' },
              { icon: <FaLinkedin size={17} />, href: 'https://linkedin.com/in/jeevananthan-m-76b236349' },
              { icon: <FaEnvelope size={17} />, href: 'mailto:jeevananthanm551@gmail.com' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                style={{
                  width: 36, height: 36, borderRadius: '8px',
                  background: 'rgba(99,102,241,0.08)',
                  border: '1px solid rgba(99,102,241,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#818cf8'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.04)',
          marginTop: '28px', paddingTop: '20px',
          textAlign: 'center',
          color: '#475569', fontSize: '0.82rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
        }}>
          <span>© {year} Jeevananthan M. Built with</span>
          <FaHeart size={11} style={{ color: '#ef4444' }} />
          <span>using React & Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
