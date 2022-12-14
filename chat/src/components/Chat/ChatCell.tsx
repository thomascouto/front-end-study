import React from 'react'

const ChatCell = ({ user, text, time }: ChatContent) => {
  return (
    <>
      <span className="li__span__name li__span__bold">{user}</span>
      <span className="li__span__content">{text}</span>
      <span className="li__span__hour li__span__bold">{time}</span>
    </>
  )
}

export default ChatCell
