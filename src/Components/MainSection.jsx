import { useEffect, useState } from 'react'
import '../Styles/MainSection.css'

export default function MainSection() {
  const [ communityData, setCommunityData ] = useState()

  useEffect(() => {
    fetch('http://localhost:3000/community')
      .then((res) => res.json())
      .then((result) => setCommunityData(result))
  }, [])

  return (
    <div className='main'>
      <p className='main-section-title'>{communityData?.description}</p>
      <div className='cards-container'>
        {communityData?.testimonies.map((item) => (
          <div className='card-component' key={item.id}>
            <img src={item?.imgUrl} alt="" />
            <p>{item?.testimony}</p>
            <h5>{item?.name}</h5>
            <span>{item?.position}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
