import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AnnouncementBar.css';
import CampaignIcon from '@mui/icons-material/Campaign';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

function AnnouncementBar() {
  const [showAnnouncement, setShowAnnouncement] = useState(false);
  const [loading, setLoading] = useState(true);
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchRecentBannerData = async () => {
      try {
        setLoading(true);
        
        const baseUrl = process.env.REACT_APP_BASE_URL;
        const response = await axios.get(`${baseUrl}/getRecentBanner`); // Replace with your backend API endpoint
        
        const fetchedBanner = response.data.banner;
        setBanner(fetchedBanner);

        // Check if the banner's category is 'Active'
        if (fetchedBanner.category === 'Active') {
          setShowAnnouncement(true);
        } else {
          setShowAnnouncement(false);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching banner:', error);
      }
    };

    fetchRecentBannerData();
  }, []);

  const handleClose = () => {
    setShowAnnouncement(false);
  };

  const handleDownload = async () => {
    if (banner && banner.bannerImage) {
      try {
        // Fetch the image data
        const response = await fetch(banner.bannerImage);
        if (!response.ok) throw new Error('Network response was not ok.');
        
        // Convert the response to a Blob
        const blob = await response.blob();
        
        // Create a temporary URL for the Blob
        const url = window.URL.createObjectURL(blob);
        
        // Create an anchor element and trigger the download
        const link = document.createElement('a');
        link.href = url;
        link.download = banner.title || 'download'; // Specify the filename
        document.body.appendChild(link);
        link.click();
        
        // Clean up
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading image:', error);
      }
    } else {
      console.error('No banner image available to download');
    }
  };

  return (
    <div className="announcement-component">
      {showAnnouncement && (
        <div className="announcement-bar">
          <CampaignIcon className="announcement-icon" />
          <div className="announcement-text-container">
            <p className="announcement-text">
              {banner.smallDesc || 'This is an important announcement! Stay tuned for more updates.'}
            </p>
          </div>
          <CloseIcon className="close-icon" onClick={handleClose} />
          <IconButton aria-label="download" className="download-button" onClick={handleDownload}>
            <CloudDownloadIcon />
          </IconButton>
        </div>
      )}
    </div>
  );
}

export default AnnouncementBar;
