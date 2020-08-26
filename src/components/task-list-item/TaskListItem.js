import React, { Fragment, useState } from 'react'
import { uncompletedIcon, completedIcon, deleteIcon } from '../../assets/icons'

import "./TaskListItem.css"

const TaskListItem = ({ label, done, onToggleDone, onDeleted, onEdit }) => {
  const [ isEditable, setIsEditable ] = useState(false)
  const [ newLabel, setNewLabel ] = useState(label)

  let classNames = "task-completion"
  if (done) {
    classNames += " done"
  }

  const changeTaskLabel = event => {
    const newLabel = event.target.value
    setNewLabel(newLabel)
  }

  const onKeyPress = event => {
    if(event.key === 'Enter'){
      onEdit(newLabel)
      setIsEditable(false)
    }
  }

  return (
    <Fragment>
      {
        isEditable ? 
          <input 
            type='text'
            className='task-editable-input' 
            value={ newLabel }
            onChange={ changeTaskLabel }
            onKeyPress={onKeyPress}
          /> :
          <span 
            className={ classNames }
            onClick = { () => setIsEditable(true) }
          >
            { label }
          </span>
      }
      <div className='icons'>
        <span onClick={onToggleDone}>
          { 
            done ?  
            <img 
              alt='completed icon'
              src={ completedIcon }
              className='completed-icon'
            /> :
            <img 
              alt='uncompleted icon'
              src={ uncompletedIcon }
              className='uncompleted-icon'
            />
          }
        </span>
        <img 
          alt='delete icon'
          src={ deleteIcon }
          className='delete-icon'
          onClick={ onDeleted }
        />
      </div>
    </Fragment>
  )
}

export default TaskListItem