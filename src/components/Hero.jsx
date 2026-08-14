import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

function TypewriterText() {
  const roles = [
    'AI & Data Science Aspirant',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Generative AI Enthusiast',
  ]
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    let timeout
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, deleting ? 40 : 80)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <span style={{ fontSize: '1.2rem', fontWeight: 600, color: '#6366f1', fontFamily: 'Fira Code, monospace' }}>
      {text}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ color: '#06b6d4' }}
      >|</motion.span>
    </span>
  )
}

export default function Hero() {
  const socials = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/MJeevananthan', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com/in/jeevananthan-m-76b236349', label: 'LinkedIn' },
    { icon: <FaEnvelope size={20} />, href: 'mailto:jeevananthanm551@gmail.com', label: 'Email' },
    { icon: <FaPhone size={18} />, href: 'tel:+916374729792', label: 'Phone' },
  ]

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 24px',
      }}
    >
      {/* Background blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '15%', left: '5%', width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '40%', right: '5%', width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }}
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, 15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', bottom: '10%', left: '30%', width: 350, height: 350,
            background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(40px)',
          }}
        />
      </div>

      <div
        className="section-container"
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        {/* Left: Text */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '580px' }}>
          <motion.div {...fadeUp(0.1)}>
            <span className="tag tag-primary" style={{ marginBottom: '20px', display: 'inline-block' }}>
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
            }}
          >
            Hi, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Jeevananthan M
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.3)} style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
            <TypewriterText />
          </motion.div>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              color: '#94a3b8',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginTop: '20px',
              marginBottom: '36px',
            }}
          >
            B.Tech AI & Data Science aspirant passionate about building intelligent software solutions.
            Skilled in Machine Learning, Generative AI, and Full-Stack Web Development.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '44px' }}
          >
            <Link to="projects" smooth duration={600} offset={-68}>
              <button className="btn-primary">
                View Projects <HiArrowDown size={16} />
              </button>
            </Link>
            <Link to="contact" smooth duration={600} offset={-68}>
              <button className="btn-outline">Get In Touch</button>
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            style={{ display: 'flex', gap: '16px', alignItems: 'center' }}
          >
            <span style={{ color: '#64748b', fontSize: '0.85rem' }}>Find me on</span>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                title={s.label}
                style={{
                  width: 42, height: 42,
                  borderRadius: '10px',
                  background: 'rgba(99,102,241,0.1)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#818cf8',
                  textDecoration: 'none',
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          style={{ flex: '0 0 auto', position: 'relative' }}
        >
          <div style={{ position: 'relative', width: 300, height: 300 }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute', inset: -6,
                borderRadius: '50%',
                background: 'conic-gradient(from 0deg, #6366f1, #06b6d4, #f59e0b, #6366f1)',
              }}
            />
            <div style={{
              position: 'absolute', inset: -3,
              borderRadius: '50%',
              background: 'var(--bg-dark)',
            }} />
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Jeevananthan M"
              style={{
                position: 'relative',
                width: '100%', height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                zIndex: 1,
                border: '4px solid var(--bg-dark)',
              }}
            />
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', bottom: 10, right: -20, zIndex: 2,
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'white',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(99,102,241,0.4)',
              }}
            >
              🤖 AI & ML
            </motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute', top: 20, left: -24, zIndex: 2,
                background: 'rgba(22,22,31,0.95)',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#06b6d4',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 24px rgba(6,182,212,0.15)',
              }}
            >
              💻 Full Stack
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: '36px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: '#64748b', fontSize: '0.75rem',
        }}
      >
        <span>Scroll down</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <HiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
