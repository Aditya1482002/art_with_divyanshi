import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoaderWrapper from './LoaderWrapper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
// import "./Youtube.css";
import "./youtube2.css";

function Youtube() {

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_BASE_URL;
        // `${baseUrl}
        // `${baseUrl}/uploadYoutubeVideo`
        const response = await axios.get(`${baseUrl}/getAllYoutubeVideos`); // Replace with your backend API endpoint
        // console.log(response)
        setVideos(response.data.allYoutubeData); // Assuming the response data is an array of artworks
        console.log(response.data.allYoutubeData)
        // console.log()
        // setData(response.data.allYoutubeData);
        setLoading(false); // Set loading to false after data is fetched
        // const menuItems = [...new Set(Data.map((Val) => Val.category))];
        // setMenuItems(menuItems);
        // setItem(response.data.allYoutubeData);
        // console.log("first",videos);
        // console.log("first",Data)
      } catch (error) {
        setLoading(false);
        setError(true);
        setErrorValue('server error !');
        setOpen(true);
        console.error('Error fetching videos:', error);
        // Handle error, e.g., set an error state or show an error message
        setLoading(false); // Set loading to false on error
      }
    };
    // console.log("Data",Data)
    
    fetchArtworks();
    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
  }, []); // Empty dependency array to run effect only once on component mount

  const handleClose = () => {
    setOpen(false);
  };
  function formatDate(mongoDBDate) {
    const date = new Date(mongoDBDate);
    
    // Log the date to debug
    console.log('Raw date:', mongoDBDate, 'Parsed date:', date);

    // Ensure the date is valid
    if (isNaN(date.getTime())) {
      console.error('Invalid Date:', mongoDBDate);
      return 'Invalid Date';
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

  return (
    <LoaderWrapper open={loading}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? errorValue : "Success!"}
        </Alert>
      </Snackbar>
    <div className='youtube-page1 flex row'>
      <div className='youtube-main flex col'>
      <div className='artwork-heading-div youtube-heading'>
            <h2 className='u-text-1'>YOUTUBE VIDEOS</h2>
            <p className='u-text-2'>
            {/* Prints of ArtWorks created by Divyanshi Verma */}
            </p>
          </div>
        <div className='youtube-main-inner flex row'>
          <div className='cards-section'>
          {videos.map((val)=>{
            return (
          <div className='card2 card-y flex col'>
                  <div className='card-y-img-div flex row'>
                  <iframe className='intro-video' src={val?.videoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true' webkitallowfullscreen mozallowfullscreen></iframe>
                    {/* <div className='img-cover-div'></div> */}
                  </div>
                  
                  <h2 className='card-y-title'>{val.title} <span>{formatDate(val.createdAt)}</span></h2>
                  {/* <p className='card-y-desc'>lorem ipsum</p>
                  <div className='card-y-btn-date-div'>
                    <button >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Read More
                    </button>
                  </div> */}
              </div>
            )
          })}
          
              
          
          
              
              
              
              {/* <div className='card3 card-y flex col'>
              <div className='card-y-img-div flex row'>
                    <img src='./images/HanumanJi.jpeg' className='card-y-img' alt="NFT" />
                    <div className='img-cover-div'></div>
                  </div>
                  <h2 className='card-y-title'>title <span>date</span></h2>
                  <p className='card-y-desc'>lorem ipsum</p>
                  <div className='card-y-btn-date-div'>
                    <button >
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      Read More
                    </button>
                  </div>
              </div> */}
              
              
          </div>
        </div>
      </div>
    </div>
    </LoaderWrapper>
  )
}

export default Youtube;