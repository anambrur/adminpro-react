import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function BannerEdit() {
  const { id } = useParams();
  const [bannerTitle, setbannerTitle] = useState("");
  const [bannerStore, setbannerStore] = useState("");
  const [bannerDetails, setbannerDetails] = useState("");
  const [bannerPhoto, setbannerPhoto] = useState("");
  const [bannerPrice, setbannerPrice] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/Banner/getIDBanner.php?id=${id}`
      )
      .then((res) => {
        setbannerTitle(res.data.title);
        setbannerStore(res.data.store);
        setbannerDetails(res.data.details);
        setbannerPhoto(res.data.photo);
        setbannerPrice(res.data.price);
      });
  }, []);

  const saveFeatureProduct = () => {
    const formdata = new FormData();
    formdata.append("bannerTitle", bannerTitle);
    formdata.append("bannerStore", bannerStore);
    formdata.append("bannerDetails", bannerDetails);
    formdata.append("bannerPhoto", bannerPhoto);
    formdata.append("bannerPrice", bannerPrice);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/Banner/updateBanner.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setbannerTitle("");
        setbannerStore("");
        setbannerDetails("");
        setbannerPhoto("");
        setbannerPrice("");
        navi("/banner-list");
      });
  };

  return (
    <>
      <h1>Banner Edit Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerTitle(e.target.value)}
                  value={bannerTitle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Store</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerStore(e.target.value)}
                  value={bannerStore}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerDetails(e.target.value)}
                  value={bannerDetails}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setbannerPrice(e.target.value)}
                  value={bannerPrice}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setbannerPhoto(e.target.files[0])}
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
