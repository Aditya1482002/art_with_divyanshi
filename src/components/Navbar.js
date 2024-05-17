import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.css";
import { FiAlignLeft } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
  const [menuBtn,setMenuBtn]=useState(false);
  function menuHandler(event){
    if(menuBtn){
        console.log("if");
        setMenuBtn(false);
    }
    else{
        console.log("else");
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
                    <li className='link'><NavLink to="/" className="navlink">Home</NavLink></li>
                    <li className='link'><NavLink to="/artworks" className="navlink">Art Works</NavLink></li>
                    <li className='link'><NavLink to="/youtube" className="navlink">Yotube</NavLink></li>
                    <li className='link'><NavLink to="/about" className="navlink">About</NavLink></li>
                    <li className='link'><NavLink to="/contact" className="navlink">Contact</NavLink></li>
                  </div>  
                  <div className='font-awesome-div'>
                    <FaFacebook className='fonts'/>         
                    <GrInstagram className='fonts'/>
                    <FaLinkedin className='fonts'/>
                    <FaYoutube className='fonts'/>
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