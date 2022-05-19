import React, { useContext } from 'react'

import { CountContext } from '../contexts/count'

export default function Todo(props) {
  const { todo, toggleStatus } = props
  return (
    <div onClick={toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? ' ✔️' : ''}
    </div>
  )
}
