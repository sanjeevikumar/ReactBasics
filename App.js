// React.createElement/ReactDOM.createRoot React element is the object that becomes html that the browser understands
// "h1" tag in index.html will be replaced by heading variable element from App.js.
import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = <h1 className="remote">Welcome to react basics</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
