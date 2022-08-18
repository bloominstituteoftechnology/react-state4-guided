import React, { useState, createContext } from 'react'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  function fetchTodos() {
    // use axios to hit the API
    // use async/await
  }
}
