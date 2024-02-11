import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BannerAdd() {
  const [bannerTitle, setbannerTitle] = useState("");
  const [bannerStore, setbannerStore] = useState("");
  const [bannerDetails, setbannerDetails] = useState("");
  const [bannerPhoto, setbannerPhoto] = useState("");
  const [bannerPrice, setbannerPrice] = useState("");
  const navi = useNavigate();
  const saveBanner = () => {
    const formdata = new FormData();
    formdata.append("bannerTitle", bannerTitle);
    formdata.append("bannerStore", bannerStore);
    formdata.append("bannerDetails", bannerDetails);
    formdata.append("bannerPhoto", bannerPhoto);
    formdata.append("bannerPrice", bannerPrice);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/Banner/setBanner.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navi("/banner-list");
      });
    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Title:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Store:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerStore(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerDetails(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerPrice(e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setbannerPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveBanner}
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
