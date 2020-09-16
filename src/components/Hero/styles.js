import styled from 'styled-components'

export const Main = styled.main`
  display: grid;
  width: 100%;
  height: auto;
  align-items: start;
  justify-content: center;
  grid-template-areas:
    'imageContainer'
    'textContainer';
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    align-items: center;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'textContainer imageContainer';
  }
`

export const TextContainer = styled.div`
  margin: 0 auto;
  grid-area: textContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 447px;
  @media (min-width: 768px) {
    max-width: 647px;
    align-items: flex-start;
    justify-content: center;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }

  & img {
    width: 90%;
  }
`

export const Title = styled.h1`
  font-style: normal;
  font-family: 'Public Sans', sans-serif;
  font-weight: 300;
  text-align: left;
  line-height: 40px;
  font-weight: bold;
  margin-top: 8px;
  color: ${({ theme }) => theme.primaryText};
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }

  @media (min-width: 1024px) {
    font-size: 34px;
    line-height: 34px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
    line-height: 56px;
    letter-spacing: -1px;
  }

  @media (min-width: 1400px) {
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -1px;
  }
`
