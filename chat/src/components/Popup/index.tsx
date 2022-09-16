import React from 'react'

const Popup = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <form>
          <p>Digite o nome</p>
          <input type={'text'} />
          <button type="submit" onSubmit={handleFormSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup
