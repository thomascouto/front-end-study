import React from 'react'

export const CurrentUserContext = React.createContext<
  UserContext & ThemeContext
>({
  user: '',
  theme: 'day',
})

export const useGlobalContext = () => React.useContext(CurrentUserContext)
