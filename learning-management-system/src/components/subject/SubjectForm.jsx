import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Joi from "joi";

const SubjectForm = () => {
  const [subjectForm, setSubjectForm] = useState({
    title: "",
    subject_code: "",
    units: 0,
    prerequisites: "",
    active_deactive: true,
  });

  const [errors, seterrors] = useState({});
  const dispatch = useDispatch();

  const schema = Joi.object({
    subject_code: Joi.string().required(),
    title: Joi.string().required(),
    units: Joi.number().min(1).required(),
    prerequisites: Joi.string(),
    active_deactive: Joi.boolean(),
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setSubjectForm({
      ...subjectForm,
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // put dispatch function here
  };

  const isFormInvalid = () => {
    const result = schema.validate(subjectForm);
    return !!result.error;
  };

  return (
    <>
      <div className="main-wrapper">
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Add Subject</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="subjects.html">Subject</a>
                    </li>
                    <li className="breadcrumb-item active">Add Subject</li>
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
                            <span>Subject Information</span>
                          </h5>
                        </div>{" "}
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Title</label>
                            <input
                              type="text"
                              className={`form-control 
                            ${!!errors.title && "border-danger"}`}
                              name="title"
                              value={subjectForm.title}
                              onChange={handleOnChange}
                            />
                            {!!errors.title && (
                              <span className="text-danger">
                                {errors.title}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-sm-3">
                          <div className="form-group">
                            <label>Subject Code</label>
                            <input
                              type="text"
                              className={`form-control 
                            ${!!errors.title && "border-danger"}`}
                              name="subject_code"
                              value={subjectForm.subject_code}
                              onChange={handleOnChange}
                            />
                            {!!errors.subject_code && (
                              <span className="text-danger">
                                {errors.subject_code}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="col-12 col-sm-3">
                          <div className="form-group">
                            <label>Units</label>
                            <input
                              type="number"
                              className={`form-control 
                            ${!!errors.units && "border-danger"}`}
                              name="units"
                              value={subjectForm.units}
                              onChange={handleOnChange}
                            />
                            {!!errors.units && (
                              <span className="text-danger">
                                {errors.units}
                              </span>
                            )}
                          </div>
                          className
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form-group">
                            <label>Prerequisites</label>
                            <input
                              type="text"
                              className={`form-control 
                            ${!!errors.prerequisites && "border-danger"}`}
                              name="prerequisites"
                              value={subjectForm.prerequisites}
                              onChange={handleOnChange}
                            />
                            {!!errors.prerequisites && (
                              <span className="text-danger">
                                {errors.prerequisites}
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
    </>
  );
};

export default SubjectForm;
