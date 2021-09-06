import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {  NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky='top'>
                <Container>
                    <Navbar.Brand><NavLink to='/'>My Blog</NavLink></Navbar.Brand>
                    <Nav>
                        <NavLink to='/' exact activeStyle={{ color: '#4e5559' }}>Home</NavLink>
                        <NavLink to='/add' exact activeStyle={{ color: '#4e5559' }}>Add</NavLink>
                        <NavLink to='/contacts' exact activeStyle={{ color: '#4e5559' }}>Contacts</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;