import React from 'react'
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

function List({
  list,
  removeItem,
  handleEditButton,
}: {
  list: string[]
  removeItem(index: number): void
  handleEditButton(index: number): void
}) {
  return (
    <section>
      <span>
        <ul>
          {list.length !== 0 &&
            list.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    {item}
                    <button onClick={() => handleEditButton(index)}>
                      <AiOutlineEdit />
                    </button>
                    <button onClick={() => removeItem(index)}>
                      <AiOutlineDelete />
                    </button>
                  </span>
                </div>
              )
            })}
        </ul>
      </span>
    </section>
  )
}

export default List
