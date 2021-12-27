import React from 'react'
import { IExperience } from './App'

function Experience({ experience }: { experience: IExperience }) {
  return (
    <section>
      <div>
        <h3>{experience.title}</h3>
        <h3>{experience.company}</h3>
        <p>{experience.dates}</p>
      </div>
      <ul>
        {experience.duties.map((duty) => {
          return <li>{duty}</li>
        })}
      </ul>
    </section>
  )
}

export default Experience
