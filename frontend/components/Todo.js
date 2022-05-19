import React from 'react'

export default function Todo(props) {
  const { todo, toggleStatus } = props
  return (
    <div onClick={toggleStatus(todo.id)} className="todo">
      {todo.name}{todo.completed ? ' ✔️' : ''}
    </div>
  )
}
