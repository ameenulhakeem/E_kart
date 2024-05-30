import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { addToCart } from '../redux/cartSlice';
import { removeFromWishlist } from '../redux/wishlistSlice';

function WishList() {
  const wishlistArray = useSelector((state) => state.wishlistReducer);
  console.log("wishlist array===");
  console.log(wishlistArray);

  const dispatch = useDispatch()
  return (
    <div>
      <Row className='m-5 ' style={{ paddingTop: '100px' }}>
        <div className='d-flex justify-content-end'>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'black', marginBottom: '30px' }}>
            <button className='btn btn-dark'><i class="fa-solid fa-arrow-left"></i> Back To Home</button>
          </Link>
        </div>
        {
          wishlistArray?.length > 0 ?
            wishlistArray?.map((item) => (
              <Col className='mb-5'>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.thumbnail} style={{ height: '200px' }} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                      <p>{item.description.slice(0, 50)}...</p>
                      <p>Price : ${item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between'>
                      <Button variant='outline-danger' onClick={() => dispatch(removeFromWishlist(item.id))}> <i class='fa-solid fa-trash'></i> </Button>
                      <Button variant='outline-success' onClick={() => dispatch(addToCart(item))}> <i class='fa-solid fa-cart-plus'></i> </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <p>No item to display</p>
        }

      </Row>
    </div>
  )
}

export default WishList