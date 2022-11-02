import React, { useState, Fragment } from 'react'
import './Parallex.css';
import { Parallax } from 'react-parallax';
import background from '../working1.png'
import {AnimationOnScroll} from 'react-animation-on-scroll'
import "animate.css/animate.min.css";
import image1 from './first.png'
import image2 from './bg1.png'
import image3 from './bg2.png'
import image4 from './bg3.png'
import image5 from './bg5.png'
import html from './logo/html.png'
import css from './logo/css.png'
import js from './logo/js.png'
import manworking from './logo/man_working.png'
import sql from './logo/sql.png'
import dotnet from './logo/asp.net.png'
import c from './logo/c#.jpg'
import java from './logo/java.png'
import mail from './logo/mail.jpg'
import linkedin from './logo/linkedin.jpg'
import twitter from './logo/twitter.jpg'
import instagram from './logo/instagram.jpg'
import $ from 'jquery';
import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './Navbarstyle';










const inlineStyle = {
  background: '#fff',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '20px',
  transform: 'translate(-50%, -50%)',
}


const inlineStyle1 = {
    left: '80%',
    top: '1000px',
    
  }

 

  const element_one = {
    height: 800,
    width: 1520,
    
    
  }



  const element_two = {
    
    marginTop: '300px',
    marginLeft: '400px',
    fontSize :'100px',
    size:'100px',  
  }

  const element_three = {
    
    marginTop: '0px',
    marginLeft: '720px',
    fontSize :'15px',
    textColor:'white',
  }

  const element_four = {
    
    marginTop: '50px',
    marginLeft: '720px'
  }

  const element_five = {
    
    marginTop: '-450px',
    marginLeft: '120px'
  }

  const element_six = {
    
    marginTop: '50px',
    marginLeft: '200px'
  }

  const element_seven = {
    
    marginTop: '50px',
    marginLeft: '120px'
  }

  const element_eight = {
    
    marginTop: '0px',
    marginLeft: '600px'
  }

  const element_nine = {
    
    marginTop: '-500px',
    marginLeft: '1200px'
  }

  const element_ten = {
    
    marginTop: '0px',
    marginLeft: '620px'
  }

  const element_eleven = {
    
    marginTop: '200px',
    marginLeft: '1220px'
  }

  const element_twelve = {
    
    marginTop: '0px',
    marginLeft: '120px'
  }

  const text2 = {
    
    marginTop: '100px',
    marginLeft: '-800px',
    fontSize :'20px',
    
  }

  const subtitle = {
    
    marginTop: '-500px',
    marginLeft: '-1200px',
    fontSize :'20px',
    
  }
  





  


function Parallex() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  

  return (



<body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">

<div class="container">





<Parallax bgImage={ image1 } style={element_one} strength={500}   >
 <div>

 <Fragment>
        <Nav style={{ backgroundColor: 'white', position: 'fixed', top: 0, height: 60, width: 580, marginLeft: 400}} className={colorChange}>
           <NavContainer >
             
              
              <NavMenu>
                <NavItem style={{ marginTop: 30}}>
                  <div class="btn btn2" href="#page-top">A B O U T</div>
                </NavItem>
                <NavItem style={{ marginTop: 30}}>
                <div class="btn btn2" href="#about">A B O U T</div>
                  
                </NavItem>
                <NavItem style={{ marginTop: 30}}>
                <div class="btn btn2" href="#service">E V E N T S</div>
                  
                </NavItem>
                <NavItem style={{ marginTop: 30}}>
                <div class="btn btn2" href="#contact">C O N T A C T</div>
                 
                </NavItem>
                
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>

</div> 
 
<AnimationOnScroll style={element_two} animateIn="bounceInRight"  animateOut="bounceOutRight"  duration={2.0}>
<div style={{ color: 'white' }}>R A G H U R A M</div>
</AnimationOnScroll>

<AnimationOnScroll style={element_three} animateIn="fadeIn"  animateOut="fadeOut"  duration={1.0}>
<div style={{ color: 'white' }}> My Role is Full Stack Developer,
I am Responsible for developing Front-end and Back-end of<br/>
various Web-based An engineer or developer who works on both the front end (client-side) and the <br/>
back end (server-side) of a website or application is called a full-stack developer. <br/>
They may handle projects involving databases, APIs, or designing user-facing websites,  <br/>
as well as interacting with clients during development.
Projects, </div>
</AnimationOnScroll>

</Parallax>
                
           
 


    


<section id="about" class="about-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
            <Parallax bgImage={ image5 } strength={500}>
        <div style={{ height: 734 }}>
        <AnimationOnScroll style={element_four} animateIn="bounceInRight"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 500  }} src={manworking} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_five} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={html} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_six} animateIn="fadeIn"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 120  }} src={css} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_seven} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={js} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_eight} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={java} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_nine} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={sql} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_ten} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={c} alt="Logo" />
        
        </AnimationOnScroll>

        <AnimationOnScroll style={element_eleven} animateIn="bounceInLeft"  animateOut="fadeOut"  duration={2.0}>
        
        
        <img style={{ height: 100  }} src={dotnet} alt="Logo" />
        
        </AnimationOnScroll>
   

        <div style={subtitle}>S K I L L S</div>
   
  
       
   <div style={text2}> My Role is Full Stack Developer,
 I am Responsible for<br/> developing Front-end and Back-end of<br/>
  various Web-based An engineer or developer <br/> who works on both the front end (client-side) and the <br/>
   back end (server-side) of a website <br/> or application is called a full-stack developer. <br/>
   They may handle projects  involving  databases,<br/> APIs, or designing user-facing websites,  <br/>
   as well as interacting with clients during development.
Projects, </div>
    

        </div>
      </Parallax>
            </div>
        </div>
    </div>
</section>


<section id="services" class="services-section">
    <div class="container"  >
        <div class="row">
            <div class="col-lg-12">
            <Parallax bgImage={ image3 } strength={500} >
        <div style={{ height: 700 }}>
        <div style={inlineStyle1}>A B O U T </div>
        

      <div style={{ marginLeft: 100 }}>
        <div class="card" style={{ height: 100, width: 100 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100, marginLeft: 400, marginTop: -100 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2">
                <div class="content">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100, marginTop: 200 }} >
            <div class="slide slide1">
                <div class="content">
                    <div class="icon">
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2" >
                <div class="content">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>

            
        </div>

        <div class="card" style={{ height: 100, width: 100 , marginLeft: 400, marginTop: -100 }} >
            <div class="slide slide1">
              
                <div class="content">
                    <div class="icon">
                    
                        <i class="fa fa-user-circle" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div class="slide slide2"  >
                <div class="content">
                    <h3>
                        Hello there!
                    </h3>
                    <p>Trust yourself and keep going.</p>
                </div>
            </div>

            
        </div>
        </div>

        </div>
      </Parallax> 
            </div>
        </div>
    </div>
</section>


<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>

<script src="https://cdn.jsdelivr.net/jquery.easing/1.3/jquery.easing.1.3.min.js"></script>
    
 

        <Parallax bgImage={ image5 } strength={500}>
        <div style={{ height: 734 }}/>
        </Parallax>



        <Parallax bgImage={ image3 } strength={500}>
        <div style={{ height: 734 }}/>
        <div class="cards middle" style={{ marginLeft: 300, marginTop: -100 }} >
      <div class="front">
        <img  src={mail} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>WebDevTrick</h2>
          <span>Designer &amp; Developers Blog</span>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>
    </div>

    <div class="cards middle" style={{ marginLeft: 600, marginTop: -100 }} >
      <div class="front">
        <img  src={linkedin} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>WebDevTrick</h2>
          <span>Designer &amp; Developers Blog</span>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>
    </div>

    <div class="cards middle" style={{ marginLeft: 300, marginTop: 200 }} >
      <div class="front">
        <img  src={instagram} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>WebDevTrick</h2>
          <span>Designer &amp; Developers Blog</span>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>
    </div>

    <div class="cards middle" style={{ marginLeft: 600, marginTop: 200 }} >
      <div class="front">
        <img  src={twitter} />
      </div>
      <div class="back">
        <div class="back-content middle">
          <h2>WebDevTrick</h2>
          <span>Designer &amp; Developers Blog</span>
          <div class="sm">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            
          </div>
        </div>
      </div>
    </div>

     </Parallax>



      <Parallax 
        bgImage={ image4 }
        strength={200}
        renderLayer={precentage => (
          <div 
            style={{
              position: 'absolute',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: `rgba(255, 123, 23, ${precentage * 1})`,
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%) scale(${precentage * 5})`,
            }}
          >
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={inlineStyle}>Render prop</div>
        </div>
      </Parallax>
      <div style={{ height: '100vh' }}></div>
    </div>
    </body>
  );
}

export default Parallex;