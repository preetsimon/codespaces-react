import React from 'react'
import ProductDescrition from './ProductDescrition'

const Product = ({name, description, price}) => {
  return (
    <div>
      <ProductDescrition name={name} description={description}/>
        <h3>${price}</h3>
    </div>
  )
}

export default Product