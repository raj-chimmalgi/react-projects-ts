import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface IQuestionProps {
  id: number
  title: string
  info: string
}

function Question({ id, title, info }: IQuestionProps) {
  const [isOpen, setIsOpen] = useState<Boolean>(false)

  return (
    <article className='question'>
      <header></header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isOpen && <p>{info}</p>}
    </article>
  )
}

export default Question
