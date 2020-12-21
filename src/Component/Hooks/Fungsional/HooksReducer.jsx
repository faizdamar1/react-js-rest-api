import React, { useReducer } from "react";
import { Button, Card, CardImg, Col, Container, Row } from "reactstrap";

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "tambah":
      return {
        ...state,
        jumlah: state.jumlah + 1,
        hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah),
      };

    case "kurang":
      return {
        ...state,
        jumlah: state.jumlah - 1,
        hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan,
      };

    default:
      return state;
  }
};

function HooksReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
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
            <p>Rp. {count.hargasatuan}</p>
            <p>Jumlah</p>
            <Row>
              <Col xs="2">
                <Button
                  color="danger"
                  onClick={() => dispatch({ type: "kurang" })}
                >
                  -
                </Button>
              </Col>

              <Col xs="2">{count.jumlah}</Col>
              <Col xs="2">
                <Button
                  color="danger"
                  onClick={() => dispatch({ type: "tambah" })}
                >
                  +
                </Button>
              </Col>
              <Col xs="6">
                <p>Minim Pembelian 1pcs.</p>
              </Col>
            </Row>
            <br />
            <Button color="success">Total Rp. {count.hargatotal}</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HooksReducer;
