import React, { useContext } from 'react'

import { CountContext } from '../contexts/count'

export default function Todo(props) {
  const { todo, toggleStatus } = props
  const { count } = useContext(CountContext)
  return (
    <div onClick={toggleStatus(todo.id)} className="todo">
      {todo.name} {count} times {todo.completed ? ' ✔️' : ''}
    </div>
  )
}
