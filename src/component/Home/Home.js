import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/TOP-11-BASIC.jpg';
import "./Home.css";

const Home = () => {
    return (
       <div className="background">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        
        
        
          <Nav className="nav">
            <Link className="nav1" to="/home">Home</Link>
            <Link className="nav1" to="/courses">Services</Link>
            <Link className="nav1" to="/cart">Mentors</Link>
            <Link className="nav1" to="/about">About us</Link>
            
            
          </Nav>      
        
        </Container>
        
      </Navbar>
      <Card.Img variant="top" src={logo}/>
       </div>
    );
};

export default Home;