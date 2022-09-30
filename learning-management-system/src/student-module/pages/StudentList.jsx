import React from "react";

const StudentList = () => {
  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="/assets/img/logo.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="/assets/img/logo-small.png"
              alt="Logo"
              width="30"
              height="30"
            />
          </a>
        </div>
        <a href="#" id="toggle_btn">
          <i className="fas fa-align-left"></i>
        </a>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
        <a className="mobile_btn" id="mobile_btn">
          <i className="fas fa-bars"></i>
        </a>
        <ul className="nav user-menu">
          <li className="nav-item dropdown noti-dropdown">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="far fa-bell"></i>{" "}
              <span className="badge badge-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="/avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/img/profiles/avatar-02.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Carlson Tech</span> has
                            approved{" "}
                            <span className="noti-title">your estimate</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/img/profiles/avatar-11.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">
                              International Software Inc
                            </span>{" "}
                            has sent you a invoice in the amount of{" "}
                            <span className="noti-title">$218</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/img/profiles/avatar-17.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">John Hendry</span> sent
                            a cancellation request{" "}
                            <span className="noti-title">Apple iPhone XR</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/assets/img/profiles/avatar-13.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">
                              Mercury Software Inc
                            </span>{" "}
                            added a new product{" "}
                            <span className="noti-title">
                              Apple MacBook Pro
                            </span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="/assets/img/profiles/avatar-01.jpg"
                  width="31"
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="/assets/img/profiles/avatar-01.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="inbox.html">
                Inbox
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main Menu</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-user-graduate"></i>{" "}
                  <span> Dashboard</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="index.html">Admin Dashboard</a>
                  </li>
                  <li>
                    <a href="teacher-dashboard.html">Teacher Dashboard</a>
                  </li>
                  <li>
                    <a href="student-dashboard.html">Student Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="submenu active">
                <a href="#">
                  <i className="fas fa-user-graduate"></i>{" "}
                  <span> Students</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="students.html" className="active">
                      Student List
                    </a>
                  </li>
                  <li>
                    <a href="student-details.html">Student View</a>
                  </li>
                  <li>
                    <a href="add-student.html">Student Add</a>
                  </li>
                  <li>
                    <a href="edit-student.html">Student Edit</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-chalkboard-teacher"></i>{" "}
                  <span> Teachers</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="teachers.html">Teacher List</a>
                  </li>
                  <li>
                    <a href="teacher-details.html">Teacher View</a>
                  </li>
                  <li>
                    <a href="add-teacher.html">Teacher Add</a>
                  </li>
                  <li>
                    <a href="edit-teacher.html">Teacher Edit</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-building"></i> <span> Departments</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="departments.html">Department List</a>
                  </li>
                  <li>
                    <a href="add-department.html">Department Add</a>
                  </li>
                  <li>
                    <a href="edit-department.html">Department Edit</a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-book-reader"></i> <span> Subjects</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="subjects.html">Subject List</a>
                  </li>
                  <li>
                    <a href="add-subject.html">Subject Add</a>
                  </li>
                  <li>
                    <a href="edit-subject.html">Subject Edit</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Management</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-file-invoice-dollar"></i>{" "}
                  <span> Accounts</span> <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="fees-collections.html">Fees Collection</a>
                  </li>
                  <li>
                    <a href="expenses.html">Expenses</a>
                  </li>
                  <li>
                    <a href="salary.html">Salary</a>
                  </li>
                  <li>
                    <a href="add-fees-collection.html">Add Fees</a>
                  </li>
                  <li>
                    <a href="add-expenses.html">Add Expenses</a>
                  </li>
                  <li>
                    <a href="add-salary.html">Add Salary</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="holiday.html">
                  <i className="fas fa-holly-berry"></i> <span>Holiday</span>
                </a>
              </li>
              <li>
                <a href="fees.html">
                  <i className="fas fa-comment-dollar"></i> <span>Fees</span>
                </a>
              </li>
              <li>
                <a href="exam.html">
                  <i className="fas fa-clipboard-list"></i>{" "}
                  <span>Exam list</span>
                </a>
              </li>
              <li>
                <a href="event.html">
                  <i className="fas fa-calendar-day"></i> <span>Events</span>
                </a>
              </li>
              <li>
                <a href="time-table.html">
                  <i className="fas fa-table"></i> <span>Time Table</span>
                </a>
              </li>
              <li>
                <a href="library.html">
                  <i className="fas fa-book"></i> <span>Library</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-shield-alt"></i>{" "}
                  <span> Authentication </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                  <li>
                    <a href="error-404.html">Error Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blank-page.html">
                  <i className="fas fa-file"></i> <span>Blank Page</span>
                </a>
              </li>
              <li className="menu-title">
                <span>Others</span>
              </li>
              <li>
                <a href="sports.html">
                  <i className="fas fa-baseball-ball"></i> <span>Sports</span>
                </a>
              </li>
              <li>
                <a href="hostel.html">
                  <i className="fas fa-hotel"></i> <span>Hostel</span>
                </a>
              </li>
              <li>
                <a href="transport.html">
                  <i className="fas fa-bus"></i> <span>Transport</span>
                </a>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <a href="components.html">
                  <i className="fas fa-vector-square"></i>{" "}
                  <span>Components</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-columns"></i> <span> Forms </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html"> Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html"> Form Validation </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-table"></i> <span> Tables </span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fas fa-code"></i> <span>Multi Level</span>{" "}
                  <span className="menu-arrow"></span>
                </a>
                <ul>
                  <li className="submenu">
                    <a href="#">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow"></span>
                    </a>
                    <ul>
                      <li>
                        <a href="#">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="#">
                          {" "}
                          <span> Level 2</span>{" "}
                          <span className="menu-arrow"></span>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Level 3</a>
                          </li>
                          <li>
                            <a href="#">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      <span>Level 1</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Students</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Students</li>
                </ul>
              </div>
              <div className="col-auto text-right float-right ml-auto">
                <a href="#" className="btn btn-outline-primary mr-2">
                  <i className="fas fa-download"></i> Download
                </a>
                <a href="add-student.html" className="btn btn-primary">
                  <i className="fas fa-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0 datatable">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Class</th>
                          <th>DOB</th>
                          <th>Parent Name</th>
                          <th>Mobile Number</th>
                          <th>Address</th>
                          <th className="text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PRE2209</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-01.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Aaliyah</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>2 Feb 2002</td>
                          <td>Jeffrey Wong</td>
                          <td>097 3584 5870</td>
                          <td>911 Deer Ridge Drive,USA</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2213</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-03.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Malynne</a>
                            </h2>
                          </td>
                          <td>8 A</td>
                          <td>3 June 2010</td>
                          <td>Fields Malynne</td>
                          <td>242 362 3100</td>
                          <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2143</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-02.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Levell Scott</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>12 Apr 2002</td>
                          <td>Jeffrey Scott</td>
                          <td>026 7318 4366</td>
                          <td>P.O. Box: 41, Gaborone</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2431</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-03.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Minnie</a>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>24 Feb 2000</td>
                          <td>J Shaffer</td>
                          <td>952 512 4909</td>
                          <td>4771 Oral Lake Road, Golden Valley</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1534</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-04.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Lois A</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>22 Jul 2006</td>
                          <td>Cleary Wong</td>
                          <td>413 289 1314</td>
                          <td>2844 Leverton Cove Road, Palmer</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2153</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-05.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Calvin</a>
                            </h2>
                          </td>
                          <td>9 B</td>
                          <td>8 Dec 2003</td>
                          <td>Minnie J Shaffer</td>
                          <td>701 753 3810</td>
                          <td>1900 Hidden Meadow Drive, Crete</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1252</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-06.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Joe Kelley</a>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>7 Oct 2000</td>
                          <td>Vincent Howard</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1434</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-07.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Vincent</a>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>4 Jan 2002</td>
                          <td>Kelley Joe</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2345</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-08.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">Kozma Tatari</a>
                            </h2>
                          </td>
                          <td>9 A</td>
                          <td>1 Feb 2006</td>
                          <td>Lombardi</td>
                          <td>04 2239 968</td>
                          <td>Rruga E Kavajes, Condor Center, Tirana</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2365</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-09.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">John Chambers</a>
                            </h2>
                          </td>
                          <td>11 B</td>
                          <td>13 Sept 2003</td>
                          <td>Wong Jeffrey</td>
                          <td>870 663 2334</td>
                          <td>4667 Sunset Drive, Pine Bluff</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1234</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-10.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="student-details.html">
                                Nathan Humphries
                              </a>
                            </h2>
                          </td>
                          <td>10 B</td>
                          <td>26 Apr 1994</td>
                          <td>Stephen Marley</td>
                          <td>077 3499 9959</td>
                          <td>86 Lamphey Road, Thelnetham</td>
                          <td className="text-right">
                            <div className="actions">
                              <a
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </a>
                              <a
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Copyright © 2020 Dreamguys.</p>
        </footer>
      </div>
    </div>
  );
};

export default StudentList;
