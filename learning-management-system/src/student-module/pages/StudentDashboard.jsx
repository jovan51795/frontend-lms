import React from "react";

const StudentDashboard = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <a href="index.html" className="logo">
              <img src="assets/img/logo.png" alt="Logo" />
            </a>
            <a href="index.html" className="logo logo-small">
              <img
                src="assets/img/logo-small.png"
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
                  <a href="#" className="clear-noti">
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
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="assets/img/profiles/avatar-02.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">Carlson Tech</span>{" "}
                              has approved{" "}
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
                              src="assets/img/profiles/avatar-11.jpg"
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
                              src="assets/img/profiles/avatar-17.jpg"
                            />
                          </span>
                          <div className="media-body">
                            <p className="noti-details">
                              <span className="noti-title">John Hendry</span>{" "}
                              sent a cancellation request{" "}
                              <span className="noti-title">
                                Apple iPhone XR
                              </span>
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
                              src="assets/img/profiles/avatar-13.jpg"
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
                    src="assets/img/profiles/avatar-01.jpg"
                    width="31"
                    alt="Ryan Taylor"
                  />
                </span>
              </a>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="assets/img/profiles/avatar-01.jpg"
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
                <li className="submenu active">
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
                      <a href="student-dashboard.html" className="active">
                        Student Dashboard
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <a href="#">
                    <i className="fas fa-user-graduate"></i>{" "}
                    <span> Students</span> <span className="menu-arrow"></span>
                  </a>
                  <ul>
                    <li>
                      <a href="students.html">Student List</a>
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
                    <i className="fas fa-building"></i>{" "}
                    <span> Departments</span>{" "}
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
                    <i className="fas fa-book-reader"></i>{" "}
                    <span> Subjects</span> <span className="menu-arrow"></span>
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
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
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
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Bruklin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Student Dashboard
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-nine w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-book-open"></i>
                      </div>
                      <div className="db-info">
                        <h3>04/06</h3>
                        <h6>All Courses</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-six w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <div className="db-info">
                        <h3>40/60</h3>
                        <h6>All Projects</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-ten w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-clipboard-list"></i>
                      </div>
                      <div className="db-info">
                        <h3>30/50</h3>
                        <h6>Test Attended</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-eleven w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-clipboard-check"></i>
                      </div>
                      <div className="db-info">
                        <h3>15/20</h3>
                        <h6>Test Passed</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-lg-12 col-xl-9">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Today’s Lesson</h5>
                      </div>
                      <div className="col-6">
                        <span className="float-right view-link">
                          <a href="#">View All Courses</a>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="dash-circle">
                    <div className="row">
                      <div className="col-12 col-lg-6 col-xl-6 dash-widget3">
                        <div className="card-body dash-widget1">
                          <div className="circle-bar circle-bar2">
                            <div className="circle-graph2" data-percent="20">
                              <b>20%</b>
                            </div>
                            <h6>Lesson Learned</h6>
                            <h4>
                              10 <span>/ 50</span>
                            </h4>
                          </div>
                          <div className="dash-details">
                            <h4>Facilisi etiam</h4>
                            <ul>
                              <li>
                                <i className="fas fa-clock"></i> 2.30pm - 3.30pm
                              </li>
                              <li>
                                <i className="fas fa-book-open"></i> 5 Lessons
                              </li>
                              <li>
                                <i className="fas fa-hourglass-end"></i> 60
                                Minutes
                              </li>
                              <li>
                                <i className="fas fa-clipboard-check"></i> 5
                                Asignment
                              </li>
                            </ul>
                            <div className="dash-btn">
                              <button
                                type="submit"
                                className="btn btn-info btn-border"
                              >
                                Skip
                              </button>
                              <button type="submit" className="btn btn-info">
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 col-xl-6 dash-widget4">
                        <div className="card-body dash-widget1 dash-widget2">
                          <div className="circle-bar circle-bar3">
                            <div className="circle-graph3" data-percent="50">
                              <b>50%</b>
                            </div>
                            <h6>Lesson Learned</h6>
                            <h4>
                              25 <span>/ 50</span>
                            </h4>
                          </div>
                          <div className="dash-details">
                            <h4>Augue mauris</h4>
                            <ul>
                              <li>
                                <i className="fas fa-clock"></i> 3.30pm - 4.30pm
                              </li>
                              <li>
                                <i className="fas fa-book-open"></i> 6 Lessons
                              </li>
                              <li>
                                <i className="fas fa-hourglass-end"></i> 60
                                Minutes
                              </li>
                              <li>
                                <i className="fas fa-clipboard-check"></i> 6
                                Asignment
                              </li>
                            </ul>
                            <div className="dash-btn">
                              <button
                                type="submit"
                                className="btn btn-info btn-border"
                              >
                                Skip
                              </button>
                              <button type="submit" className="btn btn-info">
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-12 col-xl-8 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row align-items-center">
                          <div className="col-6">
                            <h5 className="card-title">Learning Activity</h5>
                          </div>
                          <div className="col-6">
                            <ul className="list-inline-group text-right mb-0 pl-0">
                              <li className="list-inline-item">
                                <div className="form-group mb-0 amount-spent-select">
                                  <select className="form-control form-control-sm">
                                    <option>Weekly</option>
                                    <option>Monthly</option>
                                    <option>Yearly</option>
                                  </select>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div id="apexcharts-area"></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-12 col-xl-4 d-flex">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <h5 className="card-title">Learning History</h5>
                      </div>
                      <div className="card-body">
                        <div className="teaching-card">
                          <ul className="activity-feed">
                            <li className="feed-item">
                              <div className="feed-date1">
                                Sep 05, 9 am - 10 am (60min)
                              </div>
                              <span className="feed-text1">
                                <a>Lorem ipsum dolor</a>
                              </span>
                              <p>
                                <span>In Progress</span>
                              </p>
                            </li>
                            <li className="feed-item">
                              <div className="feed-date1">
                                Sep 04, 2 pm - 3 pm (70min)
                              </div>
                              <span className="feed-text1">
                                <a>Et dolore magna</a>
                              </span>
                              <p>Completed</p>
                            </li>
                            <li className="feed-item">
                              <div className="feed-date1">
                                Sep 02, 1 pm - 2 am (80min)
                              </div>
                              <span className="feed-text1">
                                <a>Exercitation ullamco</a>
                              </span>
                              <p>
                                <span>In Progress</span>
                              </p>
                            </li>
                            <li className="feed-item">
                              <div className="feed-date1">
                                Aug 30, 10 am - 12 pm (90min)
                              </div>
                              <span className="feed-text1">
                                <a>Occaecat cupidatat</a>
                              </span>
                              <p>Completed</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-12 col-xl-3 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-12">
                        <h5 className="card-title">Calendar</h5>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div
                      id="calendar-doctor"
                      className="calendar-container"
                    ></div>
                    <div className="calendar-info calendar-info1">
                      <div className="calendar-details">
                        <p>09 am</p>
                        <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                          Fermentum <span>09am - 10pm</span>
                        </h6>
                      </div>
                      <div className="calendar-details">
                        <p>10 am</p>
                        <h6 className="calendar-violet d-flex justify-content-between align-items-center">
                          Pharetra et <span>10am - 11am</span>
                        </h6>
                      </div>
                      <div className="calendar-details">
                        <p>11 am</p>
                        <h6 className="calendar-red d-flex justify-content-between align-items-center">
                          Break <span>11am - 11.30am</span>
                        </h6>
                      </div>
                      <div className="calendar-details">
                        <p>12 pm</p>
                        <h6 className="calendar-orange d-flex justify-content-between align-items-center">
                          Massa <span>11.30am - 12.00pm</span>
                        </h6>
                      </div>
                      <div className="calendar-details">
                        <p>09 am</p>
                        <h6 className="calendar-blue d-flex justify-content-between align-items-center">
                          Fermentum <span>09am - 10pm</span>
                        </h6>
                      </div>
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
    </>
  );
};

export default StudentDashboard;
