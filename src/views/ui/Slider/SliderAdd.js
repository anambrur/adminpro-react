import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SliderAdd() {
  const [slHeader, setSlHeader] = useState("");
  const [sltitle, setSlTitle] = useState("");
  const [slphoto, setSlPhoto] = useState("");
  const navi=useNavigate()
  const saveSlider = () => {
    const formdata = new FormData();
    formdata.append("slHeader", slHeader);
    formdata.append("sltitle", sltitle);
    formdata.append("slphoto", slphoto);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/SliderAPI/setSlider.php",
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
      navi('/slider-list')
  };

  return (
    <>
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
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Slider Title</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setSlTitle(e.target.value)}
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
