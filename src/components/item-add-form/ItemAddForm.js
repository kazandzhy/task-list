import React from 'react'

import './ItemAddForm.css'

const ItemAddForm = () => {
  return (
    <form className='item-add-form'>
    <input
      type='text'
      placeholder='What needs to be done'
      className='add-item-input'
    />
    <button className='add-item-button'>Add Item</button>
  </form>
  )
}

export default ItemAddForm