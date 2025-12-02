// src/components/HeroAbilities.jsx

import React, { useState, useEffect } from 'react'
import '../../styles/HeroAbilities.css'

/*
  HeroAbilities Component
  -----------------------
  Displays all ability categories for a selected hero:
    - Base stats
    - Normal attacks
    - Abilities
    - Team-up abilities

  The left column lists selectable abilities.
  The right column shows detailed stats of whichever ability is active.
*/
export default function HeroAbilities({ hero }) {
  // Track the currently selected ability or stat block
  const [activeStats, setActiveStats] = useState(null)

  // Categorize ability data for cleaner rendering
  const baseStats = hero.abilities.find((a) => a.type === 'BASE')
  const normalAttacks = hero.abilities.filter((a) => a.type === 'NORMAL')
  const abilities = hero.abilities.filter((a) => a.type === 'ABILITY')

  // Team-up abilities are nested inside "team-abilities"
  const teamUps =
    hero.abilities.find((a) => a['team-abilities'])?.['team-abilities'] || []

  // Reset the active stats whenever the hero changes
  // Ensures UI always opens with BASE STATS selected
  useEffect(() => {
    setActiveStats(baseStats)
  }, [baseStats])

  // If no hero is provided, avoid rendering the entire component
  if (!hero) return null

  return (
    <div className="ability-section">
      <h1 className="abilities-title">ABILITIES</h1>

      {/* -----------------------------------------
          HERO HEADER CARD
          Displays hero image + name + BASE STATS button
      ------------------------------------------- */}
      <div
        className="hero-header-ability"
        style={{
          backgroundImage: `url(${hero.images.abilityCard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="hero-info">
          <h2 className="hero-name-ability">{hero.name}</h2>
        </div>

        {/* Switches the right panel back to BASE STATS */}
        <button
          className="base-stats-btn"
          onClick={() => setActiveStats(baseStats)}>
          BASE STATS ➤
        </button>
      </div>

      {/* -----------------------------------------
          MAIN CONTENT AREA
          Left = ability categories
          Right = active ability / stats info
      ------------------------------------------- */}
      <div className="content-wrapper">
        {/* ===== LEFT SIDE — Ability List ===== */}
        <div className="left-side">
          {/* NORMAL ATTACKS */}
          <div className="section">
            <div className="section-title">NORMAL ATTACK</div>

            {normalAttacks.map((atk, index) => (
              <div
                key={index}
                className="section-row"
                onClick={() => setActiveStats(atk)}>
                {/* Input indicator (letter, mouse icon, keybind image, etc.) */}
                {typeof atk.input === 'string' ? (
                  <label className="keybind">{atk.input}</label>
                ) : (
                  <img
                    src={atk.input.img}
                    alt="Input Icon"
                    className="keybind-icon"
                  />
                )}

                {/* Ability icon pulled from hero.abilityIcons */}
                <img
                  src={hero.abilityIcons[`normal${index + 1}`]}
                  alt={atk.name}
                  className="icon-big"
                />

                <span className="ability-name">{atk.name}</span>
              </div>
            ))}
          </div>

          {/* ABILITIES */}
          <div className="section">
            <div className="section-title">ABILITIES</div>

            {abilities.map((ab, index) => (
              <div
                key={index}
                className="section-row"
                onClick={() => setActiveStats(ab)}>
                {/* Keybind / click icon */}
                {typeof ab.input === 'string' ? (
                  <label className="keybind">{ab.input}</label>
                ) : (
                  <img
                    src={ab.input.img}
                    alt="Input Icon"
                    className="keybind-icon"
                  />
                )}

                {/* Ability icon */}
                <img
                  src={hero.abilityIcons[`ability${index + 1}`]}
                  alt={ab.name}
                  className="icon"
                />

                <span className="ability-name">{ab.name}</span>
              </div>
            ))}
          </div>

          {/* TEAM-UP ABILITIES */}
          <div className="section">
            <div className="section-title">TEAM-UP ABILITIES</div>

            {teamUps.map((team, index) => (
              <div
                key={index}
                className="section-row"
                onClick={() => setActiveStats(team)}>
                {/* Keybind */}
                {typeof team.input === 'string' ? (
                  <label className="keybind">{team.input}</label>
                ) : (
                  <img
                    src={team.input.img}
                    alt="Input Icon"
                    className="keybind-icon"
                  />
                )}

                {/* Ability icon */}
                <img
                  src={hero.abilityIcons[`teamAbility${index + 1}`]}
                  alt={team.name}
                  className="icon"
                />

                <span className="ability-name">{team.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== RIGHT SIDE — Ability Details / Stats ===== */}
        <div className="right-side">
          {/* Ability or Stat Block Title */}
          <h2 className="base-stats-title">{activeStats?.name}</h2>

          {/* Stat list (HP, Damage, Cooldown, etc.) */}
          {activeStats?.stats?.map((stat, index) => (
            <div key={index} className="stat-row">
              <span className="stat-label">
                <span>{stat.title}</span>
              </span>

              <span className="stat-value">
                {typeof stat.stat === 'string' ? (
                  stat.stat
                ) : stat.stat.img ? (
                  <img
                    src={stat.stat.img}
                    alt={stat.title}
                    className="keybind-icon"
                  />
                ) : null}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
