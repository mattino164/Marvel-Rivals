// src/components/MoreHeroButton.jsx

import React from 'react'
import '../../styles/MoreHeroButton.css'

/**
 * MoreHeroButton Component
 * ---------------------------------------------------
 * A decorative button positioned in the top-right corner.
 * - Triggered by clicking anywhere inside the container.
 * - Contains:
 *    1. Top line decoration
 *    2. Central hero button image
 *    3. Bottom line decoration
 *
 * Props:
 * - onOpen: function called when the button is clicked (opens hero panel/modal)
 */
const MoreHeroButton = ({ onOpen }) => {
  return (
    /* Container that handles click and positions the button */
    <div className="top-right-container" onClick={onOpen}>
      {/* Decorative line above the button */}
      <div className="button-line"></div>

      {/* Main clickable hero button image */}
      <img
        src="/assets/moreHeroButton.png"
        alt="More Hero"
        className="top-right-button"
      />

      {/* Decorative line below the button */}
      <div className="button-line-middle"></div>
    </div>
  )
}

export default MoreHeroButton
