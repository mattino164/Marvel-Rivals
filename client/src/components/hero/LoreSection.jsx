// src/components/LoreSection.jsx

import React from 'react'
import '../../styles/LoreSection.css'

export default function LoreSection({ hero }) {
  // If no hero is selected, don't render anything
  if (!hero) return null

  return (
    /* Main container for the Lore section */
    <section className="lore-section">
      {/* LEFT SIDE: Text content */}
      <div className="lore-left">
        {/* Section title */}
        <h1 className="lore-title">LORE</h1>

        {/* Hero’s alternative name (ex: “ERIC BROOKS”) */}
        <div className="hero-lore-name">{hero['alt-name']}</div>

        {/* Narrative lore text */}
        <p className="lore-text">{hero.lore}</p>
      </div>

      {/* RIGHT SIDE: Hero artwork/model */}
      <div className="lore-right">
        <img
          src={hero.images.loreModel}
          alt={`${hero.name} Lore Artwork`}
          className="lore-image"
        />
      </div>
    </section>
  )
}
