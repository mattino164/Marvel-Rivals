// client/src/pages/HeroShowcase.jsx

import React, { useState } from 'react'

// UI / Layout Components
import MoreHeroButton from '../components/UI/MoreHeroButton'
import BackToTop from '../components/UI/BackToTop'
import FloatingInfoNav from '../components/hero/FloatingInfoNav'
import HeroSection from '../components/hero/HeroSection'
import HeroAbilities from '../components/hero/HeroAbilities'
import LoreSection from '../components/hero/LoreSection'
import HeroesSelect from '../components/hero/HeroSelect'
import Footer from '../components/layout/Footer'

// Import hero data JSON
import heroData from '../data/heroes.json'

/**
 * HeroShowcase Page
 * ---------------------------------------------------
 * Main page that displays the hero showcase:
 * - HeroSection (background + model + name)
 * - HeroAbilities (base stats, normal attacks, abilities, team-ups)
 * - LoreSection (alt name + lore text + image)
 * - Floating navigation + Back-to-Top line
 * - MoreHeroButton opens HeroesSelect modal
 *
 * State:
 * - heroSelectOpen: controls visibility of hero selection modal
 * - selectedHero: currently selected hero object
 */
export default function HeroShowcase() {
  const [heroSelectOpen, setHeroSelectOpen] = useState(false)
  const [selectedHero, setSelectedHero] = useState(heroData[0]) // Default to first hero

  /**
   * Handle selecting a hero from the HeroesSelect modal
   * @param {number} id - ID of the hero to select
   */
  const handleSelectHero = (id) => {
    const hero = heroData.find((h) => h.id === id)
    setSelectedHero(hero)

    // Close the modal and scroll to top for smooth transition
    setHeroSelectOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      {/* Button in top-right corner to open hero selection modal */}
      <MoreHeroButton onOpen={() => setHeroSelectOpen(true)} />

      {/* Floating navigation and back-to-top line (hidden when modal is open) */}
      {!heroSelectOpen && (
        <div className="nav-line-wrapper">
          <FloatingInfoNav hero={selectedHero} />
          <BackToTop />
        </div>
      )}

      {/* Main content sections for the currently selected hero */}
      <HeroSection hero={selectedHero} />
      <HeroAbilities hero={selectedHero} />
      <LoreSection hero={selectedHero} />

      {/* Footer */}
      <Footer />

      {/* Hero selection modal */}
      {heroSelectOpen && (
        <HeroesSelect
          onClose={() => setHeroSelectOpen(false)}
          onSelectHero={handleSelectHero}
        />
      )}
    </>
  )
}
