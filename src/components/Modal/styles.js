import styled, { keyframes } from 'styled-components'

const scaleUpCenter = keyframes`
   0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Popup = styled.div`
  position: relative;
  width: 90%;
  max-width: 500px;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
  & h2 {
    text-align: center;
    font-family: 'Lexend Deca', sans-serif;
  }

  & p {
    text-align: center;
  }

  & i {
    position: absolute;
    right: 0;
    top: 0;
  }

  animation: ${scaleUpCenter} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 16px;
  margin-bottom: 32px;
`
