import React from 'react'
import Item from './Item'
import products from './Products'

function Items() {
  return (
    <div className='row'>
        {
            products.map(item => <Item key={item.id} data={item} />)
        }
    </div>
  )
}

export default Items