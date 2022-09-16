import React from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import Chat from '../Chat'
import Popup from '../Popup'

function App() {
  const [currentUser, setCurrentUser] = React.useState(null)

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Chat />
      <Popup />
    </CurrentUserContext.Provider>
  )
}

export default App
