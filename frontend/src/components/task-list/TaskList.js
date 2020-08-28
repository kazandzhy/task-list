import React from 'react'
import TaskListItem from '../task-list-item/TaskListItem'

import "./TaskList.css"

const TaskList = ({ tasks, onToggleDone, onDeleted, onUpdate }) => {
  const elements = tasks.map(task => {
    const { id, ...taskProps } = task
    return (
      <li key={id} className='task-list-li'>
        <TaskListItem
          {...taskProps}
          onToggleDone={() => onToggleDone(id)}
          onDeleted={() => onDeleted(id)}
          onUpdate={label => onUpdate(label, id)}
        />
      </li>
    )
  })

  return (
    <div className='task-list'>
      <ul className='task-list-ul'>
        { elements.length ? elements : <p>There are no tasks in this list</p>}
      </ul>
    </div>
  )
}

export default TaskList
