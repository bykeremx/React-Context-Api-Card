import React, { useContext } from 'react'
import ProductsContext from './context/ProductsContext'
import { Row ,Col } from 'reactstrap';
import ProductCard from './ProductCard'

const Product = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <Row className='mt-2'>
        <h1>
          Products List
        </h1>
        <hr></hr>
      </Row>
      <Row>
        {
          products ? products.map((product) => (
            <Col sm={3}>
              <ProductCard product={product} key={product.id}> </ProductCard>
            </Col>
          ))
            : 'Loading...'

        }
      </Row>
    </div>
  )
}

export default Product
