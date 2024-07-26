import React, { useState, useEffect } from 'react';
// import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Footer.css"
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  const [address, setAddress] = useState('');
  const [gmail, setGmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');


  
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // `${baseUrl}
  useEffect(() => {
    

    const fetchSocialData = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000/api/v1//getArtById/${id}`);
        const response = await axios.get(`${baseUrl}/getSocial`);
        // console.log("response",response);
        
        setWhatsapp(response.data.socialLinkData.whatsapp);
        setInstagram(response.data.socialLinkData.instagram);
        setFacebook(response.data.socialLinkData.facebook);
        setLinkedin(response.data.socialLinkData.linkedin);
        setGmail(response.data.socialLinkData.gmail);
        setYoutube(response.data.socialLinkData.youtube);
        setAddress(response.data.socialLinkData.address);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    

    fetchSocialData();

    

  }, []);
  


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
             <p>Experience the beauty of art through Divyanshi Verma's captivating sketches, showcasing her unique style and profound love for creativity and detail. </p>
          </div>
          <div className='footer-decorate-div flex row'>
            <div className='footer-decorate-line'></div>
            <div className='footer-decorate-box'></div>
            <div className='footer-decorate-line'></div>
          </div>
          <div className='footer-address-div'><h6>Add- At Jyoti Jewllers, Chowk, Kotwali Road, Fatehpur, Uttar Pradesh.</h6></div>
          <div className='footer-contact-div'><h6>{gmail} <span> | </span> +91 {whatsapp}</h6></div>
          <div className='footer-social-icons-div flex row'>
            <div className='footer-facebook-div footer-icon'>
            <a href={facebook}>
              <FaFacebook/>
              </a>
            </div>
            <div className='footer-insta-div footer-icon'><a href={instagram}><GrInstagram/></a></div>
            <div className='footer-linkedin-div footer-icon'><a href={linkedin}><FaLinkedin/></a></div>
            <div className='footer-youtube-div footer-icon'><a href={youtube}><FaYoutube/></a></div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer;