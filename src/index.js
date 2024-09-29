import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import TodoForm from 'layouts/TodoForm/todo-form'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <TodoForm />
  </React.StrictMode>
)

reportWebVitals(console.log)
