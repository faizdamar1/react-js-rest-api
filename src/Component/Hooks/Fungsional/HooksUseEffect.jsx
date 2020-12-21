import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, NavLink, Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const api = "http://localhost:3001";

function HooksUseEffect() {
  const [mahasiswa, setMahasiswa] = useState([]);
  useEffect(() => {
    console.log("memanggil use Effect");
    axios.get(api + "/tampil").then((res) => {
      setMahasiswa(res.data.values);
    });
  }, []);

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
            {mahasiswa.map((mahasiswa) => (
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
                    onClick={() => this.DeleteMahasiswa(mahasiswa.id_mahasiswa)}
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

export default HooksUseEffect;
