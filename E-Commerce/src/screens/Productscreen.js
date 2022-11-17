import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import products from '../products';

function Productscreen({match}){
    const product = product.find((p)=>p._id == match.params.id) 
    return(
            <div>
                <Link to='/' className='btn btn-light my-3'>Regresar al listado</Link>
            </div>
                                 

    )
}    

export default Productscreen