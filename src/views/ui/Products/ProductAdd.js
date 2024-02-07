import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductAdd() {
  const [prodName, setProdName] = useState("");
  const [prodDetails, setProdDetails] = useState("");
  const [prodPrice, setProdPrice] = useState("");
  const [prodPhoto, setProdPhoto] = useState("");
  const navi = useNavigate();
  const saveProduct = () => {
    const formdata = new FormData();
    formdata.append("prodName", prodName);
    formdata.append("prodDetails", prodDetails);
    formdata.append("prodPrice", prodPrice);
    formdata.append("prodPhoto", prodPhoto);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/ProductAPI/setProduct.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      });
    navi("/product-list");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdDetails(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setProdPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image:</label>
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
