import React from 'react'

import './ItemStatusFilter.css'

const ItemStatusFilter = () => {

  const btns = [
    { name: 'all', label: 'All' },
    { name: 'pending', label: 'Pending' },
    { name: 'complete', label: 'Completed' }
  ]

  const buttons = btns.map(({ name, label }) => {
    return (
      <button
        type='button'
        key={name}
        className='item-status-btn'
      >
        {label}
      </button>
    );
  })

  return (
    <div>
      { buttons }
    </div>
  )
}

export default ItemStatusFilter