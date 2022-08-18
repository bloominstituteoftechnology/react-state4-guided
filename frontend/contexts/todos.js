import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

const url = 'http://localhost:9000/api/todos/' // end with slash

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  async function fetchTodos() {
    try {
      const res = await axios.get(url)
      setTodos(res.data.data)
    } catch (err) {
      debugger
    }
  }

  async function postTodo(name) {
    try {
      const res = await axios.post(url, { name })
      setTodos([...todos, res.data.data])
    } catch (err) {
      debugger
    }
  }

  async function patchTodo(id) {
    try {
      const res = await axios.patch(url)
    } catch (err) {
      debugger
    }
  }
}
