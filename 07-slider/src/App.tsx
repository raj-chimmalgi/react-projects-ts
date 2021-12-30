import React, { useState, useEffect } from 'react'
import data from './data'
import Review from './Review'

export interface IPerson {
  id: number
  image: string
  name: string
  title: string
  quote: string
}

function App() {
  const [idx, setIdx] = useState<number>(0)

  const handleNext = () => (idx < data.length - 1 ? setIdx(idx + 1) : setIdx(0))

  const handlePrevious = () =>
    idx !== 0 ? setIdx(idx - 1) : setIdx(data.length - 1)

  useEffect(() => {
    let id = setTimeout(handleNext, 4000)
    return () => {
      clearTimeout(id)
    }
  }, [idx])

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Reviews</h1>
      <span>
        <button onClick={handlePrevious}>&lt;</button>
        <button onClick={handleNext}>&gt;</button>
      </span>
      <Review person={data[idx]} />
    </main>
  )
}

export default App
