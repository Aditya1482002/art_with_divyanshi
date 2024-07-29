import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import "./Navbar.css";
import { FiAlignLeft } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import AnnouncementBar from './AnnouncementBar';

function Navbar() {
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
  
  const [menuBtn,setMenuBtn]=useState(false);
  function menuHandler(event){
    if(menuBtn){
        // console.log("if");
        setMenuBtn(false);
    }
    else{
        // console.log("else");
        setMenuBtn(true);
    }
    
}
  return (
    <div className='m'>
        <div className='nav'>
            <div className='left-container'>
                {/* <label id='icon' onClick={menuHandler}><AiOutlineMenu/></label> */}
                <img src="./images/ADlogo.png" className='logo' alt='logo'/>
                <div className='logo-text-div'>
                  <p className='logo-text-1'>ART WITH</p>
                  <p className='logo-text-2'>DIVYANSHI</p>
                </div>
            </div>
            <ul className={menuBtn?('middle-container show'):('middle-container')}>
                  <div className='list'>
                    <li className='link' onClick={()=>{setMenuBtn(false)}}><NavLink to="/" className="navlink">Home</NavLink></li>
                    <li className='link' onClick={()=>{setMenuBtn(false)}}><NavLink to="/artworks" className="navlink">Art Works</NavLink></li>
                    <li className='link' onClick={()=>{setMenuBtn(false)}}><NavLink to="/youtube" className="navlink">Yotube</NavLink></li>
                    <li className='link' onClick={()=>{setMenuBtn(false)}}><NavLink to="/about" className="navlink">About</NavLink></li>
                    <li className='link' onClick={()=>{setMenuBtn(false)}}><NavLink to="/contact" className="navlink">Contact</NavLink></li>
                  </div>  
                  <div className='font-awesome-div'>
                    <a href={facebook}><FaFacebook className='fonts'/></a>         
                    <a href={instagram}><GrInstagram className='fonts'/></a>
                    <a href={linkedin}><FaLinkedin className='fonts'/></a>
                    <a href={youtube}><FaYoutube className='fonts'/></a>
                  </div>

            </ul>
            <div className='right-container'>
              <label id='icon'  onClick={menuHandler}>{menuBtn ? <IoMdClose /> : <FiAlignLeft />}</label>
            </div>
        </div>
    </div>
    
  )
}

export default Navbar;