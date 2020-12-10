import React from "react";
import Produk from "../Class/Produk";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Produk stock="10" nama="Mackbook Pro 2020" harga="33.000.000" />
      <Produk stock="2" nama="Mackbook Pro 2019" harga="35.000.000" />
      <Produk stock="3" nama="Mackbook Pro 2021" harga="37.000.000" />
      <Produk stock="7" nama="Mackbook Pro 2022" harga="43.000.000" />
    </div>
  );
};

export default Home;
