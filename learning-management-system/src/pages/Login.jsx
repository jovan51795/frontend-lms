import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Joi from "joi";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../redux/actions/adminAuthActions";

const Login = () => {
  const navigate = useNavigate();
  useSelector((state) => {
    if (state.adminAuth.payload && state.adminAuth.payload.status === 1) {
      navigate("/dashboard");
    }
  });

  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const handleOnChange = (event) => {
    event.preventDefault();
    setLoginForm({
      ...loginForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });

    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);

    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(adminLogin(loginForm));
  };

  const isFormInvalid = () => {
    const result = schema.validate(loginForm);
    return !!result.error;
  };
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
                <p className="account-subtitle"></p>
                <form onSubmit={handleOnSubmit} method="Post">
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.username && "border-danger"
                      }`}
                      value={loginForm.username}
                      onChange={handleOnChange}
                      name="username"
                      type="text"
                      placeholder="Username"
                    />
                    {!!errors.username ? (
                      <span className="text-danger">{errors.use}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.password && "border-danger"
                      }`}
                      value={loginForm.password}
                      onChange={handleOnChange}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    {!!errors.username ? (
                      <span className="text-danger">{errors.use}</span>
                    ) : null}
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={isFormInvalid()}
                    >
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
