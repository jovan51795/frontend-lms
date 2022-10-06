import React from 'react'
import header from './../assets/css/DashboardHeader.module.css'

function DashboardHeader() {
  return (
    <header className={header.header}>
      <div className="topbar clearfix">
        <div className="container">
          <div className="row-fluid">
            <div className="col-md-6 col-sm-6 text-left">
              <p>
                <strong>
                  <i className="fa fa-phone"></i>
                </strong>{' '}
                +90 543 123 45 67 &nbsp;&nbsp;
                <strong>
                  <i className="fa fa-envelope"></i>
                </strong>{' '}
                <a href="mailto:#">info@yoursite.com</a>
              </p>
            </div>{' '}
            {/* end left */}
            <div className="col-md-6 col-sm-6 hidden-xs text-right">
              <div className="social">
                <a
                  className="facebook"
                  href="#"
                  data-tooltip="tooltip"
                  data-placement="bottom"
                  title="Facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  className="twitter"
                  href="#"
                  data-tooltip="tooltip"
                  data-placement="bottom"
                  title="Twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
                <a
                  className="google"
                  href="#"
                  data-tooltip="tooltip"
                  data-placement="bottom"
                  title="Google Plus"
                >
                  <i className="fa fa-google-plus"></i>
                </a>
                <a
                  className="linkedin"
                  href="#"
                  data-tooltip="tooltip"
                  data-placement="bottom"
                  title="Linkedin"
                >
                  <i className="fa fa-linkedin"></i>
                </a>
                <a
                  className="pinterest"
                  href="#"
                  data-tooltip="tooltip"
                  data-placement="bottom"
                  title="Pinterest"
                >
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
              {/* <!-- end social --> */}
            </div>
            {/* <!-- end left --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
      {/* <!-- end topbar --> */}

      <div className="container">
        <nav className="navbar navbar-default yamm">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="logo-normal">
              <a className="navbar-brand" href="index.html">
                <img src="/images/logo.png" alt="" />
              </a>
            </div>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="dropdown yamm-fw yamm-half">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle active">
                  Mega Menu <b className="fa fa-angle-down"></b>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="yamm-content clearfix">
                      <div className="row-fluid">
                        <div className="col-md-6 col-sm-6">
                          <h4>Course Pages</h4>
                          <ul>
                            <li>
                              <a href="#">Courses Name 01</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 02</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 03</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 04</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 05</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 06</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 07</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 08</a>
                            </li>
                            <li>
                              <a href="#">Courses Name 09</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6 col-sm-6">
                          <div className="menu-widget text-center">
                            <div className="image-wrap entry">
                              <img src="/upload/course_01.jpg" alt="" className="img-responsive" />
                              <div className="magnifier">
                                <a href="#" title="">
                                  <i className="flaticon-add"></i>
                                </a>
                              </div>
                            </div>
                            {/* <!-- end image-wrap --> */}
                            <h5>
                              <a href="#">Learning Bootstrap Framework</a>
                            </h5>
                            <small>$22.00</small>
                            <a href="#" className="menu-button">
                              View Course
                            </a>
                          </div>
                          {/* <!-- end widget --> */}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <a href="events.html">Events</a>
              </li>
              <li className="dropdown hassubmenu">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Shop <span className="fa fa-angle-down"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="shop.html">Shop Layout</a>
                  </li>
                  <li>
                    <a href="shop-single.html">Shop Single</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown hassubmenu">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Blog <span className="fa fa-angle-down"></span>
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a href="blog.html">Blog Right Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-1.html">Blog Left Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-2.html">Blog Grid Sidebar</a>
                  </li>
                  <li>
                    <a href="blog-3.html">Blog Grid Fullwidth</a>
                  </li>
                  <li>
                    <a href="blog-single.html">Blog Single</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="page-contact.html">Contact</a>
              </li>
              <li className="iconitem">
                <a href="#" data-toggle="modal" data-target="#login-modal">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li className="iconitem">
                <a className="shopicon" href="shop-cart.html">
                  <i className="fa fa-shopping-basket"></i> &nbsp;(0)
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- end navbar --> */}
      </div>
      {/* <!-- end container --> */}
    </header>
  )
}

export default DashboardHeader
