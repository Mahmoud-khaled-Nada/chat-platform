import React from 'react'

const UserTyping = () => {
  return (
    <a
    href="chat-empty.html"
    className="card border-0 text-reset"
  >
    <div className="card-body">
      <div className="row gx-5">
        <div className="col-auto">
          <div className="avatar avatar-online">
            <img
              src="assets/img/avatars/8.jpg"
              alt="#"
              className="avatar-img"
            />
          </div>
        </div>

        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <h5 className="me-auto mb-0">Elise Dennis</h5>
            <span className="text-muted extra-small ms-2">
              08:35 PM
            </span>
          </div>

          <div className="d-flex align-items-center">
            <div className="line-clamp me-auto">
              is typing
              <span className="typing-dots">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .card-body */}
  </a>
  )
}

export default UserTyping