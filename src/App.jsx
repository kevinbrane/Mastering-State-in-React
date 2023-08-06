import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CommunitySection from './Components/CommunitySection'
import JoinOurProgram from './Components/JoinOurProgram'
import Footer from './Components/Footer'
import PageNotFound from './Components/PageNotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CommunityUser from './Components/CommunityUser'

function App() {
  const [showCommunitySection, setShowCommunitySection] = useState(true)
  const [communityData, setCommunityData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/community')
      .then(response => {
        setCommunityData(response.data)
      })
      .catch(error => {
        console.log('Error getting data:', error)
      })
  }, [])

  const toggleCommunitySection = () => {
    setShowCommunitySection(!showCommunitySection)
  }

  return (
    <Router>
      <Routes>
        <Route path="/community" element={<>
          <Header toggleCommunitySection={toggleCommunitySection} showCommunitySection={showCommunitySection}  />
          <CommunitySection data={communityData}/>
        </>
        } />
        <Route path="/" element={<>
          <Header toggleCommunitySection={toggleCommunitySection} showCommunitySection={showCommunitySection} />
          {showCommunitySection && <CommunitySection data={communityData} />}
          <JoinOurProgram />
          <Footer />
        </>} />
        <Route path="/community/:id" element={<CommunityUser />}/>
        <Route path="/error" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
