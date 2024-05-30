import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className='d-flex align-items-center justify-content-evenly w-100 mb-5 mt-5 text-dark' style={{height: "300px", backgroundColor: "lightgrey"}}>
                <div style={{ width: "400px" }}>
                    <h4><i class="fa-solid fa-cart-shopping me-4" style={{color: "#EA906C"}}></i>
                        E Kart</h4>
                    <h6>Rev up your excitement with our online karting experience! 
                        Explore a thrilling world of virtual racing, where speed meets strategy. 
                        Join the race, customize your kart, and compete against friends or rivals 
                        in our dynamic online karting platform.</h6>
                </div>

                <div>
                    <h4>Links</h4>
                    <h6><Link to="/" style={{ textDecoration: 'none', color: "black" }}>Home Page</Link></h6>
                    <h6><Link to="/wishlist" style={{ textDecoration: 'none', color: "black" }}>Wish List</Link></h6>
                    <h6><Link to="/cart" style={{ textDecoration: 'none', color: "black" }}>Cart</Link></h6>
                </div>

                <div>
                    <h4>Guides</h4>
                    <h6>React</h6>
                    <h6>React Bootstrap</h6>
                    <h6>Bootswatch</h6>
                </div>

                <div>
                    <h4>Contact Us</h4>
                    <div className='d-flex mb-3'>
                        <input type="text" name='' id=''
                        placeholder='Enter your email' className='form-control rounded'  />
                        <button className='btn text-white ms-2' style={{backgroundColor: "#EA906C"}}>Subscribe</button>
                    </div>
                    <div className='d-flex align-items-center justify-content-evenly fs-4'>
                    <i class="fa-brands fa-instagram" style={{color: "black"}}></i>
                    <i class="fa-brands fa-twitter" style={{color: "black"}}></i>
                    <i class="fa-brands fa-linkedin" style={{color: "black"}}></i>
                    <i class="fa-brands fa-facebook" style={{color: "black"}}></i>
                    </div>
                    
                </div>
            </div>
            <div className='text-center'>
                <p>Copyright &copy; 2023. E Kart Build with React and Redux</p>
            </div>
        </>
    )
}

export default Footer;