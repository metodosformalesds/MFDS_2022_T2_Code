import React from 'react'
import { Row, Col } from 'react-bootstrap'

import products from  '../products'
import Product from  '../components/product'
import Searchbar from '../components/Searchbar'
function Homescreen() {
    return (
       <div>
        <div className=" p-3"><Searchbar/></div>
        
        <h1>Productos en existencia</h1>
        <Row>
            {products.map(product=> (<Col key={product._id} sm={12} md={6} Lg={4} xL={3}>
            
            <Product product={product}/>
            </Col>
            ))}
                
        </Row>
       </div>

)
            }  

export default Homescreen
   