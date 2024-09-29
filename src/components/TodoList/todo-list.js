import TodoListItem from 'components/TodoListItem'
import './todo-list.css'

const TodoList = ({ items, children }) => {
  return (
    <ul className='list-group todo-list'>
      {children}
      {items.map(item => {
        const { id, ...todo } = item

        return (
          <li className='list-group-item' key={id}>
            <TodoListItem {...todo} />
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
