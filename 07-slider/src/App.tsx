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
  const [people, setPeople] = useState<IPerson[]>(data)
  const [index, setIndex] = useState(0)

  const next = () => {
    index < people.length - 1 ? setIndex(index + 1) : setIndex(0)
  }
  const previous = () => {
    index > 0 ? setIndex(index - 1) : setIndex(0)
  }

  useEffect(() => {
    setInterval(next, 4000)
  }, [])

  return (
    <main style={{ textAlign: 'center' }}>
      <h1>Reviews</h1>
      <Review person={people[index]} />
      <span>
        <button onClick={previous}>&lt;</button>
        <button onClick={next}>&gt;</button>
      </span>
    </main>
  )
}

export default App
