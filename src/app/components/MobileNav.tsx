'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <button 
        className="mobile-menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        ☰
      </button>

      <div 
        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-close"
          onClick={closeMenu}
          aria-label="Close mobile menu"
        >
          ×
        </button>
        
        <Link href="/" className="nav-link" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className="nav-link" onClick={closeMenu}>
          About
        </Link>
        <Link href="/products" className="nav-link" onClick={closeMenu}>
          Products
        </Link>
        <Link href="/contact" className="nav-link" onClick={closeMenu}>
          Contact
        </Link>
      </div>
    </>
  )
}