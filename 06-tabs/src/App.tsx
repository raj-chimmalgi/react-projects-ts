import React, { useState, useEffect } from 'react'
import Experience from './Experience'

export interface IExperience {
  id: number
  order: number
  title: string
  duties: string[]
  company: string
  dates: string
}

function App() {
  const [experiences, setExperiences] = useState<IExperience[]>([])
  const [index, setIndex] = useState(0)

  const fetchData = async () => {
    const URL = 'https://course-api.com/react-tabs-project'

    await fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setExperiences(data)
        getIndex()
      })
      .catch((err) => console.log(err.message))
  }

  const getIndex = (id: number = 0) => {
    const index =
      experiences.length !== 0
        ? experiences.findIndex((experience) => experience.id === id)
        : 0

    setIndex(index)
  }

  const getExperience = (): IExperience => {
    console.log(experiences[index])
    if (experiences.length !== 0) return experiences[index]

    const ex = {} as IExperience
    return ex
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <h1>Experience</h1>
      <section>
        <ul>
          {experiences.length !== 0 &&
            experiences.map((experience) => {
              return (
                <li key={experience.id} onClick={() => getIndex(experience.id)}>
                  {experience.company}
                </li>
              )
            })}
        </ul>
      </section>
      {experiences.length !== 0 && (
        <Experience experience={getExperience()}></Experience>
      )}
    </main>
  )
}

export default App
