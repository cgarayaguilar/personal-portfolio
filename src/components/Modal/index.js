import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { TextField, Button } from '@material-ui/core'
import { Overlay, Popup, InputsContainer } from './styles'
import { Typography } from '../Typography'
import { MdClose } from 'react-icons/md'
import { themeMUI } from '../styles/theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'
import { Context } from '../../context'

export const Modal = () => {
  const { isModalVisible, closeModal } = useContext(Context)

  if (isModalVisible)
    return ReactDOM.createPortal(
      <ThemeProvider theme={themeMUI}>
        <Overlay>
          <Popup>
            <i>
              <IconButton onClick={closeModal}>
                <MdClose size='20px' />
              </IconButton>
            </i>
            <Typography value='Contactame' variant='title2' />
            <Typography
              mt='8px'
              mb='32px'
              value='¿Tienes preguntas o simplemente quieres saludar? Envíame un mensaje.'
              variant='body'
            />
            <form>
              <InputsContainer>
                <TextField
                  required
                  label='Nombre'
                  variant='outlined'
                  color='secondary'
                />
                <TextField
                  required
                  type='email'
                  label='Correo'
                  variant='outlined'
                  color='secondary'
                />
                <TextField
                  required
                  label='Mensaje'
                  variant='outlined'
                  multiline={true}
                  rowsMax={3}
                  color='secondary'
                />
              </InputsContainer>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                size='large'
                fullWidth={true}
              >
                Enviar mensaje
              </Button>
            </form>
          </Popup>
        </Overlay>
      </ThemeProvider>,
      document.getElementById('modal')
    )

  return false
}
