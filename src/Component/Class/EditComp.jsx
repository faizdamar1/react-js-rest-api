import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  FormGroup,
  Alert,
  Label,
  Input,
  Button,
  Form,
} from "reactstrap";

const api = "http://localhost:3001";
class EditComp extends Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <Container>
          <h2 className="mt-5">Form Edit Data</h2>
          <Alert
            color="success"
            style={{
              display: this.state.display,
            }}
          >
            {this.state.response}
          </Alert>
          <Form className="form mt-5">
            <Col>
              <FormGroup>
                <Row>
                  <Label>NIM</Label>
                  <Input
                    type="tex"
                    name="nim"
                    value={this.state.nim}
                    onChange={this.handleChange}
                    placeholder="Masukan nim.."
                  />
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>Nama</Label>
                  <Input
                    type="tex"
                    name="nama"
                    value={this.state.nama}
                    onChange={this.handleChange}
                    placeholder="Masukan nama.."
                  />
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Label>Jurusan</Label>
                  <Input
                    type="tex"
                    name="jurusan"
                    value={this.state.jurusan}
                    onChange={this.handleChange}
                    placeholder="Masukan jurusan.."
                  />
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Button type="button" onClick={this.AddMahasiswa}>
                    Ubah
                  </Button>
                </Row>
              </FormGroup>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditComp;
