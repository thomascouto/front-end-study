import React from 'react'

const Popup = ({ handleForm, isShown }: PopupProps) => {
  return (
    <div className="modal" style={{ display: isShown ? 'block' : 'none' }}>
      <div className="modal-content">
        <form className="name__form" onSubmit={handleForm.submit}>
          <input
            className="shadow"
            type={'text'}
            placeholder={'Name'}
            value={handleForm.getCurrentUser()}
            onChange={handleForm.setCurrentUser}
            autoFocus
          />
          <button type="submit" className="shadow">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  )
}

export default Popup
