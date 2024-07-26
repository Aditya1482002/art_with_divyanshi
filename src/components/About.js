import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./About.css"
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoaderWrapper from './LoaderWrapper';
import axios from 'axios';
// import CrouselArt from './CrouselArt';
function About() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorValue, setErrorValue] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [about, setAbout] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [userProfile, setUserProfile] = useState('');

  const baseUrl = process.env.REACT_APP_BASE_URL;
  // `${baseUrl}
  useEffect(() => {
    
    const fetchUserData = async () => {
      try {
        setLoading(true);
        // const response = await axios.get(`http://localhost:4000/api/v1//getArtById/${id}`);
        const response = await axios.get(`${baseUrl}/userProfile`);
        // console.log("response",response);
        // setArt(response.data.artData);
        setFirstName(response.data.userData.firstName);
        setLastName(response.data.userData.lastName);
        // setPrevArtUrl(response.data.artData.image);
        // // setPrevCategory(response.data.artData.category);
        setGender(response.data.userData.gender);
        setAbout(response.data.userData.about);
        setContactNumber(response.data.userData.contactNumber);
        function formatDate(mongoDBDate) {
            const date = new Date(mongoDBDate);
            
            // Ensure the date is valid
            if (isNaN(date.getTime())) {
              throw new Error('Invalid Date');
            }
          
            // Define arrays for days and months
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          
            // Extract day, date, and month
            const day = days[date.getUTCDay()];
            const dayDate = date.getUTCDate();
            const month = months[date.getUTCMonth()];
            const year = date.getUTCFullYear();
          
            // Format the output
            return `${day}, ${dayDate} ${month} ${year}`;
          }
        
        // setCreatedAt(response.data.artData.createdAt);
        setDateofBirth(formatDate(response.data.userData.dateOfBirth));
        // setDateofBirth(new Date(response.data.userData.dateofBirth).toISOString().split('T')[0]);
        setUserProfile(response.data.userData.userProfile);
       
        setLoading(false);
      } catch (error) {
        setErrorValue('server error !');
        setError(true);
        setOpen(true);
        setLoading(false);
        console.error('Error fetching user data:', error);
      }
    };
    const handleClose = () => {
      setOpen(false);
    };

    // const fetchSocialData = async () => {
    //   try {
    //     // const response = await axios.get(`http://localhost:4000/api/v1//getArtById/${id}`);
    //     const response = await axios.get(`${baseUrl}/getSocial`);
    //     // console.log("response",response);
        
    //     setWhatsapp(response.data.socialLinkData.whatsapp);
    //     setInstagram(response.data.socialLinkData.instagram);
    //     setFacebook(response.data.socialLinkData.facebook);
    //     setLinkedin(response.data.socialLinkData.linkedin);
    //     setGmail(response.data.socialLinkData.gmail);
    //     setYoutube(response.data.socialLinkData.youtube);
    //     setAddress(response.data.socialLinkData.address);
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // };

    

    // fetchSocialData();

    

    fetchUserData();
  }, []);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <LoaderWrapper open={loading}>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? errorValue : "Success!"}
        </Alert>
      </Snackbar>
    <div>
    <div className='about-page-main'>
      <div className='about-page'>
        <div className='about-page-inner'>
          <div className='image-section'>
            <div className='frame-div'></div>
            <div className='about-page-image-div'>
              <img src={userProfile} alt='image' className='art-page-image'></img>
            </div>
          </div>
          <div className='text-section'>
            <h1>About The Artist</h1>
            <h2>Hello, I am Divyanshi Verma a passionate self taught Sketch Artist.</h2>
            <p>I am passionate about capturing moments and emotions through the strokes of my pencil. With a keen eye for detail and a love for creativity.
                <br/>
                <br/>
                {/* My Journey as an artist has been one of the exploaration and growth. I have an interest in arts since childhood, but my main journey as a sketch artist began in 2022. Since then, I have honed my skills and developed my unique style, drawing inspiration from observing and learning from various sketch artists. Over the years, I have developed my skills through practice, experimentaion and a deep love for art. Each piece is a reflection of my dedication to my art and my desires to connect with other through it. I know that I have to do more work on myself and enhance my skills to achieve my dreams and I am eager to embark on the journey of growth and improvement necessary to reach them because I believe that one day I will make it reality. */}
                {about}
                <br/>
                <br/>
                <span>
                  My medium of drawing <br/>
                  || Graphite Pencil || Charcoal Pencil || Watercolor || Acrylic Paint || Pencil color.
                </span>
                <br/>
                <br/>
                Thankyou for visiting my Portfolio. I invite you to explore my gallery and experience the stories waiting to be discovered within each sketch. Whether you are here to admire, to commission a piece, or simply to connect, I am grateful for your interest and support.
                <br/>
                <br/>
                <span>Warm regards,</span><br/>
                Divyanshi Verma
            </p>
          </div>
        </div>
      </div>  
    </div>
    {/* <CrouselArt/> */}
    </div>
    </LoaderWrapper>
  )
  
}

export default About;


