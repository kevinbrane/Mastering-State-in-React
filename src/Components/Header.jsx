import React from 'react'
import '../Styles/Header.css'

export default function Header() {
  return (
    <div>
      <header>
        <div className="title-wrapper">
          <h1>Big Community of<br />People Like You</h1>
        </div>
        <button className="toggle-section">Show section</button>
      </header>
    </div>
  )
}
