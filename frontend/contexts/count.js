import React, { createContext, useState } from 'react'

// will be used by consumers of context
export const CountContext = createContext() // will be used by consumers of context

export default function CountProvider(props) {
  // create some state and callbacks
  // components will be able to use count, inc, dec
  const [count, setCount] = useState(0)
  const inc = () => setCount(count + 1)
  const dec = () => setCount(count - 1)

  const foo = 'foo'

  return (
    <CountContext.Provider value={{ count, inc, dec, foo }}>
      {props.children}
    </CountContext.Provider>
  )
}
