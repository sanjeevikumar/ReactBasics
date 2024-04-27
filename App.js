// React.createElement/ReactDOM.createRoot React element is the object that becomes html that the browser understands
// "h1" tag in index.html will be replaced by heading variable element from App.js.
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <div className="ui-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
