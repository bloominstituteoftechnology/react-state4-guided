import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo, toggleStatus } = this.props
    return (
      <div onClick={toggleStatus(todo.id)} className="todo">
        {todo.name}{todo.completed ? ' ✔️' : ''}
      </div>
    )
  }
}
