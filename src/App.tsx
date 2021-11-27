import React, { useState } from 'react'
import { data } from './data'

function App() {
  const [people, setPeople] = useState(data)

  return (
    <>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {people.map((person) => {
          return (
            <>
              <article key={person.id} className='person'>
                <img src={person.image} alt={person.name}></img>
                <div>
                  <h4>{person.name}</h4>
                  <p>{person.age} years</p>
                </div>
              </article>
            </>
          )
        })}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </>
  )
}

export default App
