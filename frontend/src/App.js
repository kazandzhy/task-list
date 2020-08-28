import React, { useState, useEffect } from 'react'
import { AppHeader, 
         TaskStatusFilter, 
         TaskList, 
         TaskAddForm
       } from './components'
import TaskListDataService from './services/taskList.service'

import './App.css'

const App = () => {

  const [ todoTasks, setTodoTasks ] = useState([])
  const [ filter, setFilter ] = useState('all')
  const [ maxId, setMaxId ] = useState(100)

  useEffect(() => {
    getAllTasks()
  }, [])

  const getAllTasks = () => {
    TaskListDataService.getAll()
    .then(response => {
      setTodoTasks(response.data)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const createTodoTask = label => {
    setMaxId(prevId => prevId + 1)

    let data = {
      id: maxId,
      label: label,
      done: false
    }

    TaskListDataService.createTask(data)
    .catch(e => {
      console.log(e)
    })
    
    return data
  }

  const onToggleDone = id => {
    const idx = todoTasks.findIndex((el) => el.id === id)
    const oldTask = todoTasks[idx]

    let data = {
      done: !oldTask['done']
    }

    TaskListDataService.updateTask(id, data)
    .then(() => {
      const newTask = { ...oldTask, 'done': !oldTask['done'] }
      const newTodoTasks = [...todoTasks.slice(0, idx), newTask, ...todoTasks.slice(idx + 1)]
      setTodoTasks(newTodoTasks)
    })
    .catch(e => {
      console.log(e)
    })    
  }

  const addTask = label => {
    const newItem = createTodoTask(label)
    const newTodoTasks = [...todoTasks, newItem]
    setTodoTasks(newTodoTasks)
  }

  const deleteTask = id => {
    TaskListDataService.deleteTask(id)
    .then(() => {
      const newTodoTasks = [...todoTasks]
      const idx = newTodoTasks.findIndex((el) => el.id === id)
      newTodoTasks.splice(idx, 1)
      setTodoTasks(newTodoTasks)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const updateTask = (label, id) => {

    let data = {
      label: label
    }

    TaskListDataService.updateTask(id, data)
    .then(() => { 
      const newTodoTasks = [...todoTasks]
      const idx = newTodoTasks.findIndex((el) => el.id === id)
      newTodoTasks[idx] = {...todoTasks[idx], label: label }
      setTodoTasks(newTodoTasks)
    })
    .catch(e => {
      console.log(e)
    })
  }

  const filterTasks = (tasks, filter) => {
    switch (filter) {
      case "all":
        return tasks
      case "pending":
        return tasks.filter((task) => !task.done)
      case "completed":
        return tasks.filter((task) => task.done)
      default:
        return tasks
    }
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
        onUpdate={ updateTask }
      />
      <TaskAddForm onTaskAdded={ addTask } />
    </div>
  )
}

export default App
