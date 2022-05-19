# Advanced State Management Guided Project PART 4

## Requirements

- Node 16.x
- NPM 8.x (update NPM executing `npm i -g npm`)
- Postman (download the desktop version [here](https://www.postman.com/downloads/))
- Chrome >= 100.x

Other browser/Node/NPM configurations might work but haven't been tested.

## Set Up

- Clone and `npm install`. DO NOT FORK! (Or the "ketchup" script won't work.)
- Launch the project on a development server executing `npm run dev`.
- Visit your app by navigating to `http://localhost:3000` with Chrome.
- Reset to the instructor's remote branch executing `npm run ketchup`.

## Endpoints

The following endpoints exist in this project:

- `GET http://localhost:9000/api/todos`
  1. Expects no payload
  2. Makes no changes on the server
  3. responds with `200 OK` and a payload with all the todos
- `POST http://localhost:9000/api/todos`
  1. Expects a payload with `name` (string) and optional `completed` (boolean)
  2. Creates a new todo on the server
  3. responds with `201 Created` and a payload with the new todo
- `PATCH http://localhost:9000/api/todos/:id`
  1. Expects no payload
  2. Flips the `completed` property on the todo with the id provided in the URL
  3. Responds with `200 OK` and the updated todo

The API will make other responses if the requests are defective:

- `422 Unprocessable Entity` when a required payload is missing or incorrect
- `404 Not Found` when the requested todo does not exist, or when the URL is incorrect

## Working with Context

- 🔥 STEP 1 - Decide what data, state, callbacks etc you wish to make globally available.
- 🔥 STEP 2 - Create a module for the context you wish to create:
  - 2.1 - Import the required dependencies:

    ```js
    // contexts/count.js
    import React, { useState, createContext } from 'react'
    ```

  - 2.2 - Instantiate a context (capitalize the name) and export it by name:

    ```js
    export const CountContext = createContext()
    ```

  - 2.3 - Declare a component (capitalize the name) and default export it:

    ```js
    export default function CountProvider(props) {

    }
    ```

  - 2.4 - Create your state and callbacks (although it could be any data):

    ```js
    export default function CountProvider(props) {
      const [count, setCount] = useState(0)
      const inc = () => setCount(count + 1)
      const dec = () => setCount(count - 1)
    }
    ```

  - 2.5 - Return a context provider using the context object:

    ```js
    export default function CountProvider(props) {
      const [count, setCount] = useState(0)
      const inc = () => setCount(count + 1)
      const dec = () => setCount(count - 1)
      return (
        <CountContext.Provider value={{ count, inc, dec }}>
          {props.children}
        </CountContext.Provider>
      )
    }
    ```

- 🔥 STEP 3 - Near the top of your app:
  - 3.1 - Import your count provider:

    ```js
    // App.js
    import CountProvider from '../contexts/count'
    ```

  - 3.2 - Wrap any part of the component tree with your context provider:

    ```js
    // App.js
    export default function App() {
      return (
        <CountProvider>
          <>
            <Foo />
            <Bar />
          </>
        </CountProvider>
      )
    }
    ```

- 🔥 STEP 4 - Inside any (functional) component that wishes to consume context:
  - 4.1 - Import your context object and the context hook:

    ```js
    import React, { useContext } from 'react'
    import { CountContext } from '../contexts/count'
    ```

  - 4.2 - Use the hook to get the data:

    ```js
    export default function SomeRandomComponent(props) {
      const dataFromContext = useContext(CountContext)
      const { count, inc, dec } = dataFromContext
      return (
        <div>
          <div>{count}</div>
          <button onClick={inc}>INC</button>
          <button onClick={dev}>DEC</button>
        </div>
      )
    }
    ```
