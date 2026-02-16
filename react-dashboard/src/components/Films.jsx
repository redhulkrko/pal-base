import React from "react";
import "./Films.css";

const Films = () => {
  const films = [
    {
      id: 1,
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: 33,
      startDate: "2008/11/28",
      salary: "$162,700",
      avatar: "/assets/avatars/avatar1.jpeg"
    },
    {
      id: 2,
      name: "Angelica Ramos",
      position: "Chief Executive Officer(CEO)",
      office: "London",
      age: 47,
      startDate: "2009/10/09",
      salary: "$1,200,000",
      avatar: "/assets/avatars/avatar2.jpeg"
    },
    {
      id: 3,
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: 66,
      startDate: "2009/01/12",
      salary: "$86,000",
      avatar: "/assets/avatars/avatar3.jpeg"
    },
    {
      id: 4,
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: 41,
      startDate: "2012/10/13",
      salary: "$132,000",
      avatar: "/assets/avatars/avatar4.jpeg"
    },
    {
      id: 5,
      name: "Brenden Wagner",
      position: "Software Engineer",
      office: "San Francisco",
      age: 28,
      startDate: "2011/06/07",
      salary: "$206,850",
      avatar: "/assets/avatars/avatar5.jpeg"
    },
    {
      id: 6,
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: 61,
      startDate: "2012/12/02",
      salary: "$372,000",
      avatar: "/assets/avatars/avatar1.jpeg"
    },
    {
      id: 7,
      name: "Bruno Nash",
      position: "Software Engineer",
      office: "London",
      age: 38,
      startDate: "2011/05/03",
      salary: "$163,500",
      avatar: "/assets/avatars/avatar2.jpeg"
    },
    {
      id: 8,
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      office: "New York",
      age: 21,
      startDate: "2011/12/12",
      salary: "$106,450",
      avatar: "/assets/avatars/avatar3.jpeg"
    },
    {
      id: 9,
      name: "Cara Stevens",
      position: "Sales Assistant",
      office: "New York",
      age: 46,
      startDate: "2011/12/06",
      salary: "$145,600",
      avatar: "/assets/avatars/avatar4.jpeg"
    },
    {
      id: 10,
      name: "Cedric Kelly",
      position: "Senior JavaScript Developer",
      office: "Edinburgh",
      age: 22,
      startDate: "2012/03/29",
      salary: "$433,060",
      avatar: "/assets/avatars/avatar5.jpeg"
    }
  ];

  return (
    <div className="container-fluid">
      <h3 className="text-dark mb-4">Team</h3>
      <div className="card shadow">
        <div className="card-header py-3">
          <p className="text-primary m-0 fw-bold">Employee Info</p>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 text-nowrap">
              <div id="dataTable_length" className="dataTables_length" aria-controls="dataTable">
                <label className="form-label">
                  Show&nbsp;
                  <select className="d-inline-block form-select form-select-sm">
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                  &nbsp;
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-md-end dataTables_filter" id="dataTable_filter">
                <label className="form-label">
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    aria-controls="dataTable"
                    placeholder="Search"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="table-responsive mt-2 table" id="dataTable" role="grid" aria-describedby="dataTable_info">
            <table className="table my-0" id="dataTable">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Age</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {films.map((film) => (
                  <tr key={film.id}>
                    <td>
                      <img
                        className="rounded-circle me-2"
                        width="30"
                        height="30"
                        src={film.avatar}
                        alt={film.name}
                      />
                      {film.name}
                    </td>
                    <td>{film.position}</td>
                    <td>{film.office}</td>
                    <td>{film.age}</td>
                    <td>{film.startDate}</td>
                    <td>{film.salary}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td><strong>Name</strong></td>
                  <td><strong>Position</strong></td>
                  <td><strong>Office</strong></td>
                  <td><strong>Age</strong></td>
                  <td><strong>Start date</strong></td>
                  <td><strong>Salary</strong></td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="row">
            <div className="col-md-6 align-self-center">
              <p id="dataTable_info" className="dataTables_info" role="status" aria-live="polite">
                Showing 1 to 10 of 27
              </p>
            </div>
            <div className="col-md-6">
              <nav className="d-lg-flex justify-content-lg-end dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <a className="page-link" aria-label="Previous" href="#">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" aria-label="Next" href="#">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Films;
