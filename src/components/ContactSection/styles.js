import styled from 'styled-components'

export const ImageContainer = styled.figure`
  width: 100%;

  & img {
    width: 100%;
  }
`

export const Section = styled.section`
  margin-bottom: 88px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px;
  align-items: center;
  @media (min-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & p {
    text-align: center;
  }
  & h2 {
    text-align: center;
  }
  @media (min-width: 650px) {
    align-items: flex-start;
    & h2 {
      text-align: center;
    }
    & p {
      text-align: left;
    }
  }
`
