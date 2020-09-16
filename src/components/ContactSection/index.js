import React from 'react'
import { Typography } from '../Typography'
import { Button } from '../Button'
import ilustration from '../../images/work-image.jpg'
import { ImageContainer, Section, TextContainer } from './styles'

export const ContactSection = () => {
  return (
    <Section>
      <ImageContainer>
        <img src={ilustration} alt='ilustracion' />
      </ImageContainer>
      <TextContainer>
        <Typography mb='8  px' value='Consulta de trabajo' variant='title3' />
        <Typography
          mb='32px'
          value='Trabajemos juntos y te ayudaré con todo lo mejor de mi'
          variant='body2'
        />

        <Button />
      </TextContainer>
    </Section>
  )
}
