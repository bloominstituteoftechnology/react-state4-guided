import React, { useState, createContext } from 'react'

export const CountContext = createContext()

export default function CountProvider(props) {
  const [count, setCount] = useState(0)
  const inc = () => setCount(st => st + 1)
  const dec = () => setCount(st => st - 1)

  return (
    <CountContext.Provider value={{ }}>

    </CountContext.Provider>

  )

}
