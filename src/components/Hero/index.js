import React, { useContext, useEffect, useState } from 'react'
import { Main, TextContainer, ImageContainer, Title } from './styles'
import { ThemeContext } from 'styled-components'
import { Typography } from '../Typography'
import { Button } from '../Button'
import heroImage from '../../images/hero-image.jpg'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import Typed from 'typed.js'

export const Hero = () => {
  const theme = useContext(ThemeContext)
  const [margin, setMargin] = useState({ top: '0', bottom: '0' })
  const windowWidth = useWindowWidth()

  useEffect(() => {
    windowWidth < 768
      ? setMargin({ top: '2px', bottom: '32px' })
      : setMargin({ top: '16px', bottom: '36px' })
  }, [windowWidth])

  useEffect(() => {
    new Typed('.typed', {
      stringsElement: '#strings', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: '|', // Caracter para el cursor
      contentType: 'html' // 'html' o 'null' para texto sin formato
    })
  }, [])

  return (
    <Main>
      <TextContainer theme={theme}>
        <Typography mt='32px' value='Soy Cesar Garay ' variant='title3' />
        <Title>
          <span className='typed'></span>
        </Title>
        <Typography
          mt={margin.top}
          mb={margin.bottom}
          variant='body'
          value='Soy un desarrollador front-end con mucha pasión por el diseño.
          '
        />

        <div id='strings'>
          <Typography value='Desarrollador Front-end' variant='title' />
          <Typography value='Diseñador UI' variant='title' />
        </div>

        <Button />
      </TextContainer>

      <ImageContainer>
        <img src={heroImage} alt='Ilustration' />
      </ImageContainer>
    </Main>
  )
}
