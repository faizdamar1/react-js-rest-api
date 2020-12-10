import React from "react";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Blog
        tanggal="02 Juni 2020"
        judul="Teknologi BlokChain"
        summary="Reference site about Lorem Ipsum."
      />
      <Blog
        tanggal="03 Juni 2020"
        judul="Teknologi Internet"
        summary="Reference site about Lorem Ipsum."
      />
      <Blog
        tanggal="04 Juni 2020"
        judul="Teknologi Flutter"
        summary="Reference site about Lorem Ipsum."
      />
    </div>
  );
};

export default Home;
