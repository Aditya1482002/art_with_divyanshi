import React from 'react'
import "./Art.css";
import CrouselArt from './CrouselArt';
function Art(props) {
  console.log(props.artData.LargeDesc);
  return (
    <div>
    <div className='about-page-main'>
      <div className='about-page'>
        <div className='about-page-inner'>
          <div className='image-section'>
            <div className='frame-div'></div>
            <div className='about-page-image-div'><img src={props.artData.img} alt='{props.artData.title}' className='art-page-image'></img></div>
          </div>
          <div className='text-section'>
            <h1>{props.artData.title}</h1>
            <h2>{props.artData.desc}</h2>
            <p>{props.artData.LargeDesc} <br/>
                <br/>
                <span>
                {props.artData.DateModified}
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
    <CrouselArt artData={props.artData} handleArtDataApp={props.handleArtDataApp}/>
    </div>
  )
}

export default Art