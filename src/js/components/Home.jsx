import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./SecondsCounter.jsx";


let seconds = 0;

function Home(props) {

  let number = String(props.value);
  let zeros = "0".repeat(6 - number.length);
  let digits = (zeros + number).split("");

  return (
    <>
      <SecondsCounter value={digits[0]} />
      <SecondsCounter value={digits[1]} />
      <SecondsCounter value={digits[2]} />
      <SecondsCounter value={digits[3]} />
      <SecondsCounter value={digits[4]} />
      <SecondsCounter value={digits[5]} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));


function renderApp() {
  root.render(<Home value={seconds} />);
}

renderApp();

setInterval(function() {
  seconds++;
  renderApp();
}, 1000);

export default Home;
