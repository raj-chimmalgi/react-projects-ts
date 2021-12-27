import React from 'react'
import { IPerson } from './App'

function Review({ person }: { person: IPerson }) {
  return (
    <div>
      <img
        src={person.image}
        alt={person.name}
        style={{ height: 50, width: 50 }}
      />
      <h3>{person.name}</h3>
      <p>{person.title}</p>
      <section>
        <p>{person.quote}</p>
      </section>
    </div>
  )
}

export default Review
