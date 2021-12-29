import React, { useState } from 'react'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState<Values>('#a56d6d')

  return (
    <main style={{ backgroundColor: color }}>
      <span>
        <h3>Color Generator</h3>
        <input type='text' value={color}></input>
      </span>
    </main>
  )
}

export default App
