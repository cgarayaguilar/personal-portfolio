import React from 'react'
import { SiTwitter, SiLinkedin, SiGithub } from 'react-icons/si'
import {
  Container,
  Wrapper,
  SocialContainer,
  InfoContainer,
  CreditsContainer
} from './styles'
import { Typography } from '../Typography'
import { theme } from '../styles/theme'
import phone from '../../images/phone-footer.svg'
import address from '../../images/address-footer.svg'
import email from '../../images/email-footer.svg'

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Typography
          mt='48px'
          mb='16px'
          value='Mantente conectado'
          variant='title3'
          color={theme.green}
        />
        <InfoContainer>
          <a href='https://goo.gl/maps/o2oo1YFQg4LcQU9z9'>
            <img src={address} alt='direccion' />
          </a>
          <a href='mailto:cgaray.aguilar97@gmail.com'>
            <img src={email} alt='correo' />
          </a>
          <a href='tel:+50577548757'>
            <img src={phone} alt='telefono' />
          </a>
        </InfoContainer>

        <SocialContainer>
          <a href='https://twitter.com/cgaray97'>
            <SiTwitter />
          </a>
          <a href='https://www.linkedin.com/in/cgaray97/'>
            <SiLinkedin />
          </a>
          <a href='https://github.com/cgarayaguilar'>
            <SiGithub />
          </a>
        </SocialContainer>

        <CreditsContainer>
          <Typography
            mt='20px'
            mb='4px'
            value='Ilustraciones'
            variant='body3'
          />
          <a href='http://www.freepik.com'>Designed by slidesgo / Freepik</a>
          <a href='http://www.freepik.com'>Designed by stories / Freepik</a>
        </CreditsContainer>
      </Wrapper>
    </Container>
  )
}
