import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Joi from "joi";

import { adminRegister } from "../redux/actions/adminAuthActions";

const Register = () => {
  const [adminForm, setadminForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    type: "Admin",
  });
  const [errors, seterrors] = useState({});
  const dispatch = useDispatch();

  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    type: Joi.string().required(),
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setadminForm({
      ...adminForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name)
      .validate(e.currentTarget.value);

    if (error) {
      seterrors({
        ...errors,
        [e.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[e.currentTarget.name];
      seterrors(errors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminRegister(adminForm));
  };
  const isFormInvalid = () => {
    const result = schema.validate(adminForm);
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
                <h1>Register</h1>
                <p className="account-subtitle">Access to our dashboard</p>

                <form onSubmit={handleSubmit} method="Post">
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.firstName && "border-danger"
                      }`}
                      type="text"
                      value={adminForm.firstName}
                      name="firstName"
                      onChange={handleOnChange}
                      placeholder="First Name"
                    />
                    {!!errors.firstName && (
                      <span className="text-danger">{errors.firstName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.lastName && "border-danger"
                      }`}
                      value={adminForm.lastName}
                      onChange={handleOnChange}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    {!!errors.firstName && (
                      <span className="text-danger">{errors.lastName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.username && "border-danger"
                      }`}
                      value={adminForm.username}
                      type="text"
                      name="username"
                      onChange={handleOnChange}
                      placeholder="username"
                    />
                    {!!errors.firstName && (
                      <span className="text-danger">{errors.username}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.type && "border-danger"
                      }`}
                      name="type"
                      value={adminForm.type}
                      onChange={handleOnChange}
                      type="text"
                      placeholder="Type"
                    />
                    {!!errors.firstName && (
                      <span className="text-danger">{errors.type}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      className={`form-control ${
                        !!errors.password && "border-danger"
                      }`}
                      name="password"
                      value={adminForm.password}
                      type="password"
                      onChange={handleOnChange}
                      placeholder="Password"
                    />
                    {!!errors.firstName && (
                      <span className="text-danger">{errors.password}</span>
                    )}
                  </div>
                  <div className="form-group mb-0">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={isFormInvalid()}
                    >
                      Register
                    </button>
                  </div>
                </form>

                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>

                <div className="social-login">
                  <span>Register with</span>
                  <Link className="facebook">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link className="google">
                    <i className="fab fa-google"></i>
                  </Link>
                </div>

                <div className="text-center dont-have">
                  Already have an account? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
