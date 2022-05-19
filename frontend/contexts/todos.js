import React, { createContext, useState } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  function fetchTodos() {
    axios.get('http://localhost:9000/api/todos')
      .then((res) => {
        setTodos(res.d)
      })
      .catch((err) => {

      })
  }
}
