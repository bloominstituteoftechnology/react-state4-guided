import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  function fetchTodos() {
    axios.get('http://localhost:9000/api/todos')
      .then((res) => {
        setTodos(res.data.data)
      })
      .catch((err) => {
        debugger
      })
  }

  function postTodo(name) {
    axios.post('http://localhost:9000/api/todos', { name })
      .then((res) => {
        setTodos(todos.concat(res.data.data))
      })
      .catch((err) => {
        debugger
      })
  }

  function patchTodo(id) {
    axios.patch('http://localhost:9000/api/todos/' + id)
      .then((res) => {
        // fetchTodos() /// Lisa approach
        setTodos(todos.map(td => {
          return 
        }))
      })
      .catch((err) => {
        debugger
      })
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <TodosContext.Provider value={{ todos, fetchTodos, postTodo, patchTodo }}>
      {props.children}
    </TodosContext.Provider>
  )
}
