import React from 'react'
import { useNavigate } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
// import Data from "./Data.js";
import { useState, useEffect } from 'react';
import LoaderWrapper from './LoaderWrapper';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import "./ArtWorks.css"
import axios from 'axios';
import "./Youtube.css"
// import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function ArtWorks({handleArtDataApp}) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [errorValue, setErrorValue] = useState('');
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state for async fetch
  const [Data,setData]=useState([]);
  const [item, setItem] = useState(Data);
  const [selectValue, setSelectValue] = React.useState("All");
  const [sortValue,setSortValue]=useState("Recent");
  const [searchValue,setSearchValue]=useState("");
  const [artDataChild, setArtDataChild] = useState({});
  const [menuItems, setMenuItems] = useState([]);
  
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        setLoading(true);
      const baseUrl = process.env.REACT_APP_BASE_URL;
      // `${baseUrl}
        const response = await axios.get(`${baseUrl}/getAllArtItems`); // Replace with your backend API endpoint
        // console.log(response)
        setArtworks(response.data.allArtItems); // Assuming the response data is an array of artworks
        console.log(response.data.allArtItems)
        // console.log()
        setData(response.data.allArtItems);
        setLoading(false); // Set loading to false after data is fetched
        const menuItems = [...new Set(Data.map((Val) => Val.category))];
        setMenuItems(menuItems);
        setItem(response.data.allArtItems);
        console.log("first, artworks",artworks);
        console.log("first",Data)
        setLoading(false);
      } catch (error) {
        setError(true);
        setErrorValue("server Error !");
        setOpen(true);
        setLoading(false);
        console.error('Error fetching artworks:', error);
        // Handle error, e.g., set an error state or show an error message
        setLoading(false); // Set loading to false on error
      }
    };
    // console.log("Data",Data)
    
    fetchArtworks();
    // const menuItems = [...new Set(Data.map((Val) => Val.category))];
  }, []); // Empty dependency array to run effect only once on component mount

  useEffect(() => {
    setItem(Data);
    const menuItems = [...new Set(Data.map((Val) => Val.category))];
    setMenuItems(menuItems);
    console.log("second, artworks",artworks);
    console.log("second",Data)
    // console.log("menuItems ", menuItems);
  }, [Data]);
  // const menuItems = [...new Set(Data.map((Val) => Val.category))];
  // console.log("menuItems ",menuItems)
// console.log(handleArtDataApp);
//   function handleClickArt(e,x) {
//     console.log("gahh");
//     console.log(x);
//     setArtDataChild(x);
//     console.log(x.LargeDesc);
//     console.log(artDataChild);
//     handleArtDataApp(x);

//   }

  const handleEdit = (id) => {
    navigate(`/editart/${id}`); // Navigate to the edit page with the art ID
  };
  const handleView = (id) => {
    navigate(`/art/${id}`); // Navigate to the view page with the art ID
  };

  const filterItem = (curcat) => {
    console.log(curcat);
    console.log("filter");
    // return;
    if(curcat==="All"){
      
      console.log("if");
      setItem(Data);
      if(sortValue==="Recent"){
        
         const sortedData = Data.slice().sort((a, b) => new Date(b.DateModified) - new Date(a.DateModified));
         setItem(sortedData);
         console.log("recent");
      }
      else{
        const sortedData = Data.slice().sort((a, b) => new Date(a.DateModified) - new Date(b.DateModified));
         setItem(sortedData);
        
        console.log("Old")
      }
      
      return;  
    }
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat; 
        	// comparing category for displaying data
    });
    if(sortValue==="Recent"){
      console.log("recent");
      const sortedData = newItem.slice().sort((a, b) => new Date(b.DateModified) - new Date(a.DateModified));
         setItem(sortedData);
        console.log("recent");
    }
    else{
      const sortedData = newItem.slice().sort((a, b) => new Date(a.DateModified) - new Date(b.DateModified));
      setItem(sortedData);
      console.log("Old")
    }
    
  };
  
  const onChangefn = (event) => {
    const value = event.target.value;
    setSelectValue(value);
    filterItem(value);
    // console.log(value);
    // console.log(selectValue);
  };
  // sort
  const sortFn = (event) => {
    const value = event.target.value;
    setSortValue(value);

  };
  const searchFilter=(searchTerm)=>{
    const searchTermLowerCase = searchTerm.toLowerCase();
    if(searchTermLowerCase.trim().length===1){
      // console.log("here");
      setItem(Data);
      return;
    }
    // console.log(searchTermLowerCase);
    const searchResults = Data.filter(product => {
      // Convert the product name to lowercase for case-insensitive search
      const productNameLowerCase = product.title.toLowerCase();
      
      // Check if the product name contains the search term
      return productNameLowerCase.includes(searchTermLowerCase);
    });
    // console.log(searchResults);
    setItem(searchResults);
  }
  const onSearch=(event)=>{
    const value = event.target.value;
    console.log("value", value);
    setSearchValue(value);
    searchFilter(searchValue);
  }

  // if (loading) {
  //   return <div><Spinner/></div>; // Optional: Show a loading indicator while fetching data
  // }
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
    <div className='artwork-page'>
    
      <div className='artwork-main1'>
        <div className='artwork-main-inner1'>
          <div className='artwork-heading-div'>
            <h2 className='u-text-1'>ART PRINT COLLECTIONS</h2>
            <p className='u-text-2'>Prints of ArtWorks created by Divyanshi Verma
            </p>
          </div>
          <div className='artwork-functions-div'>
            <div className='filter-div'>
              <span className='filter-text'>Filter</span>
              <select className='select' onChange={onChangefn}>

                <option value="All" >All</option>
                {
                  menuItems.map((val)=>{
                    return (
                      <option value={val}>{val}</option>      
                    );
                  })
                }
                {/* <option value="1">No Wrapper</option>
                <option value="2">No JS</option>
                <option value="3">Nice!</option> */}
              </select>
            </div>
            <div className='sort-div'>
            <span className='filter-text'>Sort</span>
              <select className='select' onChange={sortFn}>
                <option value="Recent">Recent</option>
                <option value="Old">Old</option>
                {/* <option value="2">Old</option> */}
                {/* <option value="3">Nice!</option> */}
              </select>
            </div>
            <div className='search-div-artworks'>
              <div className='artwork-search-icon'><FiSearch/></div>
               <input type='text' placeholder='Search . . .' className='input-artwork-search' onChange={onSearch}/>

              {/* <div class="flexbox">
                <div class="search">
                  <div>
                    <input type="text" placeholder="Search . . ." onChange={onSearch} required></input>
                  </div>
                </div>
              </div> */}
                {/* <form action="" className='search-form'>
                  <input type="search" required></input>
                  <FaSearch className="fa fa-search"/>
                  <a href="javascript:void(0)" id="clear-btn" className='clear-btn'>Clear</a>
                </form> */}
                {/* <button id='clear-btn' href="javascript:void(0)" onClick={clearInput()}>clear</button> */}
                {/* <a href="javascript:void(0)" id="clear-btn">Clear</a> */}
            </div>
          </div>
        </div>
      </div>
      <div className='artwork-main2'>
          <div className='artwork-main-inner2'>
          <div className='cards-section'>
          {
            item.map((val)=>{
              return (
                <div className='card2 card-y flex col' key={val.id}>
                  <div className='card-y-img-div flex row'>
                    <img src={val.artImage} className='card-y-img' alt="artImage" />
                    <div className='img-cover-div'></div>
                  </div>
                  <div className='card-cover-div flex col'>
                    <p className='card-y-desc'>{val.smallDesc}</p>
                    <p className='card-y-category-cover'>{val.category}</p>
                  <div className='card-y-btn-date-div flex row'>
                    {/* <NavLink to="/art"> */}
                    <button 
                    onClick={() => handleView(val._id)}
                    // onClick={(e) => handleClickArt(e, val)}
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
                  <h2 className='card-y-title'>{val.title} <span>({formatDate(val.createdAt)})</span></h2>
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
              );              
            })
          }
              
              
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
            {/* <div className='cards-container'>
            
              {
                item.map((val)=>{
                  return (
                    <div className='card1 card-x'  key={val.id}>
                
                    <div class="card__image card__image--fence">
                      <img src={val.img} alt="NFT" />
                    </div>
                    <div class="card__content">
                      <div class="card__title">{val.title} ({val.category}) ({val.DateModified})</div>
                      <p class="card__text">{val.desc} </p>
                      <NavLink to="/art">
                      <button class="btn btn--block card__btn" onClick={(e) => handleClickArt(e, val)}>Read More</button>
                      </NavLink>
                    </div>
                
              </div>
                  );
                })
              }
              
            </div> */}
          </div>
      </div>
    </div>
    </LoaderWrapper>
  )
}

export default ArtWorks