import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import MainSection from './Components/MainSection'
import JoinOurProgram from './Components/JoinOurProgram'
import Footer from './Components/Footer'

function App() {

  const [showMainSection, setShowMainSection] = useState(true)

  const toggleMainSection = () => {
    setShowMainSection(!showMainSection)
  }

  return (
    <>
      <Header toggleMainSection={toggleMainSection} showMainSection={showMainSection} />
      {showMainSection && <MainSection />}
      <JoinOurProgram/>
      <Footer/>
    </>
  )
}

export default App
