import React, { Component } from "react";
import axios from "axios";
import { Table, Button, Container, NavLink } from "reactstrap";

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

  render() {
    return (
      <div>
        <Container>
          <h2>Data Mahasiswa</h2>
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
                  <td>EDIT | HAPUS</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
