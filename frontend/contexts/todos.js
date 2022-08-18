import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

const url = 'http://localhost:9000/'

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  async function fetchTodos() {
    try {
      const res = await axios.get(url)
    } catch (err) {

    }
  }
}
