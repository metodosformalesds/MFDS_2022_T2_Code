import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';


function Productscreen({match}){
    const { id } = useParams();
    const product = products.find((p)=>p.product_id === (id)) 
    return(
        <Card className="my-1 p-1 rounded">
            <center>
            <div>
                <Link to='/' className='btn btn-light my-3'>Regresar al listado</Link>
                <Card.Title><h3>{product.name_product}</h3></Card.Title> 
                <Card.Body>
                <Row>
                    <Col md={6}>
                        <Image src={product.image}  fluid/>
                        <Col md={3}>
                            
                                        <Rating value={product.rating_product} text={`${product.ratingcount} reviews`} color='#f8e825'>

                                        </Rating>
                                  
                                  
                             
                        </Col>
                        <Col>
                        Categoría:{product.category_product_name}
                        </Col>
                       
                        <Col md={3}>
                           
                              
                                        <Row>
                                            <Col>Precio:</Col>
                                            <Col>
                                            ${product.price_product}
                                            </Col>
                                        </Row>
                                 
                                        <Row>
                                            <Col>¿Disponible?:</Col>
                                            <Col>
                                                {product.countInStock>0? 'En stock' : 'Fuera de stock'}
                                            </Col>
                                        </Row>
                                        <Col>
                                        Description: ${product.description_product}

                                        </Col>
                                        <Col>
                                Rating: ${product.rating}                        
                        </Col>
                                    <div className="align-center"><Button className='btn-block bg-warning' disable={product.countInStock==0} type='button'>Agregar al carrito</Button></div>
                                        
                                  
                        </Col>
                    </Col>
                </Row>
            
             </Card.Body> 
                            
            
            
            </div></center>
            
            </Card>                     

    )
}    

export default Productscreen