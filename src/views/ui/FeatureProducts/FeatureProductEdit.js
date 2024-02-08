import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function FeatureProductEdit() {
  const { id } = useParams();
  const [feaprodName, setfeaProdName] = useState("");
  const [feaprodDetails, setfeaProdDetails] = useState("");
  const [feaprodPhoto, setfeaProdPhoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/getIDFeatProduct.php?id=${id}`
      )
      .then((res) => {
        setfeaProdName(res.data.name);
        setfeaProdDetails(res.data.details);
        setfeaProdPhoto(res.data.photo);
      });
  }, []);

  const saveFeatureProduct = () => {
    const formdata = new FormData();
    formdata.append("feaprodName", feaprodName);
    formdata.append("feaprodDetails", feaprodDetails);
    formdata.append("feaprodPhoto", feaprodPhoto);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/updateFeatProduct.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setfeaProdName("");
        setfeaProdDetails("");
        setfeaProdPhoto("");
        navi("/feature-product-list");
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
                  onChange={(e) => setfeaProdName(e.target.value)}
                  value={feaprodName}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setfeaProdDetails(e.target.value)}
                  value={feaprodDetails}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setfeaProdPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveFeatureProduct}
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
