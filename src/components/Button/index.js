import React, { useContext } from 'react'
import { CtaButton } from './styles'
import { Context } from '../../context'

export const Button = () => {
  const { openModal } = useContext(Context)

  return <CtaButton onClick={openModal}>Contactame</CtaButton>
}
