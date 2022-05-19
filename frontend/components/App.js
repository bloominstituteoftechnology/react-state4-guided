import React, { useState, useContext } from 'react'
import { CountContext } from '../contexts/count'
import Form from './Form'
import TodoList from './TodoList'
import { TodosContext } from '../contexts/todos'

const initialForm = {
  name: '',
}
const initialState = {
  form: initialForm,
  displayCompleteds: true,
}

export default function App() {
  const [state, setState] = useState(initialState)
  const { count, inc, dec } = useContext(CountContext)
  const { todos, postTodo } = useContext(TodosContext)

  const onChange = ({ name, value }) => {
    setState({ ...state, form: { [name]: value } })
  }
  const onSubmit = () => {
    postTodo(state.form.name)
  }
  const toggleShouldShow = () => {
    setState({
      ...state,
      displayCompleteds: !state.displayCompleteds
    })
  }
  const toggleStatus = id => () => {

  }
  return (
    <div>
      <h1>Todo App</h1>
      <div>Count is {count}</div>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <TodoList
        todos={todos}
        displayCompleteds={state.displayCompleteds}
        toggleStatus={toggleStatus}
      />
      <Form
        onSubmit={onSubmit}
        onChange={onChange}
        toggleShouldShow={toggleShouldShow}
        displayCompleteds={state.displayCompleteds}
        disabled={!state.form.name.length}
        values={state.form}
      />
    </div>
  )
}
