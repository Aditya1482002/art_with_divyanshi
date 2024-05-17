import React from 'react'
import "./NewBanner.css";
import {NavLink} from 'react-router-dom'
function newBanner() {
  return (
    <div className='newBanner-main'>
      
      <div className='newBanner-inner'>
         <div className='newBanner-heading-div'>
          <h2 className='u-text-1'>WELCOME</h2>
          <div className='decorate-div flex row'>
            <div className='decorate-line'></div>
            <div className='decorate-box'></div>
            <div className='decorate-line'></div>
          </div>
          <p className='u-text-2'>Hello and welcome! I'm Divyanshi Verma, 
                        a passionate sketch artist. With each stroke 
                        of my pencil, I aim to capture
                        the essence of the world around me.
          </p>
         </div>
         <div className='newBanner-inner-2'>
           <div className='newBanner-inner-2-div1'>
            <h1>Art</h1>
            <h3>is the story I fail to put into words.</h3>
            <p>Art is the story I fail to put into words, where each stroke of my pencil or brush becomes a chapter, each color blending into emotions, and every line whispering narratives that transcend language.</p>
            <div className='explore-btn-div' id='newBanner-btn-div'>
                {/* <p>Sketch</p> */}
                {/* style="--clr:#FF44CC" */}
                <NavLink to="/about"><button ><span>Read More</span><i></i></button></NavLink>
              </div>
           </div>
           <div className='newBanner-inner-2-div2'>
             <div className='newBanner-img-div1'>
              <div className='newBanner-img-inner-div1'>
                {/* <img src='./images/HanumanJi.jpeg' className='newBanner-img' alt='img1'></img> */}
              </div>
              <div className='newBanner-img-inner-div2'>
                {/* <img src='./images/shivJi.jpeg' className='newBanner-img' alt='img1'></img> */}
              </div>
              <div className='newBanner-img-inner-div3'>
                {/* <img src='./images/Landscape.jpeg' className='newBanner-img' alt='img1'></img> */}
              </div>
             </div>
             <div className='newBanner-img-div2'>
                <div className='newBanner-img-inner-div4'>
                    {/* <img src='./images/HanumanJi.jpeg' className='newBanner-img' alt='img1'></img> */}
                  </div>
                  <div className='newBanner-img-inner-div5'>
                    {/* <img src='./images/shivJi.jpeg' className='newBanner-img' alt='img1'></img> */}
                  </div>
                  <div className='newBanner-img-inner-div6'>
                    {/* <img src='./images/Landscape.jpeg' className='newBanner-img' alt='img1'></img> */}
                  </div>
             </div>
             {/* <div className='newBanner-img-div3'></div> */}
           </div>
         </div>
      </div>
      

    </div>
  )
}

export default newBanner