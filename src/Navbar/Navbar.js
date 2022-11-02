import React, { useState, Fragment } from 'react'

import {
  Nav,
  NavContainer, 
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
} from './Navbarstyle';
import '../App.css';
const Navbar = () => {
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
      <Fragment>
        <Nav className={colorChange}>
           <NavContainer>
             
              
              <NavMenu>
                <NavItem>
                  <NavLinks href="#">A B O U T</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">S E R V I C E S</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">E V E N T S</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">C O N T A C T</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks href="#">S I G N   I N</NavLinks>
                </NavItem>
              </NavMenu>
           </NavContainer>
        </Nav>
      </Fragment>
    )
}
  
export default Navbar;
