import React from "react";
import classes from "./UserCard.module.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const UserCard = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.info.photo} />
        <Card.Body>
          <Card.Title>{props.info.name}</Card.Title>
          <Card.Text>
            <div>
              Location: {props.info.location.country}
              {"   "}
              {props.info.location.city}
            </div>
            <div>Status: {props.info.status}</div>
          </Card.Text>
          <div>
            {props.info.isFollow ? (
              <Button
                variant="primary"
                onClick={() => {
                  props.info.follow(u.id);
                }}
              >
                Follow
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  props.info.unfollow(u.id);
                }}
              >
                Unfollow
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
