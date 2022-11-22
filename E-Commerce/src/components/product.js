import React from 'react'
import { Card, Button } from 'react-bootstrap' //Se manda a llamar al prototipo Card de bootstrap
import {Link} from 'react-router-dom';
import Rating from './Rating'
import '../App.css';


function Product({product}){ //definición de la función producto, que recibe los atributos de la tabla products de la base de datos 8conexión no hecha)
      return(
      //Se devuelve los atibutos recopilados de los productos con la siguiente estructura: nombre del producto, imagen, categoría, preci, stock y por último el apartado de la calificación del producto, esto todavía no está terminado. <a className="nav-link activate Tcolor " aria-current="page" href="https://salmon-cliff-086826110.2.azurestaticapps.net/">Veterinarias</a>
         <div class="col-sm-8 p-5" >  <center>
            <Card className="my-1 p-1 rounded bg-warnin"  >
            <h4 class="card-title">{product.name_product}</h4>
            <Link to={`/product/${product.product_id}`}>
                <Card.Img src={product.image} width="10" alt="Card image cap"/>
            </Link>
            <Card.Body as ="bodyy">
                <Link href={`/product/${product.product_id}`}>
                    <Card.Title as="div">
                        <strong></strong>
                    </Card.Title>
                </Link>
                
                <Card.Text as="h3">
                    Categoría: {product.category_product_name}
                </Card.Text>
                <Card.Text as="h3">
                    Precio: ${product.price_product}
                </Card.Text>
                 <Card.Text as ="h2">
                stock: {product.stock}
                </Card.Text>
                
                <Card.Text as="div">
                    <div className="my-3">
                        
                        <Rating value={product.rating_product} text ={`${product.numReviews} reviews`} color={'#f8e825'} />                                    
                    </div>
                </Card.Text>
                <div className="align-center my-"><Button className='btn-block bg-warning' disable={product.countInStock==0} type='button'>Add to cart</Button>
                <Link href={`/product/${product.product_id}` }class="btn btn-warning">Ver detalles +</Link></div>


            </Card.Body>
            </Card>

            </center>
         </div>


      )

}


export default Product