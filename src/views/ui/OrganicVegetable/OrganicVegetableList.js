import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const [organicVegetable, setorganicVegetable] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/getOrganicVegetable.php")
      .then((res) => setorganicVegetable(res.data));
  }, []);

  const ProdDelete = (id) => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/delProduct.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/getOrganicVegetable.php"
          )
          .then((res) => setorganicVegetable(res.data));
      });
  };

  return (
    <>
    
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/organic-vegetable-add" className="btn btn-warning my-2">
              Add Organic Vegetable
            </NavLink>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Title</th>
                  <th scope="col">Details</th>
                  <th scope="col">Price</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {organicVegetable.map((d, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        {i + 1}
                      </th>
                      <td>{d.title}</td>
                      <td>{d.details}</td>
                      <td>{d.price}</td>
                      <td>
                        <img
                          src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                          height={50}
                          alt=""
                        />{" "}
                        {d.photo}
                      </td>
                      <td>
                        <NavLink to={`/product-edit/${d.id}`}>
                          <i
                            className="far fa-edit me-2"
                            style={{ color: "green" }}
                          ></i>
                        </NavLink>

                        <NavLink to="/product-list">
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                            onClick={() => ProdDelete(d.id)}
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
