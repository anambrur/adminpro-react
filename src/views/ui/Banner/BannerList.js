import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function BannerList() {
  const [advertisment, setadvertisment] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/reactjs/adminpro-react/backend/API/Banner/getBanner.php")
      .then((res) => setadvertisment(res.data));
  }, []);

  const BannerDelete = (id) => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/Banner/delBanner.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/reactjs/adminpro-react/backend/API/Banner/getBanner.php"
          )
          .then((res) => setadvertisment(res.data));
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/banner-add" className="btn btn-warning my-2">
              Add Feature Product
            </NavLink>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Store</th>
                  <th scope="col">Details</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {advertisment.map((d, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        {i + 1}
                      </th>
                      <td>{d.title}</td>
                      <td>{d.store}</td>
                      <td>{d.details}</td>
                      <td>
                        <img
                          src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                          height={50}
                          alt=""
                        />{" "}
                        {d.photo}
                      </td>
                      <td>{d.price}</td>
                      <td>
                        <NavLink to={`/banner-edit/${d.id}`}>
                          <i
                            className="far fa-edit me-2"
                            style={{ color: "green" }}
                          ></i>
                        </NavLink>

                        <NavLink to="/banner-list">
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                            onClick={() => BannerDelete(d.id)}
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
