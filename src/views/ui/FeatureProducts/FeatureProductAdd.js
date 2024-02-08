import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeatureProductAdd() {
  const [feaprodName, setfeaProdName] = useState("");
  const [feaprodDetails, setfeaProdDetails] = useState("");
  const [feaprodPhoto, setfeaProdPhoto] = useState("");
  const navi = useNavigate();
  const saveReatureProduct = () => {
    const formdata = new FormData();
    formdata.append("feaprodName", feaprodName);
    formdata.append("feaprodDetails", feaprodDetails);
    formdata.append("feaprodPhoto", feaprodPhoto);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/FeatureProducts/setFeatProduct.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navi("/feature-product-list");
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
                  onChange={(e) => setfeaProdName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setfeaProdDetails(e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setfeaProdPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveReatureProduct}
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
