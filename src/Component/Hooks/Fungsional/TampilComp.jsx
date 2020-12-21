import React from "react";

const TampilComp = (props) => {
  return (
    <div>
      <p>hallo, {props.username}</p>
      <h1>{props.jumlah}</h1>
      <button
        onClick={() => props.fungsi(props.jumlah + 1)}
        disabled={props.disabled}
      >
        +
      </button>
    </div>
  );
};

export default TampilComp;
