import React from 'react'
import TaskListItem from '../task-list-item/TaskListItem'

import "./TaskList.css"

const TaskList = ({ items }) => {
  const elements = items.map(item => {
    const { id, ...itemProps } = item
    return (
      <li key={id}>
        <TaskListItem
          {...itemProps}
        />
      </li>
    );
  });

  return <ul className='task-list'>{ elements }</ul>;
}

export default TaskList
