import styled from 'styled-components';
export const Nav = styled.nav`
   background: transparent;
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   /* Fix your navbar by using below two lines of code */
   position: sticky;
   top:0;
   /* Fix your navbar by using above two lines of code */
   z-index: 10;
  
   @media screen and (max-width: 960px) {
       transition: 0.8s all ease
   }
`;
  
export const NavContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding: 0 24px;
   max-width: 1100px;
   
`;
  
export const NavLogo = styled.a`
   color: green;
   justify-self: flex-start;
   cursor: pointer;
   font-size: 2.0rem;
   display: flex;
   align-items: center;
   margin-left: 24px;
   font-weight: bold;
   text-decoration: none;
`;
  
export const MobileIcon = styled.div`
   display: none;
  
   @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top:0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 3.0rem;
    cursor: pointer;
   }
`;
  
export const NavMenu = styled.div`
   display: flex;
   align-items: center;
   list-style: none;
   text-align: center;
   margin-right: -22px;
   height : 50px;
  
   @media screen and (max-width: 960px) {
     display: none;
  }
  
    color: #105b72c2; 
    border-radius: 20px;
    margin-top: 10px;
`;
  
export const NavItem = styled.li`
   height: 80px;
   
`;
  
export const NavLinks = styled.a`
   color: #000000; 
   display: flex; 
   align-items: center; 
   text-decoration: none; 
   
   padding: 0 2rem; 
   height: 50%; 
 
  &:hover {
    background-color: #105b72c2;
    border-radius: 20px;
  }
  margin-top : 20px;
  }
  `