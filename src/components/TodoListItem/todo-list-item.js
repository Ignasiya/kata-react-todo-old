import './todo-list-item.css'

const TodoListItem = ({ label, done, important, onDeleted, onToggleImportant, onToggleDone }) => {
  let classNames = 'todo-list-item'

  if (done) {
    classNames += ' done'
  }

  if (important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span className='todo-list-item-label' onClick={onToggleDone}>
        {label}
      </span>

      <button
        type='button'
        className='btn btn-outline-success btn-sm float-end'
        onClick={onToggleImportant}
      >
        <i className='bi bi-exclamation' />
      </button>

      <button type='button' className='btn btn-outline-danger btn-sm float-end' onClick={onDeleted}>
        <i className='bi bi-trash' />
      </button>
    </span>
  )
}

export default TodoListItem
