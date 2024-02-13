// React.createElement/ReactDOM.createRoot React element is the object that becomes html that the browser understands
// "h1" tag in index.html will be replaced by heading variable element from App.js
const heading = React.createElement("h1", {}, "Hello sanjay");
const tag = ReactDOM.createRoot(document.getElementById("root"));
tag.render(heading);
