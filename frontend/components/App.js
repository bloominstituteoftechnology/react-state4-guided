import React, { useState, useContext } from 'react'
import Form from './Form'
import TodoList from './TodoList'
import { CountContext } from '../contexts/count'
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
  const { todos, postTodo, patchTodo } = useContext(TodosContext)

  const onChange = ({ name, value }) => {
    setState({ ...state, form: { [name]: value } })
  }
  const onSubmit = () => {
    postTodo(state.form.name)
    setState({ ...state, form: initialForm })
  }
  const toggleShouldShow = () => {
    setState({
      ...state,
      displayCompleteds: !state.displayCompleteds
    })
  }
  const toggleStatus = id => () => {
    patchTodo(id)
  }
  return (
    <div>
      <h1>Todo App</h1>
      <div>
        {count}
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
      </div>
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
