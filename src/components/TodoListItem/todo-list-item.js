import { Component } from 'react'
import './todo-list-item.css'

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  }

  handleClick = () => {
    this.setState(({ done }) => {
      return {
        done: !done
      }
    })
  }

  onMarkImportant = () => {
    this.setState(({ important }) => {
      return {
        important: !important
      }
    })
  }

  render() {
    const { label, onDeleted } = this.props
    const { done, important } = this.state

    let classNames = 'todo-list-item'

    if (done) {
      classNames += ' done'
    }

    if (important) {
      classNames += ' important'
    }

    return (
      <span className={classNames}>
        <span className='todo-list-item-label' onClick={this.handleClick}>
          {label}
        </span>

        <button
          type='button'
          className='btn btn-outline-success btn-sm float-end'
          onClick={this.onMarkImportant}
        >
          <i className='bi bi-exclamation' />
        </button>

        <button
          type='button'
          className='btn btn-outline-danger btn-sm float-end'
          onClick={onDeleted}
        >
          <i className='bi bi-trash' />
        </button>
      </span>
    )
  }
}
