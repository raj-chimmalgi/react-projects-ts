import React from 'react'

interface CategoriesProps {
  filterItems: (category: string) => void
  categories: string[]
}

function Categories(props: CategoriesProps) {
  const { filterItems, categories } = props

  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            key={category}
            className='filter-btn'
            onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
