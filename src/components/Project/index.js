import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Typography } from '../Typography'
import PropTypes from 'prop-types'

import './styles.css'

export const Project = ({
  image,
  title,
  category,
  labels,
  description,
  urlOfSite,
  urlOfCode
}) => {
  return (
    <div
      className='item'
      data-category={category}
      data-label={labels}
      data-description={description}
    >
      <div className='item-content'>
        <figure className='image-container'>
          <img src={image} alt={title} />
        </figure>

        <div className='text-container'>
          <a href={urlOfSite}>
            <Typography value={title} variant='title4' />
          </a>
          <Typography mt='8px' value={description} variant='body3' />
          <hr />
          <div className='links-container'>
            <a href={urlOfSite}>
              <FaExternalLinkAlt /> Ir al sitio
            </a>
            <a href={urlOfCode}>
              <FaGithub /> Ir al codigo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  labels: PropTypes.array,
  description: PropTypes.string.isRequired,
  urlOfSite: PropTypes.string.isRequired,
  urlOfCode: PropTypes.string.isRequired
}
