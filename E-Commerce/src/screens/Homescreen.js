import React from 'react'
import { Row, Col } from 'react-bootstrap'

import products from  '../products'
import Product from  '../components/product'
import Searchbar from '../components/Searchbar'
function Homescreen() {
    return (
        //Esta pantalla sirve como constante para el catalogo de productos,muestra el encabezado de la sección y divide a los productos para que se muestren ordenados
       <div>
        <div className=" p-3"><Searchbar/></div>
        <center>
        <h1>Productos en existencia</h1></center>
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
   