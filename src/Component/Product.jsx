import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Product(props) {
    const {id} = useParams()
    const product = props.data.find(item => item.id == id)
  return (
    <div className='container text-center'>
   
        <img src={product.image} alt="" />
        <h1 className='text-center'>{product.name}</h1>
        <h2>Description</h2>
        <p>{product.detail}</p>

        <Link to='/' >Accuiel</Link>
      
    </div>
  )
}

export default Product
