import React, { createContext, useState } from 'react'

// will be used by consumers of context
export const CountContext = createContext() // will be used by consumers of context

export default function CountProvider(props) {
  // create some state and callbacks
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  const dev = () => setCount(count - 1)

}
