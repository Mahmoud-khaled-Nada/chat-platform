import { FC } from "react";

interface Props {
  isActive: boolean;
}
const Settings: FC<Props> = ({ isActive }) => {
  return (
    <div className={`tab-pane fade h-100 ${isActive ? "show active" : ""}`}>
      <div className="d-flex flex-column h-100">
        <div className="hide-scrollbar">
          <div className="container py-8">
            {/* Title */}
            <div className="mb-8">
              <h2 className="fw-bold m-0">Settings</h2>
            </div>

            {/* Search */}
            <div className="mb-6">
              <form action="#">
                <div className="input-group">
                  <div className="input-group-text">
                    <div className="icon icon-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-search"
                      >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                      </svg>
                    </div>
                  </div>

                  <input
                    type="text"
                    className="form-control form-control-lg ps-0"
                    placeholder="Search messages or users"
                    aria-label="Search for messages or users..."
                  />
                </div>
              </form>
            </div>

            {/* Profile */}
            <div className="card border-0">
              <div className="card-body">
                <div className="row align-items-center gx-5">
                  <div className="col-auto">
                    <div className="avatar">
                      <img
                        src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg"
                        alt="#"
                        className="avatar-img"
                      />

                      <div className="badge badge-circle bg-secondary border-outline position-absolute bottom-0 end-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-image"
                        >
                          <rect
                            x="3"
                            y="3"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          ></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                      <input
                        id="upload-profile-photo"
                        className="d-none"
                        type="file"
                      />
                      <label
                        className="stretched-label mb-0"
                        htmlFor="upload-profile-photo"
                      ></label>
                    </div>
                  </div>
                  <div className="col">
                    <h5>William Pearson</h5>
                    <p>wright@studio.com</p>
                  </div>
                  <div className="col-auto">
                    <a href="#" className="text-muted">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Profile */}

            {/* Account */}
            <div className="mt-8">
              <div className="d-flex align-items-center mb-4 px-6">
                <small className="text-muted me-auto">Account</small>
              </div>

              <div className="card border-0">
                <div className="card-body py-2">
                  {/* Accordion */}
                  <div
                    className="accordion accordion-flush"
                    id="accordion-profile"
                  >
                    <div className="accordion-item">
                      <div
                        className="accordion-header"
                        id="accordion-profile-1"
                      >
                        <a
                          href="#"
                          className="accordion-button text-reset collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-profile-body-1"
                          aria-expanded="false"
                          aria-controls="accordion-profile-body-1"
                        >
                          <div>
                            <h5>Profile settings</h5>
                            <p>Change your profile settings</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="accordion-profile-body-1"
                        className="accordion-collapse collapse"
                        aria-labelledby="accordion-profile-1"
                        data-parent="#accordion-profile"
                      >
                        <div className="accordion-body">
                          <div className="form-floating mb-6">
                            <input
                              type="text"
                              className="form-control"
                              id="profile-name"
                              placeholder="Name"
                            />
                            <label htmlFor="profile-name">Name</label>
                          </div>

                          <div className="form-floating mb-6">
                            <input
                              type="email"
                              className="form-control"
                              id="profile-email"
                              placeholder="Email address"
                            />
                            <label htmlFor="profile-email">Email</label>
                          </div>

                          <div className="form-floating mb-6">
                            <input
                              type="text"
                              className="form-control"
                              id="profile-phone"
                              placeholder="Phone"
                            />
                            <label htmlFor="profile-phone">Phone</label>
                          </div>

                          <div className="form-floating mb-6">
                            <textarea
                              className="form-control"
                              placeholder="Bio"
                              id="profile-bio"
                              style={{ minHeight: "120px" }}
                              {...{ "data-autosize": true }}
                            ></textarea>

                            <label htmlFor="profile-bio">Bio</label>
                          </div>

                          <button
                            type="button"
                            className="btn btn-block btn-lg btn-primary w-100"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div
                        className="accordion-header"
                        id="accordion-profile-2"
                      >
                        <a
                          href="#"
                          className="accordion-button text-reset collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-profile-body-2"
                          aria-expanded="false"
                          aria-controls="accordion-profile-body-2"
                        >
                          <div>
                            <h5>Connected accounts</h5>
                            <p>Connect with your accounts</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="accordion-profile-body-2"
                        className="accordion-collapse collapse"
                        aria-labelledby="accordion-profile-2"
                        data-parent="#accordion-profile"
                      >
                        <div className="accordion-body">
                          <div className="form-floating mb-6">
                            <input
                              type="text"
                              className="form-control"
                              id="profile-twitter"
                              placeholder="Twitter"
                            />
                            <label htmlFor="profile-twitter">Twitter</label>
                          </div>

                          <div className="form-floating mb-6">
                            <input
                              type="text"
                              className="form-control"
                              id="profile-facebook"
                              placeholder="Facebook"
                            />
                            <label htmlFor="profile-facebook">Facebook</label>
                          </div>

                          <div className="form-floating mb-6">
                            <input
                              type="text"
                              className="form-control"
                              id="profile-instagram"
                              placeholder="Instagram"
                            />
                            <label htmlFor="profile-instagram">Instagram</label>
                          </div>

                          <button
                            type="button"
                            className="btn btn-block btn-lg btn-primary w-100"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Account */}

            {/* Security */}
            <div className="mt-8">
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Security</small>
              </div>

              <div className="card border-0">
                <div className="card-body py-2">
                  {/* Accordion */}
                  <div
                    className="accordion accordion-flush"
                    id="accordion-security"
                  >
                    <div className="accordion-item">
                      <div
                        className="accordion-header"
                        id="accordion-security-1"
                      >
                        <a
                          href="#"
                          className="accordion-button text-reset collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-security-body-1"
                          aria-expanded="false"
                          aria-controls="accordion-security-body-1"
                        >
                          <div>
                            <h5>Password</h5>
                            <p>Change your password</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="accordion-security-body-1"
                        className="accordion-collapse collapse"
                        aria-labelledby="accordion-security-1"
                        data-parent="#accordion-security"
                      >
                        <div className="accordion-body">
                          <form action="#" autoComplete="on">
                            <div className="form-floating mb-6">
                              <input
                                type="password"
                                className="form-control"
                                id="profile-current-password"
                                placeholder="Current Password"
                                autoComplete=""
                              />
                              <label htmlFor="profile-current-password">
                                Current Password
                              </label>
                            </div>

                            <div className="form-floating mb-6">
                              <input
                                type="password"
                                className="form-control"
                                id="profile-new-password"
                                placeholder="New password"
                                autoComplete=""
                              />
                              <label htmlFor="profile-new-password">
                                New password
                              </label>
                            </div>

                            <div className="form-floating mb-6">
                              <input
                                type="password"
                                className="form-control"
                                id="profile-verify-password"
                                placeholder="Verify Password"
                                autoComplete=""
                              />
                              <label htmlFor="profile-verify-password">
                                Verify Password
                              </label>
                            </div>
                          </form>
                          <button
                            type="button"
                            className="btn btn-block btn-lg btn-primary w-100"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Switch */}
                    <div className="accordion-item">
                      <div className="accordion-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h5>Two-step verifications</h5>
                            <p>Enable two-step verifications</p>
                          </div>
                          <div className="col-auto">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="accordion-security-check-1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="accordion-security-check-1"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Security */}

            {/* Storage */}
            <div className="mt-8">
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Storage</small>

                <div className="flex align-items-center text-muted">
                  <a href="#" className="text-muted small">
                    Clear storage
                  </a>

                  <div className="icon icon-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-bar-chart-2"
                    >
                      <line x1="18" y1="20" x2="18" y2="10"></line>
                      <line x1="12" y1="20" x2="12" y2="4"></line>
                      <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body py-2">
                  {/* Accordion */}
                  <div
                    className="accordion accordion-flush"
                    id="accordion-storage"
                  >
                    <div className="accordion-item">
                      <div
                        className="accordion-header"
                        id="accordion-storage-1"
                      >
                        <a
                          href="#"
                          className="accordion-button text-reset collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-storage-body-1"
                          aria-expanded="false"
                          aria-controls="accordion-storage-body-1"
                        >
                          <div>
                            <h5>Cache</h5>
                            <p>Maximum cache size</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="accordion-storage-body-1"
                        className="accordion-collapse collapse"
                        aria-labelledby="accordion-storage-1"
                        data-parent="#accordion-storage"
                      >
                        <div className="accordion-body">
                          <div className="row justify-content-between mb-4">
                            <div className="col-auto">
                              <small>2 GB</small>
                            </div>
                            <div className="col-auto">
                              <small>4 GB</small>
                            </div>
                            <div className="col-auto">
                              <small>6 GB</small>
                            </div>
                            <div className="col-auto">
                              <small>8 GB</small>
                            </div>
                          </div>
                          <input
                            type="range"
                            className="form-range"
                            min="1"
                            max="4"
                            step="1"
                            id="custom-range-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h5>Keep media</h5>
                            <p>Photos, videos and other files</p>
                          </div>
                          <div className="col-auto">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="accordion-storage-check-1"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="accordion-storage-check-1"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Storage */}

            {/* Notifications */}
            <div className="mt-8">
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Notifications</small>
              </div>

              {/* Accordion */}
              <div className="card border-0">
                <div className="card-body py-2">
                  <div
                    className="accordion accordion-flush"
                    id="accordion-notifications"
                  >
                    <div className="accordion-item">
                      <div
                        className="accordion-header"
                        id="accordion-notifications-1"
                      >
                        <a
                          href="#"
                          className="accordion-button text-reset collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-notifications-body-1"
                          aria-expanded="false"
                          aria-controls="accordion-notifications-body-1"
                        >
                          <div>
                            <h5>Message</h5>
                            <p>Set custom notifications for users</p>
                          </div>
                        </a>
                      </div>

                      <div
                        id="accordion-notifications-body-1"
                        className="accordion-collapse collapse"
                        aria-labelledby="accordion-notifications-1"
                        data-parent="#accordion-notifications"
                      >
                        <div className="accordion-body">
                          <div className="row align-items-center">
                            <div className="col">
                              <h5>Text</h5>
                              <p>Show text in notifications</p>
                            </div>

                            <div className="col-auto">
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="accordion-notifications-check-1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="accordion-notifications-check-1"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h5>Sound</h5>
                            <p>Enable sound notifications</p>
                          </div>
                          <div className="col-auto">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="accordion-notifications-check-3"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="accordion-notifications-check-3"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <div className="accordion-header">
                        <div className="row align-items-center">
                          <div className="col">
                            <h5>Browser notifications</h5>
                            <p>Enable browser notifications</p>
                          </div>
                          <div className="col-auto">
                            <div className="form-check form-switch">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="accordion-notifications-check-2"
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="accordion-notifications-check-2"
                              ></label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Notifications */}

            {/* Devices */}
            <div className="mt-8">
              <div className="d-flex align-items-center my-4 px-6">
                <small className="text-muted me-auto">Devices</small>

                <div className="flex align-items-center text-muted">
                  <a href="#" className="text-muted small">
                    End all sessions
                  </a>

                  <div className="icon icon-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-log-out"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="card border-0">
                <div className="card-body py-3">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5>Windows ⋅ USA, Houston</h5>
                          <p>Today at 2:48 pm ⋅ Browser: Chrome</p>
                        </div>
                        <div className="col-auto">
                          <span className="text-primary extra-small">
                            active
                          </span>
                        </div>
                      </div>
                    </li>

                    <li className="list-group-item">
                      <div className="row align-items-center">
                        <div className="col">
                          <h5>iPhone ⋅ USA, Houston</h5>
                          <p>Yesterday at 2:48 pm ⋅ Browser: Chrome</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
