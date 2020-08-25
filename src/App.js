import React, { useState } from 'react'
import { AppHeader, 
         ItemStatusFilter, 
         TaskList, 
         ItemAddForm,
         taskListItems 
       } from './components'

import './App.css'

const App = () => {

  const [ todoItems, setTodoItems ] = useState(taskListItems)

  return (
    <div className="App">
      <AppHeader />
      <ItemStatusFilter />
      <TaskList items={ todoItems } />
      <ItemAddForm />
    </div>
  );
}

export default App
