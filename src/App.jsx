
import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Count count={count} />
    </div>
  )
}

function Count({ count }) {
  return (
    <div>
      Count: {count}
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App
