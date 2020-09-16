import React from 'react'
import { Section, ImagesContainer } from './styles'
import { tecnologies } from '../../data/tecnologies'
import { Badge } from '../Badge'
import { Typography } from '../Typography'

export const Tecnologies = () => {
  return (
    <Section>
      <Typography mb='16px' value='Tengo conocimientos en:' variant='title3' />
      <ImagesContainer>
        {tecnologies.map((badge, index) => (
          <Badge {...badge} key={index} />
        ))}
      </ImagesContainer>
    </Section>
  )
}
