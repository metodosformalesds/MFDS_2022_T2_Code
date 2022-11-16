import React from 'react'
import { Card } from 'react-bootstrap' //Se manda a llamar al prototipo Card de bootstrap
import Rating from './Rating'

function Product({product}){ //definición de la función producto, que recibe los atributos de la tabla products de la base de datos 8conexión no hecha)
      return(
         <div class="col-sm-8 p-5" >
            <Card className="my-1 p-1 rounded " bg="warning"  >
            <h4 class="card-title">{product.name}</h4>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} width="10" alt="Card image cap"/>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong></strong>
                    </Card.Title>
                </a>

                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
                 <Card.Text as ="h2">
                stock: {product.stock}
                </Card.Text>
                <Card.Text as="div">
                    <div className="my-3">
                        { product.rating} from {product.numReviews} reviews
                        <Rating value={product.rating} text ={`${product.numReviews} reviews`} color={'#f8e825'} />                                    
                    </div>
                </Card.Text>
               <Card.Text as ="h3">
                    ${product.price}
               </Card.Text>


            </Card.Body>
            </Card>

         </div>


      )

}


export default Product