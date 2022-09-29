import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left">
              <img
                className="img-fluid"
                src="assets/img/logo-white.png"
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Login</h1>
                <p className="account-subtitle">sample</p>
                <form action="https://preschool.dreamguystech.com/html-template/index.html">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-block" type="submit">
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center forgotpass">
                  <Link to="">Forgot Password?</Link>
                </div>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                <div className="social-login">
                  <span>Login with</span>
                  <Link className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>
                <div className="text-center dont-have">
                  Don’t have an account? <Link to="/register">Register</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
