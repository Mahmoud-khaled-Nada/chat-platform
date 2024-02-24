

const ChatInfo = () => {
  return (
    <div className="offcanvas offcanvas-end offcanvas-aside" data-bs-scroll="true" data-bs-backdrop="false" id="offcanvas-more">
    {/* Offcanvas Header */}
    <div className="offcanvas-header py-4 py-lg-7 border-bottom">
        <a className="icon icon-lg text-muted" href="#" data-bs-dismiss="offcanvas">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </a>

        <div className="visibility-xl-invisible overflow-hidden text-center">
            <h5 className="text-truncate">Ollie Chandler</h5>
            <p className="text-truncate">last seen 5 minutes ago</p>
        </div>

        {/* Dropdown */}
        <div className="dropdown">
            <a className="icon icon-lg text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
            </a>

            <ul className="dropdown-menu">
                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center">
                        Edit
                        <div className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center">
                        Mute
                        <div className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
                <li>
                    <a href="#" className="dropdown-item d-flex align-items-center text-danger">
                        Leave
                        <div className="icon ms-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    {/* Offcanvas Header */}

    {/* Offcanvas Body */}
    <div className="offcanvas-body hide-scrollbar">
        {/* Avatar */}
        <div className="text-center py-10">
            <div className="row gy-6">
                <div className="col-12">
                    <div className="avatar avatar-xl mx-auto">
                        <img src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" alt="#" className="avatar-img" />

                        <a href="#" className="badge badge-lg badge-circle bg-primary text-white border-outline position-absolute bottom-0 end-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </a>
                    </div>
                </div>

                <div className="col-12">
                    <h4>Ollie Chandler</h4>
                    {/* <p>Bootstrap is an open source <br> toolkit for developing web with <br> HTML, CSS, and JS.</p> */}
                </div>
            </div>
        </div>
        {/* Avatar */}

        {/* Tabs */}
        <ul className="nav nav-pills nav-justified" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="pill" href="#offcanvas-tab-profile" role="tab" aria-controls="offcanvas-tab-profile" aria-selected="true">
                    Profile
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-tab-media" role="tab" aria-controls="offcanvas-tab-media" aria-selected="true">
                    Media
                </a>
            </li>

            <li className="nav-item">
                <a className="nav-link" data-bs-toggle="pill" href="#offcanvas-tab-files" role="tab" aria-controls="offcanvas-tab-files" aria-selected="false">
                    Files
                </a>
            </li>
        </ul>
        {/* Tabs */}

        {/* Tabs: Content */}
        <div className="tab-content py-2" role="tablist">
            {/* Profile */}
            <div className="tab-pane fade show active" id="offcanvas-tab-profile" role="tabpanel">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <div className="row align-items-center gx-6">
                            <div className="col">
                                <h5>Phone</h5>
                                <p>1-800-275-2273</p>
                            </div>

                            <div className="col-auto">
                                <div className="btn btn-sm btn-icon btn-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone-call"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="row align-items-center gx-6">
                            <div className="col">
                                <h5>Location</h5>
                                <p>USA, Houston</p>
                            </div>

                            <div className="col-auto">
                                <div className="btn btn-sm btn-icon btn-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-globe"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="row align-items-center gx-6">
                            <div className="col">
                                <h5>E-mail</h5>
                                <p>chandler@ollie.com</p>
                            </div>

                            <div className="col-auto">
                                <div className="btn btn-sm btn-icon btn-dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="list-group list-group-flush border-top mt-8">
                    <li className="list-group-item">
                        <div className="row align-items-center gx-6">
                            <div className="col">
                                <h5>Notifications</h5>
                                <p>Enable sound notifications</p>
                            </div>

                            <div className="col-auto">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="accordion-security-check-5"/>
                                    <label className="form-check-label" htmlFor="accordion-security-check-5"></label>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="list-group list-group-flush border-top mt-8">
                    <li className="list-group-item">
                        <a href="#" className="text-reset">Send Message</a>
                    </li>

                    <li className="list-group-item">
                        <a href="#" className="text-danger">Delete Chat</a>
                    </li>
                </ul>
            </div>
            {/* Profile */}

            {/* Media */}
            <div className="tab-pane fade" id="offcanvas-tab-media" role="tabpanel">
                <div className="row row-cols-3 g-3 py-6">
                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-1.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/1.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-2.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/2.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-3.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/3.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-1.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/4.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-2.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/5.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-3.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/6.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-1.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/7.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-2.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/8.jpg" alt=""/>
                        </a>
                    </div>

                    <div className="col">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#modal-media-preview" data-theme-img-url="assets/img/chat/media-3.jpg">
                            <img className="img-fluid rounded" src="assets/img/chat/9.jpg" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
            {/* Media */}

            {/* Files */}
            <div className="tab-pane fade" id="offcanvas-tab-files" role="tabpanel">
                <ul className="list-group list-group-flush">

                    {/* Item */}
                    <li className="list-group-item">
                        <div className="row align-items-center gx-5">
                            {/* Icons */}
                            <div className="col-auto">
                                <div className="avatar-group">
                                    <a href="#" className="avatar avatar-sm">
                                        <img src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" className="avatar-img" alt="#"/>
                                    </a>

                                    <a href="#" className="avatar avatar-sm">
                                        <span className="avatar-text bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Icons */}

                            {/* Text */}
                            <div className="col overflow-hidden">
                                <h5 className="text-truncate">
                                    <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                </h5>
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">79.2 KB</small>
                                    </li>

                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">txt</small>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}

                            {/* Dropdown */}
                            <div className="col-auto">
                                <div className="dropdown">
                                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Download
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Share
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                                <span className="me-auto">Delete</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Dropdown */}
                        </div>
                    </li>

                    {/* Item */}
                    <li className="list-group-item">
                        <div className="row align-items-center gx-5">

                            {/* Icons*/}
                            <div className="col-auto">
                                <div className="avatar-group">
                                    <a href="#" className="avatar avatar-sm">
                                        <img className="avatar-img" src="https://offsetcode.com/themes/messenger/2.1.0/https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" alt="#"/>
                                    </a>

                                    <a href="#" className="avatar avatar-sm">
                                        <span className="avatar-text bg-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Icons */}

                            {/* Text */}
                            <div className="col overflow-hidden">
                                <h5 className="text-truncate">
                                    <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                </h5>
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">54.2 KB</small>
                                    </li>

                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">mp4</small>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}

                            {/* Dropdown */}
                            <div className="col-auto">
                                <div className="dropdown">
                                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Download
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Share
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                                <span className="me-auto">Delete</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Dropdown */}
                        </div>
                    </li>

                    {/* Item */}
                    <li className="list-group-item">
                        <div className="row align-items-center gx-5">

                            {/* Icons */}
                            <div className="col-auto">
                                <div className="avatar-group">
                                    <a href="#" className="avatar avatar-sm">
                                        <img className="avatar-img" src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" alt="#"/>
                                    </a>

                                    <a href="#" className="avatar avatar-sm">
                                        <span className="avatar-text bg-primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Icons */}

                            {/* Text */}
                            <div className="col overflow-hidden">
                                <h5 className="text-truncate">
                                    <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                </h5>
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">64.8 KB</small>
                                    </li>

                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">jpg</small>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}

                            {/* Dropdown */}
                            <div className="col-auto">
                                <div className="dropdown">
                                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Download
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Share
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                                <span className="me-auto">Delete</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Dropdown */}
                        </div>
                    </li>

                    {/* Item */}
                    <li className="list-group-item">
                        <div className="row align-items-center gx-5">

                            {/* Icons*/}
                            <div className="col-auto">
                                <div className="avatar-group">
                                    <a href="#" className="avatar avatar-sm">
                                        <img className="avatar-img" src="https://offsetcode.com/themes/messenger/2.1.0/https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" alt="#"/>
                                    </a>

                                    <a href="#" className="avatar avatar-sm">
                                        <span className="avatar-text bg-warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-film"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Icons*/}

                            {/* Text */}
                            <div className="col overflow-hidden">
                                <h5 className="text-truncate">
                                    <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                </h5>
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">80.8 KB</small>
                                    </li>

                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">mp4</small>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}

                            {/* Dropdown */}
                            <div className="col-auto">
                                <div className="dropdown">
                                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Download
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Share
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                                <span className="me-auto">Delete</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Dropdown */}
                        </div>
                    </li>

                    {/* Item */}
                    <li className="list-group-item">
                        <div className="row align-items-center gx-5">

                            {/* Icons*/}
                            <div className="col-auto">
                                <div className="avatar-group">
                                    <a href="#" className="avatar avatar-sm">
                                        <img className="avatar-img" src="https://offsetcode.com/themes/messenger/2.1.0/assets/img/avatars/2.jpg" alt="#" />
                                    </a>

                                    <a href="#" className="avatar avatar-sm">
                                        <span className="avatar-text bg-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-image"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            {/* Icons*/}

                            {/* Text */}
                            <div className="col overflow-hidden">
                                <h5 className="text-truncate">
                                    <a href="#">E5419783-047D-4B4C-B30E-F24DD8247731.JPG</a>
                                </h5>
                                <ul className="list-inline m-0">
                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">100 KB</small>
                                    </li>

                                    <li className="list-inline-item">
                                        <small className="text-uppercase text-muted">jpg</small>
                                    </li>
                                </ul>
                            </div>
                            {/* Text */}

                            {/* Dropdown */}
                            <div className="col-auto">
                                <div className="dropdown">
                                    <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Download
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center" href="#">
                                                Share
                                                <div className="icon ms-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />

                                            </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                                <span className="me-auto">Delete</span>
                                                <div className="icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </li>
                </ul>
            </div>
            {/* Files */}
        </div>
    </div>
    </div>
  )
}

export default ChatInfo