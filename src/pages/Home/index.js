import React from 'react'
import { AppBar } from '../../components/AppBar'
import { Hero } from '../../components/Hero'
import { Container, Wrapper } from './styles'
import { GlobalStyle } from '../../components/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../components/styles/theme'
import { Tecnologies } from '../../components/Tecnologies'
import { AboutMe } from '../../components/AboutMe'
import { ListOfProjects } from '../../components/ListOfProjects'
import { ContactSection } from '../../components/ContactSection'
import { Footer } from '../../components/Footer'
import { Modal } from '../../components/Modal'

export const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Modal />
        <Wrapper>
          <GlobalStyle />
          <AppBar />
          <Hero />
          <Tecnologies />
          <AboutMe />
        </Wrapper>
        <ListOfProjects />
        <Wrapper>
          <ContactSection />
        </Wrapper>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
