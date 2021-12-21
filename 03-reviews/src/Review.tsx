import React, { useState } from 'react'
import reviews from './data'
import { IReview } from './types'
import {
  FaChevronLeft,
  FaChevronRight,
  FaPeopleArrows,
  FaQuoteRight,
} from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const review: IReview = reviews[index]

  const checkNumber = (number: number) => {
    if (number > reviews.length - 1) return 0
    if (number < 0) return reviews.length - 1
    return number
  }

  const prevPerson = () => {
    setIndex((index) => {
      return checkNumber(index - 1)
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      return checkNumber(index + 1)
    })
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    if (randomNumber === index) randomNumber = index + 1
    setIndex(checkNumber(randomNumber))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={review.image} alt={review.name} className='person-img'></img>
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <h4 className='author'>{review.name}</h4>
      <p className='job'>{review.job}</p>
      <p className='info'>{review.text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
