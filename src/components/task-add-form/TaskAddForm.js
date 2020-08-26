import React, { useState } from 'react'

import './TaskAddForm.css'

const TaskAddForm = ({ onTaskAdded }) => {
  const [ label, setLabel ] = useState('')

  const onLabelChange = event => {
    setLabel(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault()
    if (label.trim() !== '') {
      onTaskAdded(label);
    } else {
      alert("Enter the name of your new task to do!");
    }
    setLabel('')
  }

  return (
    <form className='task-add-form' onSubmit={ onSubmit }>
    <input
      type='text'
      placeholder='What needs to be done'
      className='add-task-input'
      onChange={ onLabelChange }
      value={ label }
    />
    <button className='add-task-button'>Add Item</button>
  </form>
  )
}

export default TaskAddForm