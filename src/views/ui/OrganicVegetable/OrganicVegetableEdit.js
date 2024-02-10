import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductEdit() {
  const { id } = useParams();
  const [prodName, setProdName] = useState("");
  const [prodDetails, setProdDetails] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodPhoto, setProdPhoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/getIDProduct.php?id=${id}`
      )
      .then((res) => {
        setProdName(res.data.name);
        setProdDetails(res.data.details);
        setProdPrice(res.data.price);
        setProdPhoto(res.data.photo);
      });
  }, []);

  const saveProduct = () => {
    const formdata = new FormData();
    formdata.append("prodName", prodName);
    formdata.append("prodDetails", prodDetails);
    formdata.append("prodPrice", prodPrice);
    formdata.append("prodPhoto", prodPhoto);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/updateProduct.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProdName("");
        setProdDetails("");
        setProdPrice("");
        setProdPhoto("");
        navi("/product-list");
      });
  };

  return (
    <>
      <h1>Product Edit Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdName(e.target.value)}
                  value={prodName}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdDetails(e.target.value)}
                  value={prodDetails}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdPrice(e.target.value)}
                  value={prodPrice}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setProdPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveProduct}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
