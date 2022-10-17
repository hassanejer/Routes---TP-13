import React from 'react'

import {Link } from 'react-router-dom'

function Item(props) {

    const {id,name,price,image} =props.data
  return (
    <div className='col-md-3'>
        <Link to={`product/${id}`} >
            <img src={image} alt="" />
        </Link>
        <h1>{name}</h1>
        <p>{price}$</p>
        <button>Add To Cart</button>
    </div>
  )
}

export default Item