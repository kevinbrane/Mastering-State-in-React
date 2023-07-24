import React from 'react'
import '../Styles/JoinOurProgram.css'

export default function JoinOurProgram() {
  return (
    <div>
      <div className='joinOurProgram-container'>
        <h1 className='joinOurProgram-title'>Join Our Program</h1>
        <p className='joinOurProgram-parraph'>Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.</p>
        <div className='submit-container'>
          <input type="text" name="" id="" placeholder='Email'/>
          <button type="submit" className='subscribe-button'>SUBSCRIBE</button>
        </div>
      </div>
      <footer class="footer">
        <div class="footer__project-column">
            <img src="./public/[PLACEHOLDER LOGO].png" alt="logo1" class="small-logo"/>
            <label class="footer__project-2">PROJECT</label>
        </div>
        <span class="direction_column">123 Street,<br/> Anytown, USA 12345</span>
        <span class="website_column">hello@website.com </span>
        <span class="rights_column">© 2021 Project. All rights reserved</span>
    </footer>
    </div>
  )
}
