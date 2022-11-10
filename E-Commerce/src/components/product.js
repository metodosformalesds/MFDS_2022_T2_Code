import React from 'react'
import { Card } from 'react-bootstrap'


function Product({product}){
      return(
         <div>
            <Card className="my-1 p-1 rounded " color={'#264CEB'} bg="dark">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}/>
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
                        
                    </div>
                </Card.Text>
               


            </Card.Body>
            </Card>

         </div>


      )

}


export default Product