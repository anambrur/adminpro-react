import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function SliderList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/getSlider.php")
      .then((res) => setProducts(res.data.data));
  }, []);

  const SlDelete = (id) => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/delSlider.php?id=${id}`
      )
      .then((res) => {
        console.log(res.data);
        axios
          .get(
            "http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/getSlider.php"
          )
          .then((res) => setProducts(res.data));
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <NavLink to="/slider-add" className="btn btn-warning my-2">
              Add Slider
            </NavLink>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">SL</th>
                  <th scope="col">Slider Header</th>
                  <th scope="col">Slider Title</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((d, i) => {
                  return (
                    <tr>
                      <th scope="row" key={i}>
                        {i + 1}
                      </th>
                      <td>{d.heading}</td>
                      <td>{d.title}</td>
                      <td>
                        <img
                          src={`http://localhost/reactjs/adminpro-react/backend/images/${d.photo}`}
                          height={50}
                          alt=""
                        />{" "}
                        {d.photo}
                      </td>
                      <td>
                        <NavLink to={`/slider-edit/${d.id}`}>
                          <i
                            className="far fa-edit me-2"
                            style={{ color: "green" }}
                          ></i>
                        </NavLink>

                        <NavLink to="/slider-list">
                          <i
                            className="fas fa-trash"
                            style={{ color: "red" }}
                            onClick={() => SlDelete(d.id)}
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
