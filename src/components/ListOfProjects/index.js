import React, { useEffect, useRef } from 'react'
import { Typography } from '../Typography'
import './styles.css'
import { projects } from '../../data/projects'

import { Project } from '../Project'
import Muuri from 'muuri'
import { Categories } from '../Categories'

export const ListOfProjects = () => {
  const grid = useRef()

  useEffect(() => {
    grid.current = new Muuri('.grid', {
      layout: {
        fillGaps: false,
        horizontal: false,
        alignRight: false,
        alignBottom: false,
        rounding: false
      }
    })
  }, [])

  useEffect(() => {
    const loadGrid = () => {
      grid.current.refreshItems().layout()
      document.getElementById('grid').classList.add('projects-loaded')
    }

    window.addEventListener('load', loadGrid)

    // We return a function to unsubscribe from the event
    return () => window.removeEventListener('load', loadGrid)
  }, [])

  const handleClickCategory = e => {
    const category = e.target.innerHTML.toLowerCase() //get category name

    category === 'todos'
      ? grid.current.filter('[data-category]')
      : grid.current.filter(`[data-category="${category}"]`)
  }

  return (
    <section className='section-grid' id='projects'>
      <div className='title-container'>
        <Typography value='Proyectos' variant='title2' />
        <Categories onClick={handleClickCategory} />
      </div>

      <div className='grid' id='grid'>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}
