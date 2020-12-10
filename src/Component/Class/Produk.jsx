import React, { Component } from "react";
import "./CSS/Produk.css";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonBeli = () => {
    console.log(this.state.stock);
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: !this.state.disabled,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img
          src="https://cf.shopee.co.id/file/8d03a9d670131a7155595112ed355ee0"
          alt=""
        />
        <p>
          <b>Rp. {this.props.harga}</b>
        </p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.ButtonBeli}
          disabled={this.state.disabled}
        >
          Beli
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;
