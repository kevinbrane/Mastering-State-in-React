import React from 'react'
import '../Styles/Header.css'
import { useState } from 'react'

export default function Header({ toggleMainSection }) {

  const [showMainSection, setShowMainSection] = useState(false)

  const handleToggleMainSection = () => {
    setShowMainSection(!showMainSection)
    toggleMainSection()
  }

  return (
    <div>
      <header>
        <div className="title-wrapper">
          <h1>Big Community of<br />People Like You</h1>
        </div>
        <button className="toggle-section" onClick={handleToggleMainSection}>
        {showMainSection ? 'Hide section' : 'Show section'}
        </button>
      </header>
    </div>
  )
}
