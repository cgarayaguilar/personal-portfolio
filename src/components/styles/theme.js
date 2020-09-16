import { createMuiTheme } from '@material-ui/core/styles'

export const theme = {
  degradedGreen: 'linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)',
  degradedBlack:
    'linear-gradient(180deg, #2d314d 0%,rgba(45, 49, 77, 0.0001) 100%)',
  green: '#5DDFC0',
  primaryText: '#2D314D',
  secondaryText: '#9597A5',
  background: '#FAFAFA',
  backgroundDark: '#F2F1F4'
}

export const themeMUI = createMuiTheme({
  palette: {
    primary: {
      main: '#5DDFC0',
      contrastText: '#fff'
    },
    secondary: {
      main: '#9597A5'
    }
  }
})
