import React from 'react';
import {MDBNavbar, NavLink, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBIcon } from 'mdbreact';

class FixedNavbarExample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
        collapse: !this.state.collapse,
      });
  }

  render() {
    const bgPink = {backgroundColor: '#e91e63'}
    return(
      <div >
          <header>
            <MDBNavbar style={bgPink} color="grey darken-3"  dark expand="md" scrolling fixed="top">
              <MDBNavbarBrand href="/">
                  <strong>FAST FOOD FAST</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler onClick={ this.onClick } />
              <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                      <NavLink to="/">Home</NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <NavLink to="/menu">Menu</NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                      <NavLink to="/addmenu">Add Menu</NavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <NavLink to="/signup">Signup</NavLink>
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
  }
}

export default FixedNavbarExample;
