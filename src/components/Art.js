import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./Art.css";
import CrouselArt from './CrouselArt';
import LoaderWrapper from './LoaderWrapper';

function Art() {
  const { id } = useParams();
  const [loading,setLoading]=useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [title, setTitle] = useState('');
  const [smallDesc, setSmallDesc] = useState('');
  const [largeDesc, setLargeDesc] = useState('');
  const [prevArtUrl, setPrevArtUrl] = useState('');
  const [category, setCategory] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        setLoading(true);
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.post(`${baseUrl}/getArtById`, { id }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log("response", response);
        setTitle(response.data.artData.title);
        setPrevArtUrl(response.data.artData.artImage);
        setCategory(response.data.artData.category);
        setSmallDesc(response.data.artData.smallDesc);
        setLargeDesc(response.data.artData.largeDesc);
        setCreatedAt(response.data.artData.createdAt);
        setLoading(false)
      } catch (error) {
        setErrorValue('server error');
        setError(true);
        setOpen(true);
        setLoading(false)
        console.error('Error fetching art data:', error);
      }
    };

    fetchArtData();
  }, [id, token]);

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
                <img src={prevArtUrl} alt={title} className='art-page-image'></img>
              </div>
            </div>
            <div className='text-section'>
              <h1>{title}</h1>
              <h2>{smallDesc}</h2>
              <p>{largeDesc} <br/>
                <br/>
                <span>
                  {formatDate(createdAt)} category : {category}
                </span>
                <br/>
                <br/>
                <br/>
                <span>Made by,</span><br/>
                Divyanshi Verma
              </p>
            </div>
          </div>
        </div>  
      </div>
      <CrouselArt artCategory={category}/>
    </div>
    </LoaderWrapper>
  )
}

export default Art;
