// src/components/FloatingInfoNav.jsx

import React from 'react'
import '../../styles/FloatingInfoNav.css'

/*
  FloatingInfoNav
  ----------------
  A fixed navigation widget that appears on the right side of the screen.
  Shows a hero model + buttons that scroll smoothly to specific page sections.
  Also contains animated UI elements (fill bar + glow pulse).
*/
const FloatingInfoNav = ({ hero }) => {
  // Smoothly scroll to a section by its class name
  const scrollToSection = (className) => {
    const section = document.querySelector(`.${className}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // If no hero is selected, do not render anything
  if (!hero) return null

  return (
    <div className="floating-nav">
      <div className="nav-group">
        {/* Vertical animated bar that fills upward */}
        <div className="fill-bar"></div>

        {/* Soft glowing aura behind the bar */}
        <div className="pulse-glow"></div>

        {/* Main navigation container */}
        <div className="nav-bar">
          {/* Hero model image (optional per hero) */}
          {hero.images.navModel && (
            <img
              src={hero.images.navModel}
              alt={`${hero.name} nav model`}
              className="nav-hero-img"
            />
          )}

          {/* Scroll buttons (right-side navigation) */}
          <div className="nav-buttons">
            <button onClick={() => scrollToSection('ability-section')}>
              Ability
            </button>
            <button onClick={() => scrollToSection('lore-section')}>
              Lore
            </button>
          </div>

          {/* Small tab at the bottom of the nav bar */}
          <div className="nav-tab">More Info</div>
        </div>
      </div>
    </div>
  )
}

export default FloatingInfoNav
