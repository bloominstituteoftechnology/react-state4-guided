import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const TodosContext = createContext()

export default function TodosProvider(props) {
  const [todos, setTodos] = useState([])

  async function fetchTodos() {
    try {

    } catch (err) {

    }
  }
}
