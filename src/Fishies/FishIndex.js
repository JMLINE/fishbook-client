import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import FishTable from "./FishTable";
import UpdateFish from "./UpdateFish";
import FishModal from "./FishModal";

import APIURL from "../helpers/environment";

const FishIndex = (props) => {
  const [fished, setFished] = useState([]);
  const [updateActive, setUpdateActive] = useState(false);
  const [fishToUpdate, setFishToUpdate] = useState({});

  const editUpdateFish = (fish) => {
    setFishToUpdate(fish);
    console.log(fish);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const fetchFishPost = () => {
    fetch(`${APIURL}api/fished`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        setFished(logData);
        console.log(logData);
      });
  };

  useEffect(() => {
    fetchFishPost();
  }, []);

  return (
    <Container>
      <h1 className="fishTitle">Fishes</h1>
      <Row>
        <Col md="2">
          <FishModal fetchFishPost={fetchFishPost} token={props.token} />
        </Col>

        <Col md="8">
          <FishTable
            fished={fished}
            fetchFishPost={fetchFishPost}
            token={props.token}
            editUpdateFish={editUpdateFish}
            updateOn={updateOn}
          />
        </Col>
        <Col md="2">
          {updateActive ? (
            <UpdateFish
              fishToUpdate={fishToUpdate}
              updateOff={updateOff}
              token={props.token}
              fetchFishPost={fetchFishPost}
            />
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};

export default FishIndex;
