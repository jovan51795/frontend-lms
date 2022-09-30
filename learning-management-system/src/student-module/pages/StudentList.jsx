import React from "react";
import { Link } from "react-router-dom";

const StudentList = () => {
  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <Link to="index.html" className="logo">
            <img src="/assets/img/logo.png" alt="Logo" />
          </Link>
          <Link to="index.html" className="logo logo-small">
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
                <Link to="javascript:void(0)" className="clear-noti">
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
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Students</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="index.html">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Students</li>
                </ul>
              </div>
              <div className="col-auto text-right float-right ml-auto">
                <Link to="#" className="btn btn-outline-primary mr-2">
                  <i className="fas fa-download"></i> Download
                </Link>
                <Link to="add-student.html" className="btn btn-primary">
                  <i className="fas fa-plus"></i>
                </Link>
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
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-01.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Aaliyah</Link>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>2 Feb 2002</td>
                          <td>Jeffrey Wong</td>
                          <td>097 3584 5870</td>
                          <td>911 Deer Ridge Drive,USA</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2213</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-03.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Malynne</Link>
                            </h2>
                          </td>
                          <td>8 A</td>
                          <td>3 June 2010</td>
                          <td>Fields Malynne</td>
                          <td>242 362 3100</td>
                          <td>Bacardi Rd P.O. Box N-4880, New Providence</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2143</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-02.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">
                                Levell Scott
                              </Link>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>12 Apr 2002</td>
                          <td>Jeffrey Scott</td>
                          <td>026 7318 4366</td>
                          <td>P.O. Box: 41, Gaborone</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2431</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-03.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Minnie</Link>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>24 Feb 2000</td>
                          <td>J Shaffer</td>
                          <td>952 512 4909</td>
                          <td>4771 Oral Lake Road, Golden Valley</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1534</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-04.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Lois A</Link>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>22 Jul 2006</td>
                          <td>Cleary Wong</td>
                          <td>413 289 1314</td>
                          <td>2844 Leverton Cove Road, Palmer</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2153</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-05.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Calvin</Link>
                            </h2>
                          </td>
                          <td>9 B</td>
                          <td>8 Dec 2003</td>
                          <td>Minnie J Shaffer</td>
                          <td>701 753 3810</td>
                          <td>1900 Hidden Meadow Drive, Crete</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1252</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-06.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Joe Kelley</Link>
                            </h2>
                          </td>
                          <td>11 C</td>
                          <td>7 Oct 2000</td>
                          <td>Vincent Howard</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1434</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-07.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">Vincent</Link>
                            </h2>
                          </td>
                          <td>10 A</td>
                          <td>4 Jan 2002</td>
                          <td>Kelley Joe</td>
                          <td>402 221 7523</td>
                          <td>3979 Ashwood Drive, Omaha</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2345</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-08.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">
                                Kozma Tatari
                              </Link>
                            </h2>
                          </td>
                          <td>9 A</td>
                          <td>1 Feb 2006</td>
                          <td>Lombardi</td>
                          <td>04 2239 968</td>
                          <td>Rruga E Kavajes, Condor Center, Tirana</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE2365</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-09.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">
                                John Chambers
                              </Link>
                            </h2>
                          </td>
                          <td>11 B</td>
                          <td>13 Sept 2003</td>
                          <td>Wong Jeffrey</td>
                          <td>870 663 2334</td>
                          <td>4667 Sunset Drive, Pine Bluff</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>PRE1234</td>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="student-details.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/assets/img/profiles/avatar-10.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link to="student-details.html">
                                Nathan Humphries
                              </Link>
                            </h2>
                          </td>
                          <td>10 B</td>
                          <td>26 Apr 1994</td>
                          <td>Stephen Marley</td>
                          <td>077 3499 9959</td>
                          <td>86 Lamphey Road, Thelnetham</td>
                          <td className="text-right">
                            <div className="actions">
                              <Link
                                href="edit-student.html"
                                className="btn btn-sm bg-success-light mr-2"
                              >
                                <i className="fas fa-pen"></i>
                              </Link>
                              <Link
                                href="#"
                                className="btn btn-sm bg-danger-light"
                              >
                                <i className="fas fa-trash"></i>
                              </Link>
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
