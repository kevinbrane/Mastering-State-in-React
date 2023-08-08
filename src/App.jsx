import { useState, useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import CommunitySection from '../src/Components/CommunitySection/CommunitySection'
import JoinOurProgram from '../src/Components/JoinOurProgram/JoinOurProgram'
import Footer from '../src/Components/Footer/Footer'
import PageNotFound from '../src/Components/PageNotFound/PageNotFound'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import CommunityUser from '../src/Components/CommunityUser/CommunityUser'

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
