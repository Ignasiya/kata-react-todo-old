import AppHeader from 'components/Header/app-header'
import SearchPanel from 'components/SearchPanel/search-panel'
import TodoList from 'components/TodoList/todo-list'
import ItemStatusFilter from 'components/StatusFilter/item-status-filter'
import './todo-form.css'

const TodoForm = () => {
  const todoData = [
    { id: 1, label: 'Buy milk', important: true },
    { id: 2, label: 'Clean the house', important: false },
    { id: 3, label: 'Cook dinner', important: true },
    { id: 4, label: 'Buy groceries', important: false }
  ]

  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList items={todoData}>
        <h3>Header</h3>
      </TodoList>
    </div>
  )
}

export default TodoForm
