import React from "react";

const UsersGroup = () => {
  return (
    <a href="chat-direct.html" className="card border-0 text-reset">
      <div className="card-body">
        <div className="row gx-5">
          <div className="col-auto">
            <div className="avatar-group-trigon avatar-group-trigon-sm">
              <div className="avatar avatar-sm">
                <img
                  className="avatar-img"
                  src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/7.jpg"
                  alt="#"
                />
              </div>

              <div className="avatar avatar-sm">
                <img
                  className="avatar-img"
                  src="assets/img/avatars/9.jpg"
                  alt="#"
                />
              </div>

              <div className="avatar avatar-sm">
                <span className="avatar-text bg-primary">D</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="d-flex align-items-center mb-3">
              <h5 className="me-auto mb-0">Don Knight</h5>
              <span className="text-muted extra-small ms-2">08:35 PM</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="line-clamp me-auto">
                I'm going to meet my friend of mine at the departments stores as
                soon as possible.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* .card-body */}
    </a>
  );
};

export default UsersGroup;
