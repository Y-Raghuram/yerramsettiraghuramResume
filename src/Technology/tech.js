import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import background from '../working1.png'
import './tech.css';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline, ScrollTrigger } from 'react-gsap';


export default function tech() {
 

    var sectionStyle = {
        backgroundImage: `url(${background})`,
      };
     

      
      ScrollTrigger.create({
        trigger: "#orange",
        start: "top top",
        end: "+=300px",
        pin: true
        });
    return (


        <div id="bgimg1" style={sectionStyle}>
            
      <div className="Portfolio__container">
        <div className="Portfolio__row row__1">
          <ScrollAnimation
           
            animateIn="bounceInRight"
            animateOut="fadeOut"
            
            
            duration={5.0}
            delay={0.8}
          >
            <div className="box box1" />
          </ScrollAnimation>
        </div>

        <div className="Portfolio__row row__2">
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={1.2}
          >
            <div className="box box2" />
          </ScrollAnimation>
        </div>

        <div className="Portfolio__row row__3">
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={0.8}
          >
            <div className="box box3" />
          </ScrollAnimation>
          </div>

          <div className="Portfolio__row row__4">
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={0.10}
            duration={1.2}
          >
           <div className="box box4" />
          </ScrollAnimation>
          </div>

          <div className="Portfolio__row row__5">
          <ScrollAnimation
            animateIn="bounceInLeft"
            animateOut="fadeOut"
            duration={0.10}
            duration={1.2}
          >
           <div className="box box5" />
          </ScrollAnimation>
          </div>
        
      </div>
      </div>
    );
  
}