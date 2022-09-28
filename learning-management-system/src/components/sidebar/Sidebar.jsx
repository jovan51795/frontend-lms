import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <ul>
            <li className="menu-title">
              <span>Main Menu</span>
            </li>
            <li className="submenu active">
              <Link to="">
                <i className="fas fa-user-graduate"></i> <span> Dashboard</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="" className="active">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="">Teacher Dashboard</Link>
                </li>
                <li>
                  <Link to="">Student Dashboard</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-user-graduate"></i> <span> Students</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Student List</Link>
                </li>
                <li>
                  <Link to="">Student View</Link>
                </li>
                <li>
                  <Link to="">Student Add</Link>
                </li>
                <li>
                  <Link to="">Student Edit</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-chalkboard-teacher"></i>{" "}
                <span> Teachers</span> <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Teacher List</Link>
                </li>
                <li>
                  <Link to="">Teacher View</Link>
                </li>
                <li>
                  <Link to="">Teacher Add</Link>
                </li>
                <li>
                  <Link to="">Teacher Edit</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-building"></i> <span> Departments</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Department List</Link>
                </li>
                <li>
                  <Link to="">Department Add</Link>
                </li>
                <li>
                  <Link to="">Department Edit</Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-book-reader"></i> <span> Subjects</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Subject List</Link>
                </li>
                <li>
                  <Link to="">Subject Add</Link>
                </li>
                <li>
                  <Link to="">Subject Edit</Link>
                </li>
              </ul>
            </li>
            <li className="menu-title">
              <span>Management</span>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-file-invoice-dollar"></i>{" "}
                <span> Accounts</span> <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Fees Collection</Link>
                </li>
                <li>
                  <Link to="">Expenses</Link>
                </li>
                <li>
                  <Link to="">Salary</Link>
                </li>
                <li>
                  <Link to="">Add Fees</Link>
                </li>
                <li>
                  <Link href="add-expenses.html">Add Expenses</Link>
                </li>
                <li>
                  <Link to="">Add Salary</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-holly-berry"></i> <span>Holiday</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-comment-dollar"></i> <span>Fees</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-clipboard-list"></i> <span>Exam list</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-calendar-day"></i> <span>Events</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-table"></i> <span>Time Table</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-book"></i> <span>Library</span>
              </Link>
            </li>
            <li className="menu-title">
              <span>Pages</span>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-shield-alt"></i>{" "}
                <span> Authentication </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Login</Link>
                </li>
                <li>
                  <Link to="">Register</Link>
                </li>
                <li>
                  <Link to="">Forgot Password</Link>
                </li>
                <li>
                  <Link to="">Error Page</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-file"></i> <span>Blank Page</span>
              </Link>
            </li>
            <li className="menu-title">
              <span>Others</span>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-baseball-ball"></i> <span>Sports</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-hotel"></i> <span>Hostel</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-bus"></i> <span>Transport</span>
              </Link>
            </li>
            <li className="menu-title">
              <span>UI Interface</span>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-vector-square"></i> <span>Components</span>
              </Link>
            </li>
            <li className="submenu">
              <Link hto="">
                <i className="fas fa-columns"></i> <span> Forms </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Basic Inputs </Link>
                </li>
                <li>
                  <Link to="">Input Groups </Link>
                </li>
                <li>
                  <Link to="">Horizontal Form </Link>
                </li>
                <li>
                  <Link to=""> Vertical Form </Link>
                </li>
                <li>
                  <Link to=""> Form Mask </Link>
                </li>
                <li>
                  <Link to=""> Form Validation </Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-table"></i> <span> Tables </span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li>
                  <Link to="">Basic Tables </Link>
                </li>
                <li>
                  <Link to="">Data Table </Link>
                </li>
              </ul>
            </li>
            <li className="submenu">
              <Link to="">
                <i className="fas fa-code"></i> <span>Multi Level</span>{" "}
                <span className="menu-arrow"></span>
              </Link>
              <ul>
                <li className="submenu">
                  <Link to="">
                    {" "}
                    <span>Level 1</span> <span className="menu-arrow"></span>
                  </Link>
                  <ul>
                    <li>
                      <Link to="">
                        <span>Level 2</span>
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="">
                        {" "}
                        <span> Level 2</span>{" "}
                        <span className="menu-arrow"></span>
                      </Link>
                      <ul>
                        <li>
                          <Link to="">Level 3</Link>
                        </li>
                        <li>
                          <Link to="">Level 3</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="">
                        {" "}
                        <span>Level 2</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="">
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
  );
};

export default Sidebar;
