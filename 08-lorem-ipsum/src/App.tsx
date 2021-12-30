import React, { useState } from 'react'
import data from './data'
import Lorem from './Lorem'

function App() {
  const [lorem, setLorem] = useState<string[]>([])
  const [numPara, setNumPara] = useState<number>(0)

  const generateLorem = () => {
    if (numPara <= data.length) setLorem(data.slice(0, numPara))
  }

  return (
    <main style={{ textAlign: 'center' }}>
      <h3>TIRED OF BORING LOREM IPSUM?</h3>
      <section>
        <span>
          <label>Paragraphs: </label>
          <input
            type='number'
            min='0'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNumPara(Number(e.target.value))
            }></input>
          <button onClick={generateLorem}>GENERATE</button>
        </span>
      </section>
      <Lorem lorem={lorem} />
    </main>
  )
}

export default App
