import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './pages/Home'
import * as serviceWorker from './serviceWorker'
import Context from './context'

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <Home />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
