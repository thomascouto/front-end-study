import React from 'react'
import { CurrentUserContext } from '../../context/CurrentUserContext'
import Chat from '../Chat'
import Popup from '../Popup'

function App() {
  const [showPopup, setShowPopup] = React.useState(true)
  const [user, setUser] = React.useState('')
  const [theme, setTheme] = React.useState<ThemeOptions>('day')

  const getCurrentUser = () => user

  const formSetCurrentUser = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser(target.value)
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    if (user.trim().length > 0) setShowPopup(false)
    e.preventDefault()
  }

  return (
    <CurrentUserContext.Provider value={{ user, theme }}>
      <Chat />
      <Popup
        isShown={showPopup}
        handleForm={{
          setCurrentUser: formSetCurrentUser,
          getCurrentUser: getCurrentUser,
          submit: handleSubmitForm,
        }}
      />
    </CurrentUserContext.Provider>
  )
}

export default App
