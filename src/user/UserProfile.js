import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const UserProfile = () => {
  const [profile, setprofile] = useState([]);

  const id = useParams().id;

  const history = useNavigate();

  useEffect(() => {
    const sendRequest = async () => {
      await axios.get(`https://reqres.in/api/users/${id}`).then((res) => {
        console.log(res);
        const data = res.data.data;
        setprofile(data);
      });
    };
    sendRequest();
  }, [profile]);

  function Logout() {
    history("/react-spa");
  }

  console.log(profile);

  return (
    <React.Fragment>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div>
            <button onClick={Logout}>Back</button>
          </div>
        </div>
      </header>
      <br></br>
      <section id="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={profile.avatar}
                alt=""
                //className="d-block img-fluid mb-3"
              />
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <form>
                    <div className="form-group ">
                      <label for="name"> First Name</label>
                      <input
                        type="text"
                        value={profile.first_name}
                        className="form-control"
                        readOnly
                      />
                    </div>
                    <div className="form-group ">
                      <label for="name"> last Name</label>
                      <input
                        type="text"
                        value={profile.last_name}
                        className="form-control"
                        readOnly
                      />
                    </div>

                    <div className="form-group">
                      <label for="email"> Email</label>
                      <input
                        type="email"
                        value={profile.email}
                        className="form-control"
                        readOnly
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default UserProfile;
