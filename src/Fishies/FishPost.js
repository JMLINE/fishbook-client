import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Container,
} from "reactstrap";
import APIURL from "../helpers/environment";

const FishPost = (props) => {
  let [species, setSpecies] = useState("");
  let [size, setSize] = useState("");
  let [fly, setFly] = useState("");
  let [location, setLocation] = useState("");
  let [photo, setPhoto] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`${APIURL}api/createpost`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
      body: JSON.stringify({
        fished: {
          species: species,
          size: size,
          fly: fly,
          location: location,
          photo: photo,
        },
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData);
        setSpecies("");
        setSize("");
        setFly("");
        setLocation("");
        setPhoto("");
        props.fetchFishPost();
        props.toggle();
      });
  };

  return (
    <>
      <br></br>
      <h3>Post a Fish!</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="Species" />
          <Input
            type="select"
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
            name="Species"
            value={species}
          >
            <option value="">Select Species</option>
            <option value="Bass">Bass</option>
            <option value="Trout">Trout</option>
            <option value="Bluegill">Bluegill</option>
            <option value="Carp">Carp</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="Size" />
          <Input
            name="Size"
            placeholder="Size"
            onChange={(e) => {
              setSize(e.target.value);
            }}
            value={size}
          />
          (Inches)
        </FormGroup>

        <FormGroup>
          <Label htmlFor="Fly" />
          <Input
            name="Fly"
            placeholder="Fly Used"
            onChange={(e) => {
              setFly(e.target.value);
            }}
            value={fly}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="Location" />
          <Input
            name="Location"
            placeholder="Location"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="Photo" />
          <Input
            name="Photo"
            placeholder="Photo URL"
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
            value={photo}
          />
        </FormGroup>
        <Container>
          <Row>
            <Col>
              <Button style={{ background: "green" }} type="submit">
                Click to Submit
              </Button>
            </Col>
            <Col>
              <div className="cancelButton">
                <Button style={{ background: "red" }} onClick={props.toggle}>
                  Cancel
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default FishPost;
