import '../Styles/Header.css'

export default function Header({ toggleMainSection, showMainSection }) {

  const handleToggleMainSection = () => {
    toggleMainSection()
  }

  return (
    <header>
      <div className="title-wrapper">
        <h1>Big Community of People Like You</h1>
      </div>
      <button className="toggle-section" onClick={handleToggleMainSection}>
        {!showMainSection ? 'Show section' : 'Hide section'}
      </button>
    </header>
  )
}
