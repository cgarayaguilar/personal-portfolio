import React from 'react'
import { Typography } from '../Typography'
import perfil from '../../images/perfil.png'
import phone from '../../images/phone.svg'
import address from '../../images/address.svg'
import email from '../../images/email.svg'
import { Section, Perfil, TextContainer, Links } from './styles'

const description = `Soy un desarrollador front-end con mucha pasión por el diseño, disfruto de aprender cosas nuevas cada día, busco constantemente nuevos retos y desafíos que me permitan avanzar en mi carrera como programador.
  La responsabilidad, el trabajo en equipo, adaptabilidad a los cambios son cosas que me definen a la hora de afrontar cualquier reto profesional.`

export const AboutMe = () => {
  return (
    <Section id='about'>
      <Perfil>
        <img src={perfil} alt='perfil' />
      </Perfil>

      <TextContainer>
        <Typography value='Sobre mi' variant='title3' />

        <Typography mt='20px' mb='40px' value={description} variant='body2' />
        <Links>
          <a href='tel:+50577548757'>
            <img src={phone} alt='telefono' />
          </a>
          <a href='mailto:cgaray.aguilar97@gmail.com'>
            <img src={email} alt='correo' />
          </a>
          <a href='https://goo.gl/maps/o2oo1YFQg4LcQU9z9'>
            <img src={address} alt='direccion' />
          </a>
        </Links>
      </TextContainer>
    </Section>
  )
}
