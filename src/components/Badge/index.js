import React, { useContext } from 'react'
import { Typography } from '../Typography'
import { ThemeContext } from 'styled-components'

export const Badge = ({ icon: Icon, title }) => {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <Icon size={'3em'} color={theme.secondaryText} />
      <Typography
        mt='4px'
        value={title}
        variant='body3'
        color={theme.primaryText}
      />
    </div>
  )
}
