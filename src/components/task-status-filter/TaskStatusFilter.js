import React from 'react'

import './TaskStatusFilter.css'

const TaskStatusFilter = ({ onFilterChange, filter }) => {

  const btns = [
    { name: 'all', label: 'All' },
    { name: 'pending', label: 'Pending' },
    { name: 'completed', label: 'Completed' }
  ]

  const buttons = btns.map(({ name, label }) => {
    const isActive = filter === name
    const btnClass = isActive ? "btn-active" : ''
    return (
      <button
        type='button'
        key={name}
        className={`task-status-btn ${btnClass}`}
        onClick={()=> onFilterChange(name)}
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

export default TaskStatusFilter