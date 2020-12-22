import React, { useContext } from "react";
import { Container, Jumbotron, Button } from "reactstrap";
import { KeranjangContext } from "../../../App";

const Tagihan = () => {
  const countContex = useContext(KeranjangContext);
  return (
    <div>
      <Container>
        <Jumbotron>
          <h1 className="display-3">Tagihan</h1>
          <p className="lead">
            [{countContex.keranjangState.jumlah}x] Action Figure Naruto
          </p>
          <hr className="my-2" />
          <p>Harga Total Rp. {countContex.keranjangState.hargatotal} </p>
          <p className="lead">
            <Button color="primary">Lanjutkan Pembayaran</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Tagihan;
