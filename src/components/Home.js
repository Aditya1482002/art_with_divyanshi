import React from 'react'
import "./Home.css"
import NewBanner from "./NewBanner"
import { FaRegHeart } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
function Home() {
  return (
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
               <iframe className='intro-video' src="https://www.youtube.com/embed/qzN7UY4D8VQ?si=nmGecWvTBYkY5nA3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen='true' webkitallowfullscreen mozallowfullscreen></iframe>
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
                <div className='artist-img'></div>
              </div>
            </div>
          </div>
        </div>
    </div>
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