import React from 'react'
import "./Footer.css"
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-page flex row'>
       <div className='footer-main flex row'>
        <div className='footer-inner flex col'>
          <div className='footer-logo-div flex row'>
                <img src="./images/ADlogo.png" className='footer-logo' alt='logo'/>
                <div className='footer-logo-text-div col'>
                  <p className='footer-logo-text-1'>ART WITH</p>
                  <p className='footer-logo-text-2'>DIVYANSHI</p>
                </div>
          </div>
          <div className='footer-text1'>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum </p>
          </div>
          <div className='footer-decorate-div flex row'>
            <div className='footer-decorate-line'></div>
            <div className='footer-decorate-box'></div>
            <div className='footer-decorate-line'></div>
          </div>
          <div className='footer-address-div'><h6>Add- At Jyoti Jewllers, Chowk, Kotwali Road, Fatehpur, Uttar Pradesh.</h6></div>
          <div className='footer-contact-div'><h6>+01 2345 6789 12 <span> | </span> +01 2345 6789 12</h6></div>
          <div className='footer-social-icons-div flex row'>
            <div className='footer-facebook-div footer-icon'>
              <FaFacebook/>
            </div>
            <div className='footer-insta-div footer-icon'><GrInstagram/></div>
            <div className='footer-linkedin-div footer-icon'><FaLinkedin/></div>
            <div className='footer-youtube-div footer-icon'><FaYoutube/></div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer;