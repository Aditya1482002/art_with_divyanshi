import React, { useState, useEffect } from 'react'
import "./CrouselArt.css";
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
// import Data from "./Data.js";
import 'react-multi-carousel/lib/styles.css';
// import { useState } from 'react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import 'swiper/css/navigation';

// import { EffectCoverflow,Pagination,Navigation,A11y,Scrollbar } from 'swiper/modules';
// import

function CrouselArt({artCategory}) {
    console.log("hello",artCategory);
    const [data,setData]=useState([]);

    
    const [newCrouselItem, setNewCrouselItem] = useState([]);

    const navigate = useNavigate(); // Initialize useNavigate
  
    useEffect(() => {
      const fetchArtworks = async () => {
        try {
          const baseUrl = process.env.REACT_APP_BASE_URL;
          const response = await axios.get(`${baseUrl}/getAllArtItems`);
          setData(response.data.allArtItems);
        } catch (error) {
          console.error('Error fetching artworks:', error);
        }
      };
      fetchArtworks();
    }, []);
  
    useEffect(() => {
      if (data.length > 0) {
        const filteredItems = data.filter((item) => item.category === artCategory);
        setNewCrouselItem(filteredItems);
      }
    }, [data, artCategory]);
    const handleView = (id) => {
      navigate(`/art/${id}`); // Navigate to the view page with the art ID
    };

    //   setCrouselItem(newCrouselItem);
    //   console.log(newCrouselItem);
    // function handleCrouselArtClick(e,x) {
    //     console.log("gahh");
    //     console.log(x);
    //     // setArtDataChild(x);
    //     // console.log(x.LargeDesc);
    //     // console.log(artDataChild);
    //     props.handleArtDataApp(x);
    
    //   }



    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1024 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1030, min: 800 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 800, min: 460 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };
  return (
    <div className='crousel-section flex row'>
        <div className='crousel-section-inner'>
                <h3 className='you-may-also-like'>You May also like </h3>
                <Carousel responsive={responsive}>
                {
                    newCrouselItem.map((val)=>{
                        return (
                            <div className='crousel-slide'>
                                                        <div className='card2 card-y flex col'>
                                                    <div className='card-y-img-div flex row'>
                                                        <img src={val.artImage} className='card-y-img' alt={val.title} />
                                                        <div className='img-cover-div'></div>
                                                    </div>
                                                    <div className='card-cover-div flex col'>
                                                        <p className='card-y-desc'>{val.smallDesc}</p>
                                                        <p className='card-y-category-cover'>{val.category}</p>
                                                    <div className='card-y-btn-date-div flex row'>
                                                       {/* <NavLink to="/art"> */}
                                                        <button 
                                                        // onClick={(e) => handleCrouselArtClick(e, val)}
                                                        onClick={() => handleView(val._id)}
                                                        >
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        <span></span>
                                                        Read More
                                                        </button>
                                                        {/* </NavLink> */}
                                                    </div>
                                                    </div>
                                                    <h2 className='card-y-title'>{val.title} <span>{val.createdAt}</span></h2>
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
                    </div>        
                        );
                    })
                }
                    
                    
                    
                    
                    

                </Carousel>
        </div>
        
    </div>
  )
}

export default CrouselArt