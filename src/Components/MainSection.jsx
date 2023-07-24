import React from 'react'
import '../Styles/MainSection.css'

export default function MainSection() {
  return (
    <div className='main'>
      <div>
        <p className='main-section-title'>We're proud of our products, and we're really excited<br/>when we get feedback from our users</p>
      </div>
      <div className='cards-container'>
        <div className='card-component'>
          <img src="./public/1.png" alt="" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor.</p>
          <h5>MARY SMITH</h5>
          <p>Lead Designer at <br />Company Name</p>
        </div>
        <div className='card-component'>
          <img src="./public/2.png" alt="" />
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
          <h5>JOHN SMYTH</h5>
          <p>Creative Director in <br /> Company Name</p>
        </div>
        <div className='card-component'>
          <img src="./public/3.png" alt="" />
          <p>Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <h5>MARYANNE SMYTH</h5>
          <p>Buyer at <br /> Company Name</p>
        </div>
      </div>
    </div>
  )
}
