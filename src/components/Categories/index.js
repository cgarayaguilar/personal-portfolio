import React, { useState, useEffect } from 'react'
import { categories } from '../../data/categories'
import { CategoriesContainer, CategoriesList, Category } from './styles'

export const Categories = ({ onClick }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    categories && setData(categories)
  }, [])

  const handleClick = e => {
    e.preventDefault()

    const newCategories = data.map(category => {
      category.active = false

      if (category.name === e.target.name) {
        category.active = true
      }

      return category
    })

    setData(newCategories)

    onClick(e)
  }

  if (data)
    return (
      <CategoriesContainer>
        <CategoriesList id='categories'>
          {data.map((category, index) => (
            <Category
              name={category.name}
              active={category.active}
              href='#'
              key={index}
              onClick={handleClick}
            >
              {category.name}
            </Category>
          ))}
        </CategoriesList>
      </CategoriesContainer>
    )

  return 'Cargando...'
}
