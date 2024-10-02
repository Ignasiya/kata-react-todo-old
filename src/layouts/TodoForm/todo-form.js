import { Component } from 'react'
import AppHeader from 'components/Header'
import SearchPanel from 'components/SearchPanel'
import TodoList from 'components/TodoList'
import ItemStatusFilter from 'components/StatusFilter'
import ItemAddForm from 'components/AddForm'
import './todo-form.css'

export default class TodoForm extends Component {
  state = {
    todoData: [
      { id: 1, label: 'Buy milk', important: true },
      { id: 2, label: 'Clean the house', important: false },
      { id: 3, label: 'Cook dinner', important: true },
      { id: 4, label: 'Buy groceries', important: false }
    ]
  }

  maxId = this.state.todoData.length + 1

  onDeleted = id => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter(item => item.id !== id)
    }))
  }

  onItemAdded = text => {
    const newItem = {
      id: this.maxId++,
      label: text,
      important: false
    }

    this.setState(({ todoData }) => ({
      todoData: [...todoData, newItem]
    }))
  }

  render() {
    return (
      <div className='todo-app'>
        <AppHeader todo={1} done={3} />
        <div className='top-panel d-flex'>
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList items={this.state.todoData} onDeleted={this.onDeleted}>
          <h3>Header</h3>
        </TodoList>

        <ItemAddForm onItemAdded={this.onItemAdded} />
      </div>
    )
  }
}
