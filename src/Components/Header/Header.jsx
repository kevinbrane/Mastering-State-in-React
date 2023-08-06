import { setVisibility } from '../../redux/visibilitySlice'
import { useDispatch } from 'react-redux';
import '../../styles/Header.css'

export default function Header({ toggleCommunitySection, showCommunitySection }) {
  const dispatch = useDispatch();

  const handleToggleCommunitySection = () => {
    dispatch(setVisibility(!showCommunitySection))
    toggleCommunitySection()
  }

  return (
    <header>
      <div className="title-wrapper">
        <h1>Big Community of People Like You</h1>
      </div>
      <button className="toggle-section" onClick={handleToggleCommunitySection}>
        {!toggleCommunitySection ? 'Show section' : 'Hide section'}
      </button>
    </header>
  )
}
