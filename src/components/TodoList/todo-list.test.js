import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoList from 'components/TodoList'

jest.mock('components/TodoListItem', () => {
  return ({ label }) => <span>{label}</span>
})

describe('Todo компонент', () => {
  const items = [
    { id: 1, label: 'Task 1', important: false },
    { id: 2, label: 'Task 2', important: true }
  ]

  test('рендер TodoList списка', () => {
    render(<TodoList items={items} />)

    expect(screen.getByText(/Task 1/i)).toBeInTheDocument()
    expect(screen.getByText(/Task 2/i)).toBeInTheDocument()
  })

  test('рендер дочернего элемента', () => {
    render(
      <TodoList items={items}>
        <p>Custom Child</p>
      </TodoList>
    )

    expect(screen.getByText(/Custom Child/i)).toBeInTheDocument()
  })

  test('количество элементов списка', () => {
    render(<TodoList items={items} />)

    const listItems = screen.getAllByRole('listitem')
    expect(listItems).toHaveLength(items.length)
  })
})
