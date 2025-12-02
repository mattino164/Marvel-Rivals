// src/components/BackToTop.jsx

import React, { useState, useEffect } from 'react'
import '../../styles/BackToTop.css'

/**
 * BackToTop Component
 * ---------------------------------------------------
 * Handles:
 * 1. Growing vertical line that tracks scroll progress
 *    between the FloatingInfoNav and the Ability Section.
 * 2. Back-to-top button that appears once the user scrolls
 *    past the ability section.
 */
const BackToTop = () => {
  // Pixel height of the vertical progress line
  const [lineHeightPx, setLineHeightPx] = useState(0)

  // Controls visibility of the back-to-top button
  const [showButton, setShowButton] = useState(false)

  /**
   * Scroll listener:
   * Calculates the dynamic height of the vertical line,
   * and determines when the back-to-top button becomes visible.
   */
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('.floating-nav')
      const abilitySection = document.querySelector('.ability-section')

      // Prevent calculations if essential elements aren't available
      if (!nav || !abilitySection) return

      const scrollY = window.scrollY
      const navBottom = nav.offsetTop + nav.offsetHeight
      const abilityTop = abilitySection.offsetTop

      // Max allowed line height — avoids overshooting the section
      const maxLineHeight = abilityTop - navBottom

      // Only extend the line after scrolling past nav bottom
      let newHeight = scrollY > navBottom ? scrollY - navBottom : 0

      // Clamp height so it never exceeds the ability section position
      newHeight = Math.min(newHeight, maxLineHeight)

      setLineHeightPx(newHeight)

      // Show button only after reaching the ability section
      setShowButton(scrollY >= abilityTop)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Smoothly scroll to the top of the page.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Vertical scroll progress line (height updated dynamically) */}
      <div
        className="back-to-top-line"
        style={{ height: `${lineHeightPx}px` }}></div>

      {/* Back-to-top button (only shown after passing ability section) */}
      {showButton && (
        <div className="back-to-top" onClick={scrollToTop} title="Back to top">
          ^
        </div>
      )}
    </>
  )
}

export default BackToTop
