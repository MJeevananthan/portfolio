import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Experience', to: 'experience' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <div />

      {/* Desktop Links */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }} className="desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth
            duration={600}
            offset={-68}
            style={{
              padding: '8px 14px',
              color: '#94a3b8',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.2s',
              textDecoration: 'none',
            }}
            activeStyle={{ color: '#818cf8', background: 'rgba(99,102,241,0.1)' }}
            onMouseEnter={e => {
              e.target.style.color = '#f1f5f9'
              e.target.style.background = 'rgba(99,102,241,0.08)'
            }}
            onMouseLeave={e => {
              e.target.style.color = '#94a3b8'
              e.target.style.background = 'transparent'
            }}
          >
            {link.label}
          </Link>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}Jeevananthan_M_Resume_Updated.pdf`}
          download
          className="btn-primary"
          style={{ padding: '8px 20px', fontSize: '0.85rem', marginLeft: '8px' }}
        >
          Resume
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-menu-btn"
        style={{
          background: 'none',
          border: 'none',
          color: '#f1f5f9',
          fontSize: '1.6rem',
          cursor: 'pointer',
          display: 'none',
        }}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '68px',
              left: 0,
              right: 0,
              background: 'rgba(10,10,15,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(99,102,241,0.15)',
              padding: '16px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={600}
                offset={-68}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: '12px 16px',
                  color: '#94a3b8',
                  fontSize: '1rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  borderRadius: '8px',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}
