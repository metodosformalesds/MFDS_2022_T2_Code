import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

function Productscreen({match}){
    const { id } = useParams();
    const product = products.find((p)=>p._id === (id)) 
    return(
            <div>
                <Link to='/' className='btn btn-light my-3'>Regresar al listado</Link>
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid/>
                        <Col md={3}>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    <h3>{product.name}</h3>

                                </ListGroupItem>
                                    <ListGroupItem>
                                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color='#f8e825'>

                                        </Rating>
                                    </ListGroupItem>

                                    <ListGroupItem>
                                    Price: ${product.price}

                                </ListGroupItem>

                                <ListGroupItem>
                                    Description: ${product.description}

                                </ListGroupItem>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant="flush">
                                    <ListGroupItem>
                                        <Row>
                                            <Col>Precio:</Col>
                                            <Col>
                                            ${product.price}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>¿Disponible?:</Col>
                                            <Col>
                                                {product.countInStock>0? 'En stock' : 'Fuera de stock'}
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Button className='btn-block' disable={product.countInStock===0} type='button'>Add to cart</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Col>
                </Row>
            
            
            
            
            </div>
                                 

    )
}    

export default Productscreen