import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Navigation extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        color="elegant-color-dark"
        dark
        expand="md"
        style={{ color: "white !important" }}
      >
        <MDBNavbarBrand>Corey Schink</MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <div className="d-none d-md-inline text-white">Experience</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/projects/historylab">
                  History Lab
                </MDBDropdownItem>
                <MDBDropdownItem href="/resume">Portfolio</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <MDBDropdown>
              <MDBDropdownToggle nav caret white>
                <div className="d-none d-md-inline text-white">Blog</div>
              </MDBDropdownToggle>
              <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/blogdirectory">Githug</MDBDropdownItem>
                <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>

            {/* <MDBNavItem>
                            <MDBNavLink to="/blog">Blog</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/projects">Experience</MDBNavLink>
                        </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <a
                href="https://www.linkedin.com/in/corey-schink-35a64699/"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link Ripple-parent"
              >
                <MDBIcon fab icon="linkedin" size="lg" />
              </a>
            </MDBNavItem>
            <MDBNavItem>
              <a
                href="https://github.com/CSchink/"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-link Ripple-parent"
              >
                <MDBIcon fab icon="github" size="lg" />
              </a>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navigation;
