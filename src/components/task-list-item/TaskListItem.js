import React, { Fragment } from 'react'
import { completedIcon, deleteIcon } from '../../assets/icons'

import "./TaskListItem.css"

const TaskListItem = ({ label, done }) => {
  return (
    <Fragment>
      { label }
      <div className='icons'>
        <img 
          alt='edit icon'
          src={ completedIcon }
          className='edit-icon'
        />
        <img 
          alt='delete icon'
          src={ deleteIcon }
          className='delete-icon'
        />
      </div>
    </Fragment>
  )
}

export default TaskListItem