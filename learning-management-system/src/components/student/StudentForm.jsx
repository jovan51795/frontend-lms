import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Joi, { number } from "joi";

const StudentForm = () => {
  const currentDate = new Date();
  const defaultDate = new Date(currentDate).toISOString().split("T")[0];
  const currentYear = new Date().getFullYear();

  const [studentForm, setStudentForm] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    studentId: "",
    username: "",
    password: "",
    birthdate: defaultDate,
    mobileNumber: "",
    program: "",
    course: "",
    semester: "",
    yearLevel: currentYear,
    status: true,
    address: "",
  });

  const [errors, seterrors] = useState({});
  const dispatch = useDispatch();

  const schema = Joi.object({
    firstName: Joi.string().required(),
    middleName: Joi.string().allow("").optional(),
    lastName: Joi.string().required(),
    gender: Joi.string().required(),
    studentId: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required(),
    birthdate: Joi.date().required(),
    mobileNumber: Joi.string().required(),
    program: Joi.string().required(),
    course: Joi.string().required(),
    semester: Joi.string().required(),
    yearLevel: Joi.number().required(),
    status: Joi.boolean(),
    address: Joi.string().required(),
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setStudentForm({
      ...studentForm,
      [e.currentTarget.name]: e.currentTarget.value,
    });

    const { error } = schema
      .extract(e.currentTarget.name)
      .label(e.currentTarget.name.toUpperCase())
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

  // FOR DISABLED Button function
  const isFormInvalid = () => {
    const result = schema.validate(studentForm);
    return !!result.error;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // put dispatch function here
  };

  console.log(studentForm);

  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Add Students</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="students.html">Students</Link>
                  </li>
                  <li className="breadcrumb-item active">Add Students</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12">
                        <h5 className="form-title">
                          <span>Student Information</span>
                        </h5>
                      </div>
                      <div className="col-12 col-sm-6">
                        <label>First Name</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.firstName && "border-danger"}`}
                            name="firstName"
                            value={studentForm.firstName}
                            onChange={handleOnChange}
                          />
                          {!!errors.firstName && (
                            <span className="text-danger">
                              {errors.firstName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Middle Name</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.middleName && "border-danger"}`}
                            name="middleName"
                            value={studentForm.middleName}
                            onChange={handleOnChange}
                          />
                          {!!errors.middleName && (
                            <span className="text-danger">
                              {errors.middleName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.lastName && "border-danger"}`}
                            name="lastName"
                            value={studentForm.lastName}
                            onChange={handleOnChange}
                          />
                          {!!errors.lastName && (
                            <span className="text-danger">
                              {errors.lastName}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Gender</label>
                          <select
                            className={`form-control 
                            ${!!errors.lastName && "border-danger"}`}
                            name="gender"
                            value={studentForm.gender}
                            onChange={handleOnChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                          {!!errors.gender && (
                            <span className="text-danger">{errors.gender}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Student Id</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.studentId && "border-danger"}`}
                            name="studentId"
                            value={studentForm.studentId}
                            onChange={handleOnChange}
                          />
                          {!!errors.studentId && (
                            <span className="text-danger">
                              {errors.studentId}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.username && "border-danger"}`}
                            name="username"
                            value={studentForm.username}
                            onChange={handleOnChange}
                          />
                          {!!errors.username && (
                            <span className="text-danger">
                              {errors.username}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.password && "border-danger"}`}
                            name="password"
                            value={studentForm.password}
                            onChange={handleOnChange}
                          />
                          {!!errors.password && (
                            <span className="text-danger">
                              {errors.password}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Birthdate</label>
                          <div>
                            <input
                              type="date"
                              className={`form-control 
                            ${!!errors.birthdate && "border-danger"}`}
                              name="birthdate"
                              value={studentForm.birthdate}
                              onChange={handleOnChange}
                              max={new Date().toISOString().slice(0, 10)}
                            />
                            {!!errors.birthdate && (
                              <span className="text-danger">
                                {errors.birthdate}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Mobile Number</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.mobileNumber && "border-danger"}`}
                            name="mobileNumber"
                            value={studentForm.mobileNumber}
                            onChange={handleOnChange}
                          />
                          {!!errors.mobileNumber && (
                            <span className="text-danger">
                              {errors.mobileNumber}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Program</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.program && "border-danger"}`}
                            name="program"
                            value={studentForm.program}
                            onChange={handleOnChange}
                          />
                          {!!errors.program && (
                            <span className="text-danger">
                              {errors.program}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Course</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.course && "border-danger"}`}
                            name="course"
                            value={studentForm.course}
                            onChange={handleOnChange}
                          />
                          {!!errors.course && (
                            <span className="text-danger">{errors.course}</span>
                          )}
                        </div>
                      </div>

                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Semester</label>
                          <input
                            type="text"
                            className={`form-control 
                            ${!!errors.semester && "border-danger"}`}
                            name="semester"
                            value={studentForm.semester}
                            onChange={handleOnChange}
                          />
                          {!!errors.semester && (
                            <span className="text-danger">
                              {errors.semester}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-3">
                        <div className="form-group">
                          <label>Year Level</label>
                          <input
                            type="number"
                            className={`form-control 
                            ${!!errors.yearLevel && "border-danger"}`}
                            name="yearLevel"
                            value={studentForm.yearLevel}
                            onChange={handleOnChange}
                          />
                          {!!errors.yearLevel && (
                            <span className="text-danger">
                              {errors.yearLevel}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div className="form-group">
                          <label>Address (optional)</label>
                          <textarea
                            className={`form-control 
                            ${!!errors.yearLevel && "border-danger"}`}
                            name="address"
                            value={studentForm.address}
                            onChange={handleOnChange}
                          ></textarea>
                          {!!errors.address && (
                            <span className="text-danger">
                              {errors.address}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isFormInvalid()}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
