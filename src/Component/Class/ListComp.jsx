import React, { Component } from "react";
import axios from "axios";
import { Table, Button, Container, NavLink, Alert } from "reactstrap";
import { Link } from "react-router-dom";
import qs from "querystring";

const api = "http://localhost:3001";

export default class ListComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mahasiswa: [],
      response: "",
      display: "none",
    };
  }

  componentDidMount() {
    axios.get(api + "/tampil").then((res) => {
      this.setState({
        mahasiswa: res.data.values,
      });
    });
  }

  DeleteMahasiswa = (idMahasiswa) => {
    const { mahasiswa } = this.state;
    const data = qs.stringify({
      id_mahasiswa: idMahasiswa,
    });

    axios
      .delete(api + "/hapus/mahasiswa", {
        data: data,
        headers: { "Content-type": "application/x-www-form-urlencoded" },
      })
      .then((json) => {
        if (json.data.status === 200) {
          this.setState({
            response: json.data.values,
            mahasiswa: mahasiswa.filter(
              (mahasiswa) => mahasiswa.id_mahasiswa !== idMahasiswa
            ),
            display: "block",
          });
          this.props.history.push("mahasiswa");
        } else {
          this.setState({
            response: json.data.values,
            display: "block",
          });
          this.props.history.push("mahasiswa");
        }
      });
  };

  render() {
    return (
      <div>
        <Container>
          <h2>Data Mahasiswa</h2>
          <Alert
            color="success"
            style={{
              display: this.state.display,
            }}
          >
            {this.state.response}
          </Alert>
          <NavLink href="/mahasiswa/tambah">
            <Button color="success">Tambah Data</Button>
          </NavLink>
          <hr />
          <Table className="table-bordered">
            <thead>
              <tr>
                <th>NIM</th>
                <th>NAMA</th>
                <th>JURUSAN</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {this.state.mahasiswa.map((mahasiswa) => (
                <tr key={mahasiswa.id_mahasiswa}>
                  <td>{mahasiswa.nim}</td>
                  <td>{mahasiswa.nama}</td>
                  <td>{mahasiswa.jurusan}</td>
                  <td>
                    <Link
                      to={{
                        pathname: `/mahasiswa/edit`,
                        state: {
                          id_mahasiswa: mahasiswa.id_mahasiswa,
                          nim: mahasiswa.nim,
                          nama: mahasiswa.nama,
                          jurusan: mahasiswa.jurusan,
                        },
                      }}
                    >
                      <Button>Edit</Button>
                      <span></span>
                    </Link>
                    <Button
                      color="danger"
                      onClick={() =>
                        this.DeleteMahasiswa(mahasiswa.id_mahasiswa)
                      }
                    >
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
