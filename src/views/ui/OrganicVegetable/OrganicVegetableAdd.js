import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrganicVegetableAdd() {
  const [orgaprodName, setorgaProdName] = useState("");
  const [orgaprodDetails, setorgaProdDetails] = useState("");
  const [orgaprodPrice, setorgaProdPrice] = useState("");
  const [orgaprodPhoto, setorgaProdPhoto] = useState("");
  const navi = useNavigate();
  const saveProduct = () => {
    const formdata = new FormData();
    formdata.append("orgaprodName", orgaprodName);
    formdata.append("orgaprodDetails", orgaprodDetails);
    formdata.append("orgaprodPrice", orgaprodPrice);
    formdata.append("orgaprodPhoto", orgaprodPhoto);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/setOrganicVegetable.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navi("/organic-vegetable-list");
      });
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
                  onChange={(e) => setorgaProdName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setorgaProdDetails(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setorgaProdPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setorgaProdPhoto(e.target.files[0])}
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
