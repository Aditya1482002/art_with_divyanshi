// import logo from './logo.svg';
import './App.css';
import { Route,Link,Routes } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import Navbar from "./components/Navbar" 
import Home from "./components/Home" 
import ArtWorks from "./components/ArtWorks" 
import Contact from "./components/Contact" 
import Youtube from "./components/Youtube" 
import About from "./components/About" 
import Footer from "./components/Footer" 
import Art from "./components/Art" 
import Copyright from "./components/Copyright" 
import CrouselArt from './components/CrouselArt';
import { FaWhatsapp } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';


const steps = [
  {
      id: 'Greet',
      message: 'Hello!, Welcome to Divyanshi\'s Sketch World',

      // This calls the next id
      // i.e. id 1 in this case
      trigger: 'Ask Name',
  }, {
      id: 'Ask Name',

      // This message appears in
      // the bot chat bubble
      message: 'Please write your Name',
      trigger: 'waiting1'
  }, {
      id: 'waiting1',

      // Here we want the user
      // to enter input
      user: true,
      trigger: 'Name',
  }, {
      id: 'Name',
      message: " Hi {previousValue}, how are you?",
      trigger: 'waiting3'
  }, {
    id: 'waiting3',

    // Here we want the user
    // to enter input
    user: true,
    trigger: 'Fine',
},  {
  id: 'Fine',
  message: " I am Happy you are fine...",
  trigger: 'Help'
},
{
  id: 'Help',
  message: "How can I help you...?, Please select your issue",
  trigger: 'Issues'
},
{
      id: 'Issues',
      options: [

          // When we need to show a number of
          // options to choose we create alist
          // like this
          { value: 'Art Work', label: 'Artist artworks',trigger:'Artworks' },
          { value: 'About', label: 'About the Artist',trigger:'About Artist' },
          { value: 'Youtube', label: 'Youtube section',trigger:'Youtube Links' },
          { value: 'Commission Work', label: 'Commission work queries',trigger:'Commission' },
          { value: 'Contact Info', label: 'Contact related queries',trigger:'Contact'},
          // { value: 2, label: 'Read Articles' },

      ],
      // end: true
  },
  {
    id: 'Artworks',
    message: "You are welcome to view my artworks by clicking on the 'Artwork' link. Once there, you can click on any piece to see more details about it.",
    trigger: 'Issues'
  },
  {
    id: 'About Artist',
    message: "You are welcome to view about the Artist by clicking on the 'About' link. Once there, you can see more details about it.",
    trigger: 'Issues'
  },
  {
    id: 'Youtube Links',
    message: "You are welcome to view my youtube videos by clicking on the 'Yotube' link. Once there, you can see more details about it. And you can also visit my youtube channel that is ArtWithDivyanshi and please don\'t forget to subscribe my channel.",
    trigger: 'Issues'
  },
  {
    id: 'Commission',
    message: "for commission related queries you can dm me on instagram or whatsapp. Feel free to contact me",
    trigger: 'Issues'
  },
  {
    id: 'Contact',
    message: "For any queries, please feel free to contact me by writing your message on the contact page.",
    trigger: 'Issues'
  },
];

// Creating our own theme
const theme = {
  // rgba(250, 183, 2, 0.6)
  background: '#fff',
  headerBgColor: '#28a0f0',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: '#fff',
};

// Set some properties of the bot
const config = {
  // botAvatar: "https://icons8.com/icon/i0Rib28TKAL1/message-bot",
  floating: true,
};

// import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [artDataApp, setArtDataApp] = useState({});
  const [address, setAddress] = useState('');
  const [gmail, setGmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [youtube, setYoutube] = useState('');
  const [linkedin, setLinkedin] = useState('');
  

  
  const baseUrl = process.env.REACT_APP_BASE_URL;
  // `${baseUrl}
  useEffect(() => {
    

    const fetchSocialData = async () => {
      try {
        // const response = await axios.get(`http://localhost:4000/api/v1//getArtById/${id}`);
        const response = await axios.get(`${baseUrl}/getSocial`);
        // console.log("response",response);
        
        setWhatsapp(response.data.socialLinkData.whatsapp);
        setInstagram(response.data.socialLinkData.instagram);
        setFacebook(response.data.socialLinkData.facebook);
        setLinkedin(response.data.socialLinkData.linkedin);
        setGmail(response.data.socialLinkData.gmail);
        setYoutube(response.data.socialLinkData.youtube);
        setAddress(response.data.socialLinkData.address);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    

    fetchSocialData();

    

  }, []);
  
  function handleArtDataApp(y){
    console.log(y);
    setArtDataApp(y);
  }
  console.log(artDataApp);


  const goToBtn=()=>{
    window.scrollTo({top:0,left:0,behavior:"smooth"});
  };



  

  return (
    <div className="App">
      {/* <div className='overlay'>

      </div> */}
      <div>
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Art With Divyanshi"
                    steps={steps}
                    botAvatar= "./images/chatboticon.png"
                    {...config}
 
                />
            </ThemeProvider>
      </div>
      <div className='left-fixed-div flex col'>
          <div className='fixed-up-btn-div fixed-btn-div-inner' onClick={goToBtn}><FaArrowUp/></div>
          <div className='fixed-whatsapp-btn-div fixed-btn-div-inner'><a 
            // href='https://wa.me/9140757060'
            href={`https://wa.me/${whatsapp}`}
          ><FaWhatsapp/></a></div>
          {/* <div className='fixed-down-btn-div fixed-btn-div-inner'></div> */}
      </div>
      <div className='app-nav'><Navbar/></div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/artworks" element={<ArtWorks handleArtDataApp={handleArtDataApp}/>}/>
            {/* <Route path="/artworks/art" element={<Art/>}/> */}
          {/* </Route> */}
          <Route path="/youtube" element={<Youtube/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/art/:id" element={<Art/>}/>
          <Route path="/crousel" element={<CrouselArt handleArtDataApp={handleArtDataApp}/>}/>
        </Routes>  
      </div>
      <div><Footer/></div>
      <div><Copyright/></div>
      
    </div>
  );
}

export default App;
