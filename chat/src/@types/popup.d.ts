interface PopupProps {
  isShown: boolean
  handleForm: {
    setCurrentUser: (e: React.ChangeEvent<HTMLInputElement>) => void
    getCurrentUser: () => string
    submit: (e: React.FormEvent<HTMLFormElement>) => void
  }
}
