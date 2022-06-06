import React, { useState, useEffect } from "react";

import axios from "axios";
import "./MainUI.css";
import Cards from "./Card";
import { Container, Row, Col } from "react-bootstrap";

const MainUI = () => {
  const [info, setinfo] = useState([]);
  //console.log(info);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios
        .get("https://reqres.in/api/users?page=1")
        .then((res) => {
          console.log(res);
          const data = res.data.data;
          setinfo(data);
        });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  console.log(info);
  console.log("Bay");

  useEffect(() => {
    fetchMoviesHandler();
  }, []);

  return (
    <>
      <header id="main-header" className="py-2 bg-primary text-white">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <i className="fas fa-user"></i> Users
              </h1>
            </div>
          </div>
        </div>
      </header>
      <Container>
        <Container>
          {" "}
          <Container>
            <Row>
              {!isLoading &&
                info.length > 0 &&
                info.map((i) => (
                  <Col key={i.id} sm={12} md={6} lg={4} xl={4}>
                    <Cards i={i} />
                  </Col>
                ))}
              {!isLoading && info.length === 0 && <p>Found no users.</p>}
              {isLoading && <p>Loading...</p>}
            </Row>
          </Container>
        </Container>{" "}
      </Container>
    </>
  );
};

export default MainUI;
