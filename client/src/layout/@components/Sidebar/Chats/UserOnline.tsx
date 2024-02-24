import React from 'react'

const UserOnline = () => {
  return (
    <a
    href="chat-direct.html"
    className="card border-0 text-reset"
  >
    <div className="card-body">
      <div className="row gx-5">
        <div className="col-auto">
          <div className="avatar avatar-online">
            <img
              src="assets/img/avatars/6.jpg"
              alt="#"
              className="avatar-img"
            />
          </div>
        </div>

        <div className="col">
          <div className="d-flex align-items-center mb-3">
            <h5 className="me-auto mb-0">Ollie Chandler</h5>
            <span className="text-muted extra-small ms-2">
              08:45 PM
            </span>
          </div>

          <div className="d-flex align-items-center">
            <div className="line-clamp me-auto">
              Hello! Yeah, I'm going to meet friend of mine at
              the departments stores now.
            </div>

            <div className="badge badge-circle bg-primary ms-5">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .card-body */}
  </a>
  )
}

export default UserOnline