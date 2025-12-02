// client/src/components/HeroCard.jsx

/*
  HeroCard Component
  ------------------
  Displays a single hero thumbnail card.
  - Shows hero image + name
  - Clickable: triggers onSelect(hero)
*/

const HeroCard = ({ hero, onSelect }) => (
  <div
    // When the card is clicked, select this hero
    onClick={() => onSelect(hero)}>
    {/* Hero Preview Image */}
    <img src={hero.img} alt={hero.name} />
  </div>
)

export default HeroCard
