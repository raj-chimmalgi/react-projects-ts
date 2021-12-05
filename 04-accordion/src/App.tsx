import React from 'react'
import data from './data'
import Question from './Question'

interface IQuestion {
  id: number
  title: string
  info: string
}

const questions: Array<IQuestion> = data

function App() {
  return (
    <>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <>
                <Question {...question} />
              </>
            )
          })}
        </section>
      </div>
    </>
  )
}

export default App
