import React from 'react'
// import NewBanner from "./NewBanner";
import "./Contact.css";
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { RiMessage2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
// import NewBanner from './NewBanner'
function Contact() {
  return (
    <div className='contact-main'>
      <div className='contact-page'>
        <div className='contact-inner'>
          <div className='contact-div'>

              <div className='contact-text'><h1>CONTACT US</h1></div>
              <form className='contact-form'>
                  {/* <p type="Name:"><input placeholder="Write your name here.."></input></p>
                  <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                  <p type="Message:"><input placeholder="What would you like to tell us.."></input></p> */}
                  
                  {/* <button>Send Message</button> */}
                    <div class="user-box">
                      
                      <input type="text" name="" required="" placeholder='Full Name'/>
                      <label><FaUser/> </label>
                    </div>
                    <div class="user-box">
                      
                      <input type="email" name="" required="" placeholder='Email'/>
                      <label><IoIosMail/> </label>
                    </div>
                    <div class="user-box">
                      
                      <input type="number" name="" required="" placeholder='Phone no.'/>
                      <label><FaPhoneAlt/> </label>
                    </div>
                    <div className="user-textarea">
                      
                      <textarea rows={4} type="" name="" required="" placeholder='Message'/>
                      <label><RiMessage2Fill/> </label>
                    </div>
                    <button >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Submit
                    </button>
                    {/* <div class="user-box">
                      <input type="password" name="" required=""/>
                      <label>Password</label>
                    </div> */}


              </form>
          </div>
          <div className='info-div'>
            <div className='get-in-touch-div'>
              <h2>Get in Touch</h2>
              <p>Email us with any questions or inquiries.</p>
            </div>
            <div className='location-div'>
              <h2>Location</h2>
              <p><center>Add- At Jyoti Jewllers,Chowk,Kotwali Road, Fatehpur, Uttar Pradesh.</center></p>
            </div>
            <div className='follow-div'>
              <h2>Follow Us</h2>
              <div className='follow-icons'><FaInstagram className='follow-fa'/><FaFacebookSquare className='follow-fa'/><FaLinkedin className='follow-fa'/><FaYoutube className='follow-fa'/></div>
            </div>

          </div>
          <div className='map-div'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1794.119015529994!2d80.81905053375411!3d25.92740795806662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b632cd583c0c1%3A0xdbc45d3f58da8f75!2sSmart%20Point!5e0!3m2!1sen!2sin!4v1715108147793!5m2!1sen!2sin" title='map'  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      {/* <div class="container">
      
      <div class="form">
        <div class="contact-info">
          <h3 class="title">Let's get in touch</h3>
          <p class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div class="info">
            <div class="information">
             
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div class="information">
              
              <p>lorem@ipsum.com</p>
            </div>
            <div class="information">
              
              <p>123-456-789</p>
            </div>
          </div>

          <div class="social-media">
            <p>Connect with us :</p>
            <div class="social-icons">
              <a href="#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div><br/>
            <div class="credit">Made with <span style="color:tomato">❤</span> by <a href="https://www.learningrobo.com/">Learning Robo</a></div>
          </div>
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>

          <form action="index.html" autocomplete="off">
            <h3 class="title">Contact us</h3>
            <div class="input-container">
              <input type="text" name="name" class="input" />
              <label for="">Username</label>
              <span>Username</span>
            </div>
            <div class="input-container">
              <input type="email" name="email" class="input" />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div class="input-container">
              <input type="tel" name="phone" class="input" />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div class="input-container textarea">
              <textarea name="message" class="input"></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </div>
      </div> */}
      
    </div>
  )
}

export default Contact