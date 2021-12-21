import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './data'
import { Item } from './interfaces'

const menu: Item[] = data
const menuCategories = [
  'all',
  ...Array.from(new Set(menu.map((items) => items.category))),
]

function App() {
  const [menuItems, setMenuItems] = useState<Item[]>(menu)
  const [categories, setCategories] = useState<string[]>(menuCategories)

  const filterItems = (category: string) => {
    if (category === 'all') return setMenuItems(menu)
    const newItems = menu.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  return (
    <>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h2>our menu</h2>
            <div className='underline'></div>
          </div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  )
}

export default App
