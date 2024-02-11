import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ClientsList() {
  const [clinets, setClinets] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/reactjs/adminpro-react/backend/API/Clinets/getClients.php")
      .then((res) => setClinets(res.data));
  }, []);

  const ClientDelete = (id) => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/Clinets/delClients.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/reactjs/adminpro-react/backend/API/Clinets/getClients.php"
          )
          .then((res) => setClinets(res.data));
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/client-add" className="btn btn-warning my-2">
              Add Client
            </NavLink>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Details</th>
                  <th scope="col">Profession</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {clinets.map((d, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        {i + 1}
                      </th>
                      <td>{d.client_name}</td>
                      <td>{d.details}</td>
                      <td>{d.profession}</td>
                      <td>
                        <img
                          src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                          height={50}
                          alt=""
                        />{" "}
                        {d.photo}
                      </td>
                      <td>
                        <NavLink to={`/client-edit/${d.id}`}>
                          <i
                            className="far fa-edit me-2"
                            style={{ color: "green" }}
                          ></i>
                        </NavLink>

                        <NavLink to="/clients-list">
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                            onClick={() => ClientDelete(d.id)}
                          ></i>
                        </NavLink>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
