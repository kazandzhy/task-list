import React from 'react'
import TaskListItem from '../task-list-item/TaskListItem'

import "./TaskList.css"

const TaskList = ({ items }) => {
  const elements = items.map(item => {
    const { id, ...itemProps } = item
    return (
      <li key={id} className='task-list-li'>
        <TaskListItem
          {...itemProps}
        />
      </li>
    );
  });

  return (
    <div className='task-list'>
      <ul className='task-list-ul'>
        { elements }
      </ul>
    </div>
  );
}

export default TaskList
