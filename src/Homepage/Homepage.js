import React from "react";
import './Homepage.css';

// import GetEmployeeData from './components/table';

//styles

// import TableRow from '@mui/material/TableRow';
// import { styled } from '@mui/material/styles';

import Navbar from '../Navbar/Navbar'
import background from '../bg.jpg'
import rrr from '../r.png'
import ScrollAnimation from 'react-animate-on-scroll';
import "./animate.css";
import Fader from './Fader'
import DownloadResume from '../DownloadResume/DownloadResume'


export default function Homepage() {

  var sectionStyle = {
    backgroundImage: `url(${background})`,
  };


  const zoomElement = document.querySelector(".workspace");
let zoom = 1;
const ZOOM_SPEED = 0.1;

document.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    zoomElement.style.transform = `scale(${(zoom += ZOOM_SPEED)})`;
  } else {
    zoomElement.style.transform = `scale(${(zoom -= ZOOM_SPEED)})`;
  }
});


  return (
    <>
      <div id="bgimg" style={sectionStyle}>
          


     

        <div style={{marginleft:-150}}>
        
          <Navbar/>
        </div>
        

        <Fader/>

        
          
        
      <DownloadResume/>
         
        <div class="workspace">   
          <img   src={rrr} width="100" height="50" />
          </div>
       
          
      </div>
        

    </>
  );
}