import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/ABCUlogo.png"}
                alt="Logo"
              />
            </div>
            <div className="logo logo-small">
              <img
                src={process.env.PUBLIC_URL + "/assets/img/abclogo.png"}
                alt="Logo"
                width="30"
                height="30"
              />
            </div>
          </div>
          <Link to="" id="toggle_btn">
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
          <Link to="" className="mobile_btn" id="mobile_btn">
            <i className="fas fa-bars"></i>
          </Link>
          <ul className="nav user-menu">
            <li className="nav-item dropdown noti-dropdown">
              <Link
                to=""
                className="dropdown-toggle nav-link"
                data-toggle="dropdown"
              >
                <i className="far fa-bell"></i>{" "}
                <span className="badge badge-pill">3</span>
              </Link>
              <div className="dropdown-menu notifications">
                <div className="topnav-dropdown-header">
                  <span className="notification-title">Notifications</span>
                  <Link to="" className="clear-noti">
                    {" "}
                    Clear All{" "}
                  </Link>
                </div>
                <div className="noti-content">
                  <ul className="notification-list">
                    <li className="notification-message">
                      <Link to="">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Avatar"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Avatar"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Avatar"
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
                      </Link>
                    </li>
                    <li className="notification-message">
                      <Link to="">
                        <div className="media">
                          <span className="avatar avatar-sm">
                            <img
                              className="avatar-img rounded-circle"
                              alt="User Avatar"
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
                to=""
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
              </Link>
              <div className="dropdown-menu">
                <div className="user-header">
                  <div className="avatar avatar-sm">
                    <img
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="User Avatar"
                      className="avatar-img rounded-circle"
                    />
                  </div>
                  <div className="user-text">
                    <h6>Ryan Taylor</h6>
                    <p className="text-muted mb-0">Administrator</p>
                  </div>
                </div>
                <Link to="profile.html" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="inbox.html" className="dropdown-item">
                  Inbox
                </Link>
                <Link to="login.html" className="dropdown-item">
                  Logout
                </Link>
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
                  <Link to="">
                    <i className="fas fa-user-graduate"></i>{" "}
                    <span> Dashboard</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="index.html" className="active">
                        Admin Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link to="teacher-dashboard.html">Teacher Dashboard</Link>
                    </li>
                    <li>
                      <Link to="student-dashboard.html">Student Dashboard</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-user-graduate"></i>{" "}
                    <span> Students</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="students.html">Student List</Link>
                    </li>
                    <li>
                      <Link to="student-details.html">Student View</Link>
                    </li>
                    <li>
                      <Link to="add-student.html">Student Add</Link>
                    </li>
                    <li>
                      <Link to="edit-student.html">Student Edit</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-chalkboard-teacher"></i>{" "}
                    <span> Teachers</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="teachers.html">Teacher List</Link>
                    </li>
                    <li>
                      <Link to="teacher-details.html">Teacher View</Link>
                    </li>
                    <li>
                      <Link to="add-teacher.html">Teacher Add</Link>
                    </li>
                    <li>
                      <Link to="edit-teacher.html">Teacher Edit</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-building"></i>{" "}
                    <span> Departments</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="departments.html">Department List</Link>
                    </li>
                    <li>
                      <Link to="add-department.html">Department Add</Link>
                    </li>
                    <li>
                      <Link to="edit-department.html">Department Edit</Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-book-reader"></i>{" "}
                    <span> Subjects</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="subjects.html">Subject List</Link>
                    </li>
                    <li>
                      <Link to="add-subject.html">Subject Add</Link>
                    </li>
                    <li>
                      <Link to="edit-subject.html">Subject Edit</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-title">
                  <span>Management</span>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-file-invoice-dollar"></i>{" "}
                    <span> Accounts</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="fees-collections.html">Fees Collection</Link>
                    </li>
                    <li>
                      <Link to="expenses.html">Expenses</Link>
                    </li>
                    <li>
                      <Link to="salary.html">Salary</Link>
                    </li>
                    <li>
                      <Link to="add-fees-collection.html">Add Fees</Link>
                    </li>
                    <li>
                      <Link to="add-expenses.html">Add Expenses</Link>
                    </li>
                    <li>
                      <Link to="add-salary.html">Add Salary</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="holiday.html">
                    <i className="fas fa-holly-berry"></i> <span>Holiday</span>
                  </Link>
                </li>
                <li>
                  <Link to="fees.html">
                    <i className="fas fa-comment-dollar"></i> <span>Fees</span>
                  </Link>
                </li>
                <li>
                  <Link to="exam.html">
                    <i className="fas fa-clipboard-list"></i>{" "}
                    <span>Exam list</span>
                  </Link>
                </li>
                <li>
                  <Link to="event.html">
                    <i className="fas fa-calendar-day"></i> <span>Events</span>
                  </Link>
                </li>
                <li>
                  <Link to="time-table.html">
                    <i className="fas fa-table"></i> <span>Time Table</span>
                  </Link>
                </li>
                <li>
                  <Link to="library.html">
                    <i className="fas fa-book"></i> <span>Library</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>Pages</span>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-shield-alt"></i>{" "}
                    <span> Authentication </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="login.html">Login</Link>
                    </li>
                    <li>
                      <Link to="register.html">Register</Link>
                    </li>
                    <li>
                      <Link to="forgot-password.html">Forgot Password</Link>
                    </li>
                    <li>
                      <Link to="error-404.html">Error Page</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="blank-page.html">
                    <i className="fas fa-file"></i> <span>Blank Page</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>Others</span>
                </li>
                <li>
                  <Link to="sports.html">
                    <i className="fas fa-baseball-ball"></i> <span>Sports</span>
                  </Link>
                </li>
                <li>
                  <Link to="hostel.html">
                    <i className="fas fa-hotel"></i> <span>Hostel</span>
                  </Link>
                </li>
                <li>
                  <Link to="transport.html">
                    <i className="fas fa-bus"></i> <span>Transport</span>
                  </Link>
                </li>
                <li className="menu-title">
                  <span>UI Interface</span>
                </li>
                <li>
                  <Link to="components.html">
                    <i className="fas fa-vector-square"></i>{" "}
                    <span>Components</span>
                  </Link>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-columns"></i> <span> Forms </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="form-basic-inputs.html">Basic Inputs </Link>
                    </li>
                    <li>
                      <Link to="form-input-groups.html">Input Groups </Link>
                    </li>
                    <li>
                      <Link to="form-horizontal.html">Horizontal Form </Link>
                    </li>
                    <li>
                      <Link to="form-vertical.html"> Vertical Form </Link>
                    </li>
                    <li>
                      <Link to="form-mask.html"> Form Mask </Link>
                    </li>
                    <li>
                      <Link to="form-validation.html"> Form Validation </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-table"></i> <span> Tables </span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="tables-basic.html">Basic Tables </Link>
                    </li>
                    <li>
                      <Link to="data-tables.html">Data Table </Link>
                    </li>
                  </ul>
                </li>
                <li className="submenu">
                  <Link to="#">
                    <i className="fas fa-code"></i> <span>Multi Level</span>{" "}
                    <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li className="submenu">
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="#">
                            <span>Level 2</span>
                          </Link>
                        </li>
                        <li className="submenu">
                          <Link to="#">
                            {" "}
                            <span> Level 2</span>{" "}
                            <span className="menu-arrow"></span>
                          </Link>
                          <ul>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                            <li>
                              <Link to="#">Level 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="#">
                            {" "}
                            <span>Level 2</span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="#">
                        {" "}
                        <span>Level 1</span>
                      </Link>
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
                  <h3 className="page-title">Welcome Admin!</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item active">Dashboard</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-one w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-user-graduate"></i>
                      </div>
                      <div className="db-info">
                        <h3>50055</h3>
                        <h6>Students</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-two w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-crown"></i>
                      </div>
                      <div className="db-info">
                        <h3>50+</h3>
                        <h6>Awards</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-three w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-building"></i>
                      </div>
                      <div className="db-info">
                        <h3>30+</h3>
                        <h6>Department</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12 d-flex">
                <div className="card bg-four w-100">
                  <div className="card-body">
                    <div className="db-widgets d-flex justify-content-between align-items-center">
                      <div className="db-icon">
                        <i className="fas fa-file-invoice-dollar"></i>
                      </div>
                      <div className="db-info">
                        <h3>$505</h3>
                        <h6>Revenue</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Revenue</h5>
                      </div>
                      <div className="col-6">
                        <ul className="list-inline-group text-right mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              <select className="form-control form-control-sm">
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
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
              <div className="col-md-12 col-lg-6">
                <div className="card card-chart">
                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col-6">
                        <h5 className="card-title">Number of Students</h5>
                      </div>
                      <div className="col-6">
                        <ul className="list-inline-group text-right mb-0 pl-0">
                          <li className="list-inline-item">
                            <div className="form-group mb-0 amount-spent-select">
                              <select className="form-control form-control-sm">
                                <option>Today</option>
                                <option>Last Week</option>
                                <option>Last Month</option>
                              </select>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div id="bar"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Star Students</h5>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-hover table-center">
                        <thead className="thead-light">
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th className="text-center">Marks</th>
                            <th className="text-center">Percentage</th>
                            <th className="text-right">Year</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">John Smith</td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-right">
                              <div>2019</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1245</div>
                            </td>
                            <td className="text-nowrap">Jolie Hoskins</td>
                            <td className="text-center">1195</td>
                            <td className="text-center">99.5%</td>
                            <td className="text-right">
                              <div>2018</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE1625</div>
                            </td>
                            <td className="text-nowrap">Pennington Joy</td>
                            <td className="text-center">1196</td>
                            <td className="text-center">99.6%</td>
                            <td className="text-right">
                              <div>2017</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2516</div>
                            </td>
                            <td className="text-nowrap">Millie Marsden</td>
                            <td className="text-center">1187</td>
                            <td className="text-center">98.2%</td>
                            <td className="text-right">
                              <div>2016</div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-nowrap">
                              <div>PRE2209</div>
                            </td>
                            <td className="text-nowrap">John Smith</td>
                            <td className="text-center">1185</td>
                            <td className="text-center">98%</td>
                            <td className="text-right">
                              <div>2015</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex">
                <div className="card flex-fill">
                  <div className="card-header">
                    <h5 className="card-title">Student Activity</h5>
                  </div>
                  <div className="card-body">
                    <ul className="activity-feed">
                      <li className="feed-item">
                        <div className="feed-date">Apr 13</div>
                        <span className="feed-text">
                          <Link to="">John Doe</Link> won 1st place in{" "}
                          <Link to="">"Chess"</Link>
                        </span>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Mar 21</div>
                        <span className="feed-text">
                          <Link to="">Justin Lee</Link> participated in{" "}
                          <Link to="invoice.html">"Carrom"</Link>
                        </span>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Feb 2</div>
                        <span className="feed-text">
                          <Link to="">Justin Lee</Link>attended internation
                          conference in{" "}
                          <Link to="profile.html">"St.John School"</Link>
                        </span>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Apr 13</div>
                        <span className="feed-text">
                          <Link to="">John Doe</Link> won 1st place in{" "}
                          <Link to="">"Chess"</Link>
                        </span>
                      </li>
                      <li className="feed-item">
                        <div className="feed-date">Mar 21</div>
                        <span className="feed-text">
                          <Link to="">Justin Lee</Link> participated in{" "}
                          <Link to="invoice.html">"Carrom"</Link>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill fb sm-box">
                  <i className="fab fa-facebook"></i>
                  <h6>50,095</h6>
                  <p>Likes</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill twitter sm-box">
                  <i className="fab fa-twitter"></i>
                  <h6>48,596</h6>
                  <p>Follows</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill insta sm-box">
                  <i className="fab fa-instagram"></i>
                  <h6>52,085</h6>
                  <p>Follows</p>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-12">
                <div className="card flex-fill linkedin sm-box">
                  <i className="fab fa-linkedin-in"></i>
                  <h6>69,050</h6>
                  <p>Follows</p>
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

export default AdminDashboard;
