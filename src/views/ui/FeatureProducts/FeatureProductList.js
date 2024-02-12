import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function FeatureProductList() {
  const [featureProduct, setFeatureProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/getFeatProduct.php")
      .then((res) => setFeatureProduct(res.data.data));
  }, []);

  const FeatProdDelete = (id) => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/delFeatProduct.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/getFeatProduct.php"
          )
          .then((res) => setFeatureProduct(res.data.data));
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/feature-product-add" className="btn btn-warning my-2">
              Add Feature Product
            </NavLink>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Name</th>
                  <th scope="col">Details</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {featureProduct.map((d, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        {i + 1}
                      </th>
                      <td>{d.name}</td>
                      <td>{d.details}</td>
                      <td>
                        <img
                          src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                          height={50}
                          alt=""
                        />{" "}
                        {d.photo}
                      </td>
                      <td>
                        <NavLink to={`/feature-product-edit/${d.id}`}>
                          <i
                            className="far fa-edit me-2"
                            style={{ color: "green" }}
                          ></i>
                        </NavLink>

                        <NavLink to="/feature-product-list">
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                            onClick={() => FeatProdDelete(d.id)}
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
