import React from 'react'
import { Item } from './interfaces'

function Menu({ items }: Array<Item>) {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
          </article>
        )
      })}
    </div>
  )
}

export default Menu
