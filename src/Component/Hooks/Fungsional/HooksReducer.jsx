import React, { useContext, useReducer } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { KeranjangContext } from "../../../App";


function HooksReducer() {

  const countContex = useContext(KeranjangContext);

  return (
    <div>
      <Container>
        <br />
        <Row>
          <Col xs="6">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeimg.com/640/480/tech"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col xs="6">
            <h3>Action Figure</h3>
            <p>Rp. {countContex.keranjangState.hargatotal}</p>
            <p>Jumlah</p>
            <Row>
              <Col xs="2">
                <Button
                  color="danger"
                  onClick={() => countContex.keranjangDispatch({ type: "kurang" })}
                >
                  -
                </Button>
              </Col>

              <Col xs="2">{countContex.keranjangState.jumlah}</Col>
              <Col xs="2">
                <Button
                  color="danger"
                  onClick={() => countContex.keranjangDispatch({ type: "tambah" })}
                >
                  +
                </Button>
              </Col>
              <Col xs="6">
                <p>Minim Pembelian 1pcs.</p>
              </Col>
            </Row>
            <br />
            <Button color="success">Total Rp. {countContex.keranjangState.hargatotal}</Button>
            <hr />
            <NavLink to="tagihan">Tagihan Belanja</NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HooksReducer;
