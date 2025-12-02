// src/components/HeroModelDisplay.jsx

import { useState } from 'react'

/*
  HeroModelDisplay Component
  --------------------------
  Displays a static hero model (PNG) that switches to an animated GIF
  when the user hovers over the image.

  Behavior:
    - PNG is always visible.
    - GIF is layered on top but hidden by default.
    - On hover → GIF fades in (CSS handles animation).
    - On mouse leave → GIF fades out.
*/

export default function HeroModelDisplay({ model, gif }) {
  // Track whether the model is currently being hovered
  const [hover, setHover] = useState(false)

  return (
    <div
      className="hero-model-wrapper"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      {/* Static PNG model (always visible) */}
      <img src={model} className="hero-model-img base" alt="Hero" />

      {/* Animated GIF model (only visible on hover) */}
      <img
        src={gif}
        alt="Hero animated"
        className={`
          hero-model-img gif
          ${hover ? 'show' : ''}
        `}
      />
    </div>
  )
}
