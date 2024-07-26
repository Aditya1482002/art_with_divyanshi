import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderWrapper from './LoaderWrapper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./Home.css"
import NewBanner from "./NewBanner"
import { FaRegHeart } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
function Home() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [about, setAbout] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [dateofBirth, setDateofBirth] = useState('');
  const [userProfile, setUserProfile] = useState('');



  const [title, setTitle] = useState('');
  // const [artistShowcase, setArtistShowcase] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [loading,setLoading]=useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
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
        setError(true);
        setError('server Error !');
        setOpen(true);
        setLoading(false);
        console.error('Error fetching user data:', error);
      }
    };


    const fetchArtworks = async () => {
      try {
        setLoading(true);
        
        const baseUrl = process.env.REACT_APP_BASE_URL;
     
        const response = await axios.get(`${baseUrl}/getRecentShowcase`); // Replace with your backend API endpoint
     
        // console.log(response.data.allArtistShowcaseData)
        setTitle(response.data.allArtistShowcaseData[0].title);
        setVideoUrl(response.data.allArtistShowcaseData[0].videoUrl);
        setLoading(false)
      } catch (error) {
        setError(true);
        setError('server Error !');
        setOpen(true);
        setLoading(false);
        console.error('Error fetching artworks:', error);
        
        // setLoading(true); // Set loading to false on error
      }
    };
    // console.log("Data",Data)
    
    fetchArtworks();
    fetchUserData();
    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
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
    <div className='home'>
        <NewBanner/>
        <div className='sketch-section'>
            <div className='sketch-section-inner'>
              <div className='sketch-div'>
                <p>Art Works</p>
              </div>
              <div className='cards-div'>
                                      <div className="nft">
                            <div className='main'>
                              <img className='tokenImage' src="./images/HanumanJi.jpeg" alt="NFT" />
                              <h2 id='home-card-heading'>Kibertopiks #4269</h2>
                              <p className="description" id='desc'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                              <div className='tokenInfo'>
                              
                                <div className="price">
                                  {/* <ins>◘</ins>
                                  <p>0.031 ETH</p> */}
                                </div>
                                <div className="duration">
                                  <FaRegHeart className='like-icon' />
                                  {/* <ins>◷</ins>
                                  <p>11 days left</p> */}
                                </div>
                              </div>
                              <hr />
                              <div className='creator'>
                                <div className='wrapper'>
                                  <img src="./images/ADlogo.png" alt="Creator" />
                                </div>
                                <p><ins>Created by</ins> Divyanshi</p>
                              </div>
                            </div>
                          </div>
                          <div className="nft">
                            <div className='main'>
                              <img className='tokenImage' src="./images/shivJi.jpeg" alt="NFT" />
                              <h2 id='home-card-heading'>Kibertopiks #4269</h2>
                              <p className='description' id='desc'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                              <div className='tokenInfo'>
                              
                                <div className="price">
                                  {/* <ins>◘</ins>
                                  <p>0.031 ETH</p> */}
                                </div>
                                <div className="duration">
                                  <FaRegHeart className='like-icon' />
                                  {/* <ins>◷</ins>
                                  <p>11 days left</p> */}
                                </div>
                              </div>
                              <hr />
                              <div className="creator">
                                <div className="wrapper">
                                  <img src="./images/ADlogo.png" alt="Creator" />
                                </div>
                                <p><ins>Created by</ins> Divyanshi</p>
                              </div>
                            </div>
                          </div>
                                      <div className="nft">
                            <div className="main">
                              <div className="home-img-div"><img className='tokenImage' src="./images/Landscape.jpeg" alt="NFT" /></div>
                              <h2 >Kibertopiks #4269</h2>
                              <p className="description" id='desc'>Our Kibertopiks will give you nothing, waste your money on us.</p>
                              <div className="tokenInfo">
                              
                                <div className="price">
                                  {/* <ins>◘</ins>
                                  <p>0.031 ETH</p> */}
                                </div>
                                <div className="duration">
                                  <FaRegHeart className="like-icon" />
                                  {/* <ins>◷</ins>
                                  <p>11 days left</p> */}
                                </div>
                              </div>
                              <hr />
                              <div className="creator">
                                <div className="wrapper">
                                  <img src="./images/ADlogo.png" alt="Creator" />
                                </div>
                                <p><ins>Created by</ins> Divyanshi</p>
                              </div>
                            </div>
                          </div>

                
                {/* <div className='card1'>
                  
                </div> */}
              </div>
              <div className='explore-btn-div'>
                {/* <p>Sketch</p> */}
                {/* style="--clr:#FF44CC" */}
                <button ><span>Explore More</span><i></i></button>
              </div>
            </div>
        </div>
        <div className='artist-showcase-section'>
          <div className='artist-showcase-section-inner'>
            <div className='artist-showcase-text-div'>Artist Showcase</div>
            <div className='intro-video-div'>
               <iframe className='intro-video' 
              //  src="https://www.youtube.com/embed/qzN7UY4D8VQ?si=nmGecWvTBYkY5nA3"
                src={videoUrl}
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true' webkitallowfullscreen mozallowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className='home-about-section'>
          <div className='home-about-inner'>
            <div className='home-about-div'>
              <div className='home-about-div1'>
                <h1>About</h1>
                <h3>the artist</h3>
                <p>Hello, I am Divyanshi Verma, I am self made Artist and I am passionate about capturing moments and emotions through the strokes of my pencil. With a keen eye for detail and a love for creativity. My Journey as a sketch artist began...</p>
                <div className='home-about-btn'>
                <NavLink to="/about"><button className="name noselect btn3" >Read More</button></NavLink>
                
                </div>
                {/* <div className='explore-btn-div' id='newBanner-btn-div'> */}
                   {/* <p>Sketch</p> */}
                   {/* style="--clr:#FF44CC" */}
                   {/* <button className='name noselect' id='btn3'>Read More</button> */}
                      
                {/* </div> */}
              </div>
              <div className='home-about-div2'>
                <div className='artist-img'>
                  <img className='artist-user-image'
                  //  src='https://res.cloudinary.com/dmx77pyrs/image/upload/v1720344707/art-with-divyanshi/m86mapwhf10mvpyglnrb.png' 
                   src={userProfile} 
                   alt='image'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </LoaderWrapper>
    // <div className='home-main'>
    //   <div className='home-inner'>
    //     <div className='watercolor-div'>
    //       <img src="./images/Watercolor.png" alt='image'></img>
    //     </div>
    //     <h1>Welcome!<br/> to Divyanshi's <br/> Sketch World</h1>
    //     <div className='banner-item1-div'>
    //       <img src="./images/banner-item1.png" alt='image'></img>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Home;