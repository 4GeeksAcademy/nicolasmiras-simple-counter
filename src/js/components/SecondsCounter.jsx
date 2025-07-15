import React from "react";

function SecondsCounter(props) {
  return (
    <span
      className="bg-dark text-white display-4 px-3 py-2 rounded border border-white fw-bold d-inline-block text-center">
      {props.value}
    </span>
  );
}

export default SecondsCounter;
