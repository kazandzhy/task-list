import React, { useState } from 'react'
import { AppHeader, 
         TaskStatusFilter, 
         TaskList, 
         TaskAddForm,
         taskListItems 
       } from './components'

import './App.css'

const App = () => {

  const [ todoTasks, setTodoTasks ] = useState(taskListItems)
  const [ filter, setFilter ] = useState('all')
  const [ maxId, setMaxId ] = useState(20)

  const createTodoTask = label => {
    setMaxId(prevId => prevId + 1)
    return {
      id: maxId,
      label,
      done: false
    }
  }

  const onToggleDone = id => {
    const idx = todoTasks.findIndex((el) => el.id === id)
    const oldTask = todoTasks[idx]
    const newTask = { ...oldTask, ['done']: !oldTask['done'] }
    const newArray = [...todoTasks.slice(0, idx), newTask, ...todoTasks.slice(idx + 1)]
    setTodoTasks(newArray)
  }

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case "all":
        return tasks;
      case "pending":
        return tasks.filter((task) => !task.done);
      case "completed":
        return tasks.filter((task) => task.done);
      default:
        return tasks;
    }
  }

  const onFilterChange = filter => {
    setFilter(filter)
  }

  const addTask = label => {
    const newItem = createTodoTask(label)
    const newArray = [...todoTasks, newItem]
    setTodoTasks(newArray)
  }

  const visibleTasks = filterTasks(todoTasks, filter)
  console.log(todoTasks)

  return (
    <div className="App">
      <AppHeader />
      <TaskStatusFilter
        filter={ filter }
        onFilterChange={ onFilterChange } 
      />
      <TaskList 
        tasks={ visibleTasks } 
        onToggleDone={ onToggleDone }
      />
      <TaskAddForm onTaskAdded={ addTask } />
    </div>
  );
}

export default App
