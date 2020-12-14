import React from "react";
import { Button, Col, Jumbotron, Container, Row } from "reactstrap";
import CardComp from "./CardComp";

export default function AboutPage() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">About Page</h1>
        <p className="lead">
          This is a simple hero unit, a simple Jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-2" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <CardComp id="1" judul="Belajar React" tanggal="22/06/2020" />
          </Col>
          <Col>
            <CardComp id="2" judul="Belajar Flutter" tanggal="21/06/2020" />
          </Col>
          <Col>
            <CardComp id="3" judul="Belajar Native" tanggal="23/06/2020" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
