import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ClientsEdit() {
  const { id } = useParams();
  const [clientName, setClientName] = useState("");
  const [clientDetails, setClientDetails] = useState("");
  const [clinentProfession, setClinentProfession] = useState("");
  const [clinetPhoto, setclinetPhoto] = useState("");

  const navi = useNavigate();
  useEffect(() => {
    axios
      .get(
        `http://localhost/reactjs/adminpro-react/backend/API/Clinets/getIDClients.php?id=${id}`
      )
      .then((res) => {
        setClientName(res.data.client_name);
        setClientDetails(res.data.details);
        setClinentProfession(res.data.profession);
        setclinetPhoto(res.data.photo);
      });
  }, []);

  const saveFeatureProduct = () => {
    const formdata = new FormData();
    formdata.append("clientName", clientName);
    formdata.append("clientDetails", clientDetails);
    formdata.append("clinentProfession", clinentProfession);
    formdata.append("clinetPhoto", clinetPhoto);
    formdata.append("id", id);
    axios
      .post(
        "http://localhost/reactjs/adminpro-react/backend/API/Clinets/updateClients.php",
        formdata,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setClientName("");
        setClientDetails("");
        setClinentProfession("");
        setclinetPhoto("");
        navi("/clients-list");
      });
  };

  return (
    <>
      <h1>Clients Edit Page</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label className="form-label">Client Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClientName(e.target.value)}
                  value={clientName}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Details</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClientDetails(e.target.value)}
                  value={clientDetails}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Profession</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setClinentProfession(e.target.value)}
                  value={clinentProfession}
                />
              </div>
             
              <div className="mb-3">
                <label className="form-label">Image</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setclinetPhoto(e.target.files[0])}
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
