import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class Navbars extends Component {

    handleLogout = () => {
        localStorage.clear();
        window.location.reload()
        // setAnchorEl(null);
    }
    render() {

        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="container">
                        <Navbar.Brand href="/">Best Cinema</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">Today</Nav.Link>
                                <Nav.Link href="#pricing">Upcomming</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                            </Nav>
                            <Nav>

                                {
                                    localStorage.getItem("isLogin") ? <div style={{ color: 'white' }}>
                                        <Nav.Link>
                                            {localStorage.getItem("name")} <Link onClick={this.handleLogout} style={{ color: "white" }}>Logout</Link>
                                        </Nav.Link></div>
                                        :
                                        <div>
                                            <Nav.Link >
                                                <Link to="/register/user" style={{ color: 'white', margin: '20px' }}>Register</Link>
                                                <Link to="/login/user" style={{ color: 'white' }}>Login</Link>
                                            </Nav.Link>
                                        </div>
                                }





                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div >
        )
    }

}
export default Navbars