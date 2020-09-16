import styled from 'styled-components'

export const Section = styled.section`
  margin-top: 88px;
`

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48px, 1fr));
  grid-gap: 30px;
  justify-content: center;
  align-items: start;

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 768px) {
    justify-content: start;
  }
`
