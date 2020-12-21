import React, { Component } from "react";
import axios from "axios";
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
export default class TambahComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
      display: "none",
    };
  }

  handleNull = () => {
    this.setState({
      nim: "",
      nama: "",
      jurusan: "",
      response: "",
      display: "none",
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  AddMahasiswa = () => {
    axios
      .post(api + "/tambah/mahasiswa", {
        nim: this.state.nim,
        nama: this.state.nama,
        jurusan: this.state.jurusan,
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.handleNull();
          this.setState({
            response: json.data.values,
            display: "block",
          });
        } else {
          this.setState({
            response: json.data.values,
            display: "block",
          });
        }
      });
  };

  render() {
    return (
      <div>
        <Container>
          <h2 className="mt-5">Form Tambah Data</h2>
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
                    type="text"
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
                    type="text"
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
                    type="text"
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
                    Submit
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
