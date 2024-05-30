import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import {useSelector} from 'react-redux'

function Header() {
  // to access state in store :useSelector() hook
  const wishlist = useSelector((state)=>state.wishlistReducer)
  console.log("wishlist");
  console.log(wishlist);
  const cartlist = useSelector((state)=>state.cartReducer)
  console.log("cart====");
  console.log(cartlist);
  return (
    <>
      <Navbar expand="lg" className="position-fixed top-0 w-100" style={{ backgroundColor: "lightgrey", zIndex:"1" }}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/' style={{ color: "black", textDecoration: "none" }} >
              <i class="fa-solid fa-cart-shopping me-4 fs-3" style={{ color: "#EA906C" }}></i>
              E Kart
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='btn border rounded'>
                <Link to='/wishlist' style={{ color: "black", textDecoration: "none" }} >
                  <i class="fa-regular fa-heart me-2"></i>
                  Wish List<Badge pill bg="light" className='ms-2'>{wishlist.length}</Badge>
                </Link>
              </Nav.Link>
              <Nav.Link href="#link" className='btn border rounded ms-3'>
                <Link to='/cart' style={{ color: "black", textDecoration: "none" }} >
                  <i class="fa-solid fa-cart-plus me-2"></i>
                  Cart<Badge pill bg="light" className='ms-2'>{cartlist.length}</Badge>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header;