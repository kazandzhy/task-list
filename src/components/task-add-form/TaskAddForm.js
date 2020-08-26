import React from 'react'

import './TaskAddForm.css'

const TaskAddForm = () => {
  return (
    <form className='task-add-form'>
    <input
      type='text'
      placeholder='What needs to be done'
      className='add-task-input'
    />
    <button className='add-task-button'>Add Item</button>
  </form>
  )
}

export default TaskAddForm