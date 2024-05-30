import React from 'react'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addToWishlist } from '../redux/wishlistSlice';
import { removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cartlistArray = useSelector((state) => state.cartReducer)
  console.log("cartlist array===");
  console.log(cartlistArray);

  const dispatch = useDispatch()

  let totalPrice = 0;
  if (cartlistArray.length > 0) {
    for (let i = 0; i < cartlistArray.length; i++) {
      totalPrice = totalPrice + cartlistArray[i].price
    }
  }

  const handleCheckout = () => {
    alert("your order is successfully placed")
  }
  return (
    <div style={{ marginTop: '150px' }} className='me-5'>
      <div className='d-flex justify-content-end'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black', marginBottom: '30px'  }}>
        <button className='btn btn-dark'><i class="fa-solid fa-arrow-left"></i> Back To Home</button>
      </Link>
      </div>
      <div className='row w-100 d-flex  justify-content-center'>
      
        <div className='col-lg-6 col-md-6 m-5'>
          <table className='table shadow border '>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartlistArray?.length > 0 ?
                  cartlistArray.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td><img src={item.thumbnail} alt="" style={{ height: '120px' }} /></td>
                      <td>${item.price}</td>
                      <td><Button variant='outline-dark border-0' onClick={() => dispatch(removeFromCart(item.id))}> <i class='fa-solid fa-trash'></i> </Button></td>
                    </tr>
                  ))
                  :
                  <p>No item to display</p>
              }
            </tbody>
          </table>
        </div>
        <div className='col-lg-6 m-5 '>
          <div className='col-lg-12 col-md-12 d-flex align-items-center juastify-content-center flex-column'>
            <div className='border shadow ' style={{ padding: '50px 240px' }}>
              <h3 className='text-primary fw-bold'> <u>Cart Summary</u></h3>
              <h4>Total no.of Products: <span className='fw-bold fs-2 text-warning'>{cartlistArray.length}</span></h4>
              <h5>Total Price : <span className='fw-bolder fs-5 text-warning'>{totalPrice}</span></h5>
              <button className='btn btn-warning rounded w-100 mt-3' onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart