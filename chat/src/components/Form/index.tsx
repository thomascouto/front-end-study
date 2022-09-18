import React from 'react'
import { useGlobalContext } from '../../context/CurrentUserContext'
import Toggle from './Toggle'

const Form = ({ chat }: FormProps) => {
  const [text, setText] = React.useState<string>('')
  const { user } = useGlobalContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendText()
  }

  const handleSendMsg = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && text.trim().length > 0) {
      e.preventDefault()
      sendText()
    }
  }

  const sendText = () => {
    if (text.trim().length > 0) {
      chat.pushMessage({ user, text, time: new Date().toLocaleTimeString() })
    }
    setText('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-form">
        <textarea
          className="input-form__textarea shadow"
          placeholder="Message"
          value={text}
          onKeyDown={handleSendMsg}
          onChange={({ target }) => setText(target.value)}
        ></textarea>
        <Toggle />
        <button type={'submit'} className="input-form__button shadow"></button>
      </form>
    </div>
  )
}
export default Form
