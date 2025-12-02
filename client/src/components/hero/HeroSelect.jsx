// src/components/HeroSelect.jsx

import React from 'react'
import '../../styles/HeroSelect.css'

/*
  HeroesSelect Component
  ----------------------
  Full-screen modal that displays a grid of hero cards.
  - Darkened overlay behind the panel
  - Scrollable hero list
  - Sticky header image
  - Each hero card triggers onSelectHero(id)
*/

export default function HeroesSelect({ onClose, onSelectHero }) {
  // Static list of heroes shown in the selection grid
  const heroes = [
    {
      name: 'BLACK PANTHER',
      image: '/assets/heroCards/blackPanther-Card.png',
      id: 1,
    },
    { name: 'BLADE', image: '/assets/heroCards/bladeCard.png', id: 2 },
    {
      name: 'ROCKET RACCOON',
      image: '/assets/heroCards/rocketCard.png',
      id: 3,
    },
    { name: 'THOR', image: '/assets/heroCards/thorCard.png', id: 4 },
    { name: 'ULTRON', image: '/assets/heroCards/ultronCard.png', id: 5 },
    { name: 'VENOM', image: '/assets/heroCards/venomCard.png', id: 6 },
  ]

  return (
    // Dark translucent overlay behind the hero-select panel
    <div className="heroes-select-overlay">
      {/* Main container for the hero selection UI */}
      <div className="heroes-select">
        {/* Large decorative transparent background text */}
        <div className="bg-text">
          HERO
          <br />
          SELECT
        </div>

        {/* Modal close button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Sticky header image that remains visible while scrolling */}
        <div className="header-wrapper">
          <img
            src="/assets/hero-select-header.png"
            alt="Heroes Select"
            className="header-image"
          />
        </div>

        {/* Scrollable area that contains the hero grid */}
        <div className="heroes-scroll-area">
          {/* Grid of selectable hero cards */}
          <div className="heroes-grid">
            {heroes.map((hero) => (
              <div
                key={hero.id}
                className="hero-card"
                onClick={() => onSelectHero(hero.id)}>
                {/* Preview image of the hero */}
                <img src={hero.image} alt={hero.name} className="hero-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
