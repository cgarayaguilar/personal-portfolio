import React, { useState, useContext, useEffect } from 'react'

import logo from '../../images/computing-code 2.svg'

import { Container, NavBar, Overlay } from './styles'
import { useWindowWidth } from '../../hooks/useWindowWidth'
import { Spin as HamburgerMenu } from 'hamburger-react'
import { ThemeContext } from 'styled-components'
import { Context } from '../../context'

export const AppBar = () => {
  const theme = useContext(ThemeContext)
  const [showMenu, setShowMenu] = useState(false)
  const windowWidth = useWindowWidth()
  const { openModal } = useContext(Context)

  useEffect(() => {
    windowWidth > 768 ? setShowMenu(true) : setShowMenu(false)
  }, [windowWidth])

  return (
    <Container id='home'>
      <img src={logo} alt='Logo' />

      <Overlay visible={showMenu} theme={theme}>
        <NavBar theme={theme}>
          <a href='#home'>Inicio</a>
          <a href='#about'>Sobre mi</a>
          <a href='#projects'>Proyectos</a>
          <a href='#home' onClick={openModal}>
            Contactame
          </a>
        </NavBar>
      </Overlay>

      {windowWidth < 768 && (
        <HamburgerMenu
          rounded
          toggled={showMenu}
          toggle={setShowMenu}
          size={20}
          color={theme.primaryText}
        />
      )}
    </Container>
  )
}
