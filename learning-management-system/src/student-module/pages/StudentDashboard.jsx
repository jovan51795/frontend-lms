import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <Link to={"/dashboard/student"} className="logo">
              <img src="/assets/img/logo.png" alt="Logo" />
            </Link>
            <Link to="/dashboard/student" className="logo logo-small">
              <img
                src="/assets/img/logo-small.png"
                alt="Logo"
                width="30"
                height="30"
              />
            </Link>
          </div>

          <Link to="#" id="toggle_btn">
            <i className="fas fa-align-left"></i>
          </Link>

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

          <Link className="mobile_btn" id="mobile_btn">
            <i className="fas fa-bars"></i>
          </Link>

          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <Link
                href="#"
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="far fa-bell"></i>{" "}
                <span className="badge badge-pill">3</span>
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="#" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="#">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Image"
                              src="/assets/img/profiles/avatar-02.jpg"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="#">
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
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="topnav-dropdown-footer">
                  <Link to="#">View all Notifications</Link>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown has-arrow">
              <Link
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
              </Link>
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
                <Link className="dropdown-item" href="profile.html">
                  My Profile
                </Link>
                <Link className="dropdown-item" href="inbox.html">
                  Inbox
                </Link>
                <Link className="dropdown-item" href="login.html">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-12">
                  <h3 className="page-title">Welcome Bruklin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="index.html">Dashboard</Link>
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
                          <Link to="#">View All Courses</Link>
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
                                <Link>Lorem ipsum dolor</Link>
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
                                <Link>Et dolore magna</Link>
                              </span>
                              <p>Completed</p>
                            </li>
                            <li className="feed-item">
                              <div className="feed-date1">
                                Sep 02, 1 pm - 2 am (80min)
                              </div>
                              <span className="feed-text1">
                                <Link>Exercitation ullamco</Link>
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
                                <Link>Occaecat cupidatat</Link>
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
