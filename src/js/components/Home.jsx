import React from "react";
import SecondsCounter from "./SecondsCounter";

function Home(props) {
  let number = String(props.value);
  let zeros = "0".repeat(6 - number.length);
  let digits = (zeros + number).split("");

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="bg-dark p-4 rounded shadow d-flex gap-2 align-items-center">
        <i className="fa-regular fa-clock fa-2x text-white"></i>
        <SecondsCounter value={digits[0]} />
        <SecondsCounter value={digits[1]} />
        <SecondsCounter value={digits[2]} />
        <SecondsCounter value={digits[3]} />
        <SecondsCounter value={digits[4]} />
        <SecondsCounter value={digits[5]} />
      </div>
    </div>
  );
}

export default Home;
