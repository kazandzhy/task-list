import React from 'react'

import "./TaskListItem.css"

const TaskListItem = ({ label, done }) => {
  return (
    <p>
      { label }
    </p>
  )
}

export default TaskListItem