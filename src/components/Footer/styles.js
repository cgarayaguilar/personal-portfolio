import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 80px;
  width: 100%;
  background: ${({ theme }) => theme.primaryText};
`

export const Wrapper = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    width: 100%;
    margin-bottom: 8px;
  }
`

export const SocialContainer = styled.nav`
  margin-top: 32px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, min-content);
  grid-gap: 16px;

  & a {
    color: ${({ theme }) => theme.secondaryText};
    font-size: 28px;
    &:hover {
      color: ${({ theme }) => theme.green};
    }
  }
`
export const CreditsContainer = styled.div`
  margin-bottom: 20px;
  & p {
    text-align: center;
  }
  & a {
    display: block;
    font-family: 'Public Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.234375px;
    color: #ffffff;
    margin-bottom: 8px;
    text-align: center;
    &:hover {
      color: ${({ theme }) => theme.green};
    }
  }
`
