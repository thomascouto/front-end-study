import React from 'react'
import { useGlobalContext } from '../../context/CurrentUserContext'
import Form from '../Form'
import ChatCell from './ChatCell'

const Chat = () => {
  const [chat, setChat] = React.useState<ChatContent[]>([])
  const { theme } = useGlobalContext()

  const pushMessage = (msg: ChatContent) => {
    setChat([...chat, msg])
  }

  return (
    <div className={`app ${theme}-theme`}>
      <section className="text-area" style={{ overflow: 'auto' }}>
        <ul>
          {chat?.map(({ user, text, time }, i) => (
            <li key={i}>
              <ChatCell user={user} text={text} time={time} />
            </li>
          ))}
        </ul>
      </section>
      <section>
        <Form
          chat={{
            pushMessage,
          }}
        />
      </section>
    </div>
  )
}

export default Chat
