import React from 'react'

const ProductDescrition = ({name, description}) => {
  return (
    <div>
   <p>{name}</p>
    <p><i>{description}</i></p>
    </div>
  )
}

export default ProductDescrition