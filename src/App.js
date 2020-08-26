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
    const newTodoTasks = [...todoTasks.slice(0, idx), newTask, ...todoTasks.slice(idx + 1)]
    setTodoTasks(newTodoTasks)
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

  const addTask = label => {
    const newItem = createTodoTask(label)
    const newTodoTasks = [...todoTasks, newItem]
    setTodoTasks(newTodoTasks)
  }

  const deleteTask = id => {
    const newTodoTasks = [...todoTasks]
    const idx = newTodoTasks.findIndex((el) => el.id === id)
    newTodoTasks.splice(idx, 1)
    setTodoTasks(newTodoTasks)
  }

  const editTask = (label, id) => {
    const newTodoTasks = [...todoTasks]
    newTodoTasks[id - 1] = {...todoTasks[id - 1], label: label }
    setTodoTasks(newTodoTasks)
  }

  const visibleTasks = filterTasks(todoTasks, filter)

  return (
    <div className="App">
      <AppHeader />
      <TaskStatusFilter
        filter={ filter }
        onFilterChange={ filter => setFilter(filter) } 
      />
      <TaskList 
        tasks={ visibleTasks } 
        onToggleDone={ onToggleDone }
        onDeleted={ deleteTask }
        onEdit={ editTask }
      />
      <TaskAddForm onTaskAdded={ addTask } />
    </div>
  );
}

export default App
