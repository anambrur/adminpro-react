import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ClientAdd() {
  const [clientName, setClientName] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [clinentProfession, setClinentProfession] = useState("");
  const [clinetPhoto, setclinetPhoto] = useState("");
  const navi = useNavigate();
  const saveClinets = () => {
    const formdata = new FormData();
    formdata.append("clientName", clientName);
    formdata.append("clientDetails", clientDetails);
    formdata.append("clinentProfession", clinentProfession);
    formdata.append("clinetPhoto", clinetPhoto);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/Clinets/setClients.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        navi("/clients-list");
      });
    
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Client Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClientName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClientDetails(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Profession:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClinentProfession(e.target.value)}
                />
              </div>
              
              <div className="mb-3">
                <label className="form-label">Image:</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setclinetPhoto(e.target.files[0])}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={saveClinets}
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
