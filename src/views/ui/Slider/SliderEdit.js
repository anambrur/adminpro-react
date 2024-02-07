import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SliderEdit() {
  const { id } = useParams();
  const [slHeader, setSlHeader] = useState("");
  const [sltitle, setSlTitle] = useState("");
  const [slphoto, setSlPhoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/geiID.php?id=${id}`
      )
      .then((res) => {
        setSlHeader(res.data.heading);
        setSlTitle(res.data.title);
        setSlPhoto(res.data.photo);
      });
  }, []);

  const saveSlider = () => {
    const formdata = new FormData();
    formdata.append("slHeader", slHeader);
    formdata.append("sltitle", sltitle);
    formdata.append("slphoto", slphoto);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/updateSlider.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setSlHeader("");
        setSlTitle("");
        setSlPhoto("");
        navi("/slider-list");
      });
  };

  return (
    <>
      <h1>Slider Edit Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Slider Header</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSlHeader(e.target.value)}
                  value={slHeader}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slider Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSlTitle(e.target.value)}
                  value={sltitle}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slider Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setSlPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveSlider}
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
