import { Component } from 'react'
import AppHeader from 'components/Header'
import SearchPanel from 'components/SearchPanel'
import TodoList from 'components/TodoList'
import ItemStatusFilter from 'components/StatusFilter'
import ItemAddForm from 'components/AddForm'
import './todo-form.css'

export default class TodoForm extends Component {
  maxId = 100

  state = {
    todoData: [
      this.createTodoItem('Buy milk'),
      this.createTodoItem('Clean the house'),
      this.createTodoItem('Cook dinner'),
      this.createTodoItem('Buy groceries')
    ]
  }

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  onDeleted = id => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(item => item.id !== id)
    }))
  }

  onItemAdded = text => {
    const newItem = this.createTodoItem(text)

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem]
    }))
  }

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(item => item.id === id)
    const oldItem = arr[idx]

    const updatedItem = { ...oldItem, [propName]: !oldItem[propName] }
    return [...arr.slice(0, idx), updatedItem, ...arr.slice(idx + 1)]
  }

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  render() {
    const { todoData } = this.state
    const done = todoData.filter(item => item.done).length
    const todo = todoData.length - done
    console.log(this)

    return (
      <div className='todo-app'>
        <AppHeader todo={todo} done={done} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          items={todoData}
          onDeleted={this.onDeleted}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        >
          <h3>Header</h3>
        </TodoList>

        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    )
  }
}
