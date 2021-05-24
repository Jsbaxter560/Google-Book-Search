import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron bg-warning border border-success"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
