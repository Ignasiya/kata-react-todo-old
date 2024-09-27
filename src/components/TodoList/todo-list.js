import React from 'react'
import TodoListItem from 'components/TodoListItem/todo-list-item'

const TodoList = () => {
  const items = ['Buy milk', 'Clean the house', 'Cook dinner', 'Buy groceries']
  return (
    <ul>
      {items.map(item => (
        <li>
          <TodoListItem name={item} />
        </li>
      ))}
    </ul>
  )
}

export default TodoList
