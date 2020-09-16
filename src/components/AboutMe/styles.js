import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 88px;
  background: ${({ theme }) => theme.backgroundDark};
  border-radius: 5px;
  padding: 16px;
  display: grid;
  grid: 16px;
  grid-template-rows: min-content 1fr;
  grid-template-columns: 1fr;
  align-items: center;
  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

export const Perfil = styled.figure`
  width: 70%;
  max-width: 296px;
  margin: 5% auto;
  & img {
    width: 100%;
    border-radius: 50%;
  }
`

export const TextContainer = styled.div`
  max-width: 563px;
  overflow-x: auto;
`

export const Links = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-template-rows: repeat(3, 1fr);
  justify-content: start;
`
