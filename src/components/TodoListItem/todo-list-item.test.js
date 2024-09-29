import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TodoListItem from 'components/TodoListItem'

describe('TodoListItem компонент', () => {
  test('рендер с пропсом по умолчанию', () => {
    render(<TodoListItem label='Test Todo' />)

    const todoElement = screen.getByText('Test Todo')
    expect(todoElement).toBeInTheDocument()

    const btn = screen.getAllByRole('button')
    expect(btn).toHaveLength(2)

    expect(todoElement).toHaveStyle('color: black')
    expect(todoElement).toHaveStyle('font-weight: normal')
  })

  test('рендер с пропсом important = true', () => {
    render(<TodoListItem label='Important Todo' important={true} />)

    const todoElement = screen.getByText('Important Todo')
    expect(todoElement).toBeInTheDocument()

    const btn = screen.getAllByRole('button')
    expect(btn).toHaveLength(2)

    expect(todoElement).toHaveStyle('color: steelblue')
    expect(todoElement).toHaveStyle('font-weight: bold')
  })
})
