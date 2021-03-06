import React, { Component } from 'react';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBLink
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

class HomeNav extends Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
      
                <MDBNavbar color="primary-color" dark expand="md">
                    {/* <MDBNavbarBrand>
                        <strong className="white-text">Navbar</strong>
                    </MDBNavbarBrand> */}
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                {/* <MDBDropdown>
                                    <MDBDropdownToggle nav caret>
                                        <div className="d-none d-md-inline">Contact</div>
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu className="dropdown-default">
                                        <MDBDropdownItem href="#!">Githug</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                        <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown> */}
                            </MDBNavItem>
                            <MDBNavItem>
                               <a href="https://www.linkedin.com/in/corey-schink-35a64699/" target='_blank' rel="noreferrer noopener" className="nav-link Ripple-parent"><MDBIcon fab icon="linkedin" /></a>
                           </MDBNavItem>
                            <MDBNavItem>
                                <a href="https://github.com/CSchink/" target='_blank' rel="noreferrer noopener" className="nav-link Ripple-parent"><MDBIcon fab icon="github" /></a>
                            </MDBNavItem>
                            {/* <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light" to="#!">
                                    <MDBIcon fab icon="google-plus-g" />
                                </MDBNavLink>
                            </MDBNavItem> */}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
        
        );
    }
}

export default HomeNav;