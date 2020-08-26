import React, { Fragment } from 'react'
import { uncompletedIcon, completedIcon, deleteIcon } from '../../assets/icons'

import "./TaskListItem.css"

const TaskListItem = ({ label, done, onToggleDone }) => {
  let classNames = "task-completion";
  if (done) {
    classNames += " done";
  }

  return (
    <Fragment>
      <span className={classNames}>{ label }</span>
      <div className='icons'>
        <span onClick={onToggleDone}>
          {
          done?  
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
        />
      </div>
    </Fragment>
  )
}

export default TaskListItem