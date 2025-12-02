// client/src/components/HeroModal.jsx

import { motion } from 'framer-motion'

/*
  HeroModal Component
  -------------------
  A centered modal that displays hero details when a hero card is clicked.
  Includes:
    - Fade-in / fade-out animation via Framer Motion
    - Hero image, role, difficulty
    - List of abilities
    - Lore section
    - Close button (top-right)

  The backdrop blocks interaction with the rest of the page.
*/

const HeroModal = ({ hero, onClose }) => (
  <motion.div
    /* Fade-in and fade-out animation */
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    /* Full-screen backdrop */
    className="
      fixed inset-0 
      bg-black/70 
      backdrop-blur-sm 
      flex items-center justify-center 
      z-50
    ">
    {/* Main modal container */}
    <div className="bg-slate-900 p-8 rounded-2xl max-w-3xl w-full text-white relative">
      {/* Close button (top right corner) */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-white">
        ✕
      </button>

      {/* Modal content layout */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Hero portrait image */}
        <img src={hero.img} alt={hero.name} className="w-64 rounded-xl" />

        {/* Right-hand info panel */}
        <div>
          {/* Hero Name */}
          <h2 className="text-3xl font-bold mb-2">{hero.name}</h2>

          {/* Role + Difficulty */}
          <p className="text-sm text-gray-400 mb-4">
            {hero.role} — {hero.difficulty}
          </p>

          {/* Abilities List */}
          <h3 className="font-semibold mb-2">Abilities</h3>
          <ul className="space-y-1 mb-4">
            {hero.abilities.map((a, i) => (
              <li key={i}>
                <span className="font-medium">{a.name}:</span> {a.desc}
              </li>
            ))}
          </ul>

          {/* Lore Text */}
          <h3 className="font-semibold mb-2">Lore</h3>
          <p>{hero.lore}</p>
        </div>
      </div>
    </div>
  </motion.div>
)

export default HeroModal
