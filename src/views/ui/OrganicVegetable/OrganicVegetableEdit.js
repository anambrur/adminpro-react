import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function OrganicVegetableEdit() {
  const { id } = useParams();
  const [orgaprodName, setorgaProdName] = useState("");
  const [orgaprodDetails, setorgaProdDetails] = useState("");
  const [orgaprodPrice, setorgaProdPrice] = useState("");
  const [orgaprodPhoto, setorgaProdPhoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/getIDOrganicVegetable.php?id=${id}`
      )
      .then((res) => {
        setorgaProdName(res.data.title);
        setorgaProdDetails(res.data.details);
        setorgaProdPrice(res.data.price);
        setorgaProdPhoto(res.data.photo);
      });
  }, []);

  const saveProduct = () => {
    const formdata = new FormData();
    formdata.append("orgaprodName", orgaprodName);
    formdata.append("orgaprodDetails", orgaprodDetails);
    formdata.append("orgaprodPrice", orgaprodPrice);
    formdata.append("orgaprodPhoto", orgaprodPhoto);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/OrganicVegetable/updateOrganicVegetable.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setorgaProdName("");
        setorgaProdDetails("");
        setorgaProdPrice("");
        setorgaProdPhoto("");
        navi("/organic-vegetable-list");
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
                  onChange={(e) => setorgaProdName(e.target.value)}
                  value={orgaprodName}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setorgaProdDetails(e.target.value)}
                  value={orgaprodDetails}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setorgaProdPrice(e.target.value)}
                  value={orgaprodPrice}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image</label>
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
