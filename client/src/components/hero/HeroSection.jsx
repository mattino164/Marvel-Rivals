// src/components/HeroSection.jsx

import React, { useEffect, useRef } from 'react'
import HeroModelDisplay from './HeroModelDisplay'
import { resolver } from '../../Resolver'
import '../../styles/HeroSection.css'

/*
  HeroSection Component
  ---------------------
  Displays the main hero showcase section:
    - Dynamic background image
    - Interactive hero model (PNG → animated GIF)
    - Hero title image
    - Role, name animation, alt-name, and intro

  Includes a "cyber scrambling text" effect for the hero name,
  handled by the external `resolver` utility.
*/

const HeroSection = ({ hero }) => {
  const headerRef = useRef(null) // Reference to animated hero name element

  useEffect(() => {
    // Prevent errors if hero isn't ready or element is missing
    if (!headerRef.current || !hero?.name) return

    /*
      Text Scramble Animation
      - ResolveString: final text to reveal
      - timeout: speed of scrambling
      - iterations: how many random cycles per character
      - characters: pool of symbols used in scrambling animation
    */
    const options = {
      element: headerRef.current,
      resolveString: hero.name,
      offset: 0,
      timeout: 40,
      iterations: 10,
      characters: [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'x',
        'y',
        'z',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '#',
        '%',
        '&',
        '-',
        '+',
        '_',
        '?',
        '/',
        '\\',
        '=',
      ],
    }

    // Start scramble-animation on mount or when hero changes
    resolver.resolve(options)
  }, [hero])

  // Don't render the section until hero data is available
  if (!hero) return null

  return (
    <section className="hero">
      {/* Overlay background tint/filter */}
      <div className="hero-bg"></div>

      {/* Dynamic hero background image */}
      <img
        src={hero.images.background}
        alt={`${hero.name} background`}
        className="hero-bg-image"
      />

      {/* Character Model (PNG → GIF on hover) */}
      <HeroModelDisplay model={hero.images.model} gif={hero.images.gif} />

      {/* Hero content block (text + title) */}
      <div className="hero-content">
        {/* Header: Title Image + Role + Animated Name */}
        <div className="hero-header">
          {/* Hero title image (logo-style graphic) */}
          <div className="hero-header-img">
            <img src={hero.images.title} alt={`${hero.name} title`} />
          </div>

          <div className="hero-header-text">
            {/* Hero Class / Role (Duelist, Tank, Support, etc.) */}
            <h2 className="hero-class">{hero.role}</h2>

            {/* Hero Name (scrambled text effect targets this) */}
            <h1 className="hero-header-name" ref={headerRef}>
              {hero.name}
            </h1>
          </div>
        </div>

        {/* Body: Alt Name + Summary */}
        <div className="hero-body">
          {/* Alt-name / Real name */}
          <h1 className="hero-body-name">{hero['alt-name']}</h1>

          {/* Hero introduction paragraph */}
          <p className="hero-summary">{hero.intro}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
