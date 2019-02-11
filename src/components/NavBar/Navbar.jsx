import React from 'react';
import {MDBNavbar, NavLink, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';


const Navbar = ({onClick, isOpen, active}) => {
    const bgPink = {backgroundColor: '#e91e63'}
    return (
        <div >
          <header>
            <MDBNavbar style={bgPink} color="grey darken-3"  dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>FAST FOOD FAST</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={onClick } />
              <MDBCollapse isOpen = { isOpen } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active ={active}>
                      <NavLink to="/addmenu">Home</NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <NavLink to="/menu">Menu</NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <NavLink to="#"><MDBIcon icon="facebook" /></NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink to="#"><MDBIcon icon="twitter" /></NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink to="#"><MDBIcon icon="instagram" /></NavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
};


export default Navbar;
