import React from 'react'
import {NavLink} from 'react-router-dom'
import Data from "./Data.js";
import { useState } from 'react';
import "./ArtWorks.css"
// import { FaSearch } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
function ArtWorks({handleArtDataApp}) {
  const [artDataChild, setArtDataChild] = useState({});
  const [item, setItem] = useState(Data);
  const [selectValue, setSelectValue] = React.useState("All");
  const [sortValue,setSortValue]=useState("Recent");
  const [searchValue,setSearchValue]=useState("");

  // console.log(Data.LargeDesc);

  // spread operator will display all the values from our category section of our data while Set will only allow the single value of each kind to be displayed

  const menuItems = [...new Set(Data.map((Val) => Val.category))];
console.log(handleArtDataApp);
  function handleClickArt(e,x) {
    console.log("gahh");
    console.log(x);
    setArtDataChild(x);
    console.log(x.LargeDesc);
    console.log(artDataChild);
    handleArtDataApp(x);

  }



  const filterItem = (curcat) => {
    console.log(curcat);
    console.log("filter");
    // return;
    if(curcat==="All"){
      
      console.log("if");
      setItem(Data);
      if(sortValue==="Recent"){
        // console.log("recent");
        // let sorted = Data.sort(function(a, b) {
        //   // return new Date(b.DateModified) - new Date(a.DateModified);
        //   return b.DateModified.valueOf() - a.DateModified.valueOf()
        // });
        // setItem(sorted);
         const sortedData = Data.slice().sort((a, b) => new Date(b.DateModified) - new Date(a.DateModified));
         setItem(sortedData);
         console.log("recent");
      }
      else{
        // let sorted = Data.sort(function(a, b) {
        //  // return new Date(a.DateModified) - new Date(b.DateModified);
        //  return a.DateModified.valueOf() - b.DateModified.valueOf()
        // });
        // setItem(sorted);
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
      // let sorted = newItem.sort(function(a, b) {
      //   // return new Date(b.DateModified) - new Date(a.DateModified);
      //   return b.DateModified.valueOf() - a.DateModified.valueOf()
      // });
      // setItem(sorted);
      const sortedData = newItem.slice().sort((a, b) => new Date(b.DateModified) - new Date(a.DateModified));
         setItem(sortedData);
        console.log("recent");
    }
    else{
      // let sorted = newItem.sort(function(a, b) {
      //   // return new Date(a.DateModified) - new Date(b.DateModified);
      //   return a.DateModified.valueOf() - b.DateModified.valueOf()
      // });
      // setItem(sorted);
      const sortedData = newItem.slice().sort((a, b) => new Date(a.DateModified) - new Date(b.DateModified));
      setItem(sortedData);
      console.log("Old")
    }
    // let sorted = newItem.sort(function(a, b) {
    //   return new Date(b.DateModified) - new Date(a.DateModified);
    // });
    // setItem(sorted);
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
    // setSelectValue(value);
    // filterItem(value);
    // console.log(value);
    // console.log(selectValue);
    // if(value==="Recent"){
    //   console.log("recent");
    //   let sorted = item.sort(function(a, b) {
    //     return new Date(b.DateModified) - new Date(a.DateModified);
    //   });
    //   // console.log(sorted);
    //   setItem(sorted);
    //   // console.log(item);
    //   return;
    // }
    // else{
    //   console.log("old");
    //   let sorted = item.sort(function(a, b) {
    //     return new Date(a.DateModified) - new Date(b.DateModified);
    //   });
    //   // console.log(sorted);
    //   setItem(sorted);
    //   // console.log(item);
    //   return;
    // }

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
    // console.log(value);
    setSearchValue(value);
    searchFilter(searchValue);
  }
  // console.log(searchValue);
  // console.log(sortValue);
  //  console.log(item);
  // filterItem(selectValue);
  // console.log(selectValue);
  // const clearInput = () => {
  //   console.log("sjsks");
  //   const input = document.getElementsByTagName("input")[0];
  //   console.log("input ",input);
  //   input.value = "";
  // }
  
  // const clearBtn = document.getElementsByClassName("clear-btn");
  // if(clearBtn){
  //   console.log("hey");
  //   clearBtn.addEventListener("click", clearInput);
  // }
  
  
  return (
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
                    <img src={val.img} className='card-y-img' alt="NFT" />
                    <div className='img-cover-div'></div>
                  </div>
                  <div className='card-cover-div flex col'>
                    <p className='card-y-desc'>{val.desc}</p>
                    <p className='card-y-category-cover'>{val.category}</p>
                  <div className='card-y-btn-date-div flex row'>
                    <NavLink to="/art">
                    <button onClick={(e) => handleClickArt(e, val)}>
                      <span></span>
                      <span></span>
                      <span></span> 
                      <span></span>
                      Read More
                    </button>
                    </NavLink>
                  </div>
                  </div>
                  <h2 className='card-y-title'>{val.title} <span>({val.DateModified})</span></h2>
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
  )
}

export default ArtWorks