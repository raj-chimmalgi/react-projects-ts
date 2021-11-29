import React from 'react'
import Tour from './Tour'
import { ITour } from './types'

export interface ToursProps {
  tours: Array<ITour>
  handleRemoveTour(id: string): void
}

const Tours = (props: ToursProps) => {
  const { tours, handleRemoveTour } = props

  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} handleRemoveTour={handleRemoveTour} />
        ))}
      </div>
    </section>
  )
}

export default Tours
