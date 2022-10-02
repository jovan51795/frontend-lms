import React from "react";
import { Link } from "react-router-dom";
import VisibilitySharpIcon from "@mui/icons-material/VisibilitySharp";

const StudentList = () => {
  return (
    <div className="main-wrapper">
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card card-table">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0 datatable">
                      <thead>
                        <tr>
                          <th>Student ID</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Birthdate</th>
                          <th>Mobile Number</th>
                          <th>Address</th>
                          <th className="text-left">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {students.map((student) => ( */}
                        <tr>
                          <td>PRE2209</td>
                          <td>John</td>
                          <td>Doe</td>
                          <td>2 Feb 2002</td>
                          <td>097 3584 5870</td>
                          <td>911 Deer Ridge Drive,USA</td>
                          <td className="text-left">
                            <div className="actions">
                              <Link to="" className="btn btn-sm btn-info mr-2">
                                <VisibilitySharpIcon fontSize="inherit" />
                              </Link>
                              <Link
                                to=""
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
                        {/* ))} */}
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
