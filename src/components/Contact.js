import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaPhoneAlt, FaInstagram, FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiMessage2Fill } from "react-icons/ri";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoaderWrapper from './LoaderWrapper';
import './Contact.css';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');


  const [address, setAddress] = useState('');
  const [gmail, setGmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');


  useEffect(() => {
    

    const fetchSocialData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
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



  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(number);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    
    if (!validatePhoneNumber(phoneNumber)) {
      setError(true);
      setLoading(false);
      setErrorValue("Phone number must be 10 digits.");
      setOpen(true);
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('message', message);

    try {
      const baseUrl = process.env.REACT_APP_BASE_URL;

      console.log(formData);
      await axios.post(`${baseUrl}/sendContact`, formData);
      setError(false);
      setLoading(false);
      setOpen(true);
    } catch (err) {
      console.error('Error in updating user profile:', err);
      setError(true);
      setErrorValue("Error in sending contact information.");
      setLoading(false);
      setOpen(true);
    }
    setLoading(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LoaderWrapper open={loading}>

      <div className='contact-main'>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? errorValue : "Success!"}
        </Alert>
      </Snackbar>
        <div className='contact-page'>
          <div className='contact-inner'>
            <div className='contact-div'>
              <div className='contact-text'><h1>CONTACT US</h1></div>
              <form className='contact-form' onSubmit={handleSubmit}>
                <div className="user-box">
                  <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required placeholder='Full Name' />
                  <label><FaUser /> </label>
                </div>
                <div className="user-box">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder='Email' />
                  <label><IoIosMail /> </label>
                </div>
                <div className="user-box">
                  <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required placeholder='Phone no.' />
                  <label><FaPhoneAlt /> </label>
                </div>
                <div className="user-textarea">
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='Message' />
                  <label><RiMessage2Fill /> </label>
                </div>
                <button type='submit'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </form>
            </div>
            <div className='info-div'>
              <div className='get-in-touch-div'>
                <h2>Get in Touch</h2>
                <p className='info-div-text'>Email us with any questions or inquiries.</p>
              </div>
              <div className='location-div'>
                <h2>Location</h2>
                <p className='info-div-text'><center>Add- At Jyoti Jewellers, Chowk, Kotwali Road, Fatehpur, Uttar Pradesh.</center></p>
              </div>
              <div className='follow-div'>
                <h2>Follow Us</h2>
                <div className='follow-icons'>
                  <a href={instagram}><FaInstagram className='follow-fa' /></a>
                  <a href={facebook}><FaFacebookSquare className='follow-fa' /></a>
                  <a href={facebook}><FaLinkedin className='follow-fa' /></a>
                  <a href={facebook}><FaYoutube className='follow-fa' /></a>
                </div>
              </div>
            </div>
            <div className='map-div'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1794.119015529994!2d80.81905053375411!3d25.92740795806662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b632cd583c0c1%3A0xdbc45d3f58da8f75!2sSmart%20Point!5e0!3m2!1sen!2sin!4v1715108147793!5m2!1sen!2sin" title='map' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </LoaderWrapper>
  );
}

export default Contact;
