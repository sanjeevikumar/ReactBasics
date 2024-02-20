// Study Notes
// Introduction: This episode starts with how to use the dev build command "npx parcel index.js" and production build "npx parcel build index.js".
// You can create a script inside package.json, instead of using the command "npx parcel index.js", " npx parcel build index.js" every time to spin up the local host or the production ready build.
// After creating the script to run the project in the development mode use the command "npm start/npm run start".
// To build the production ready application use the command "npm run build".

// ---jsx---
//JSX => Babel transpiles it into React.createElement => ReactElement(creates an JS object) => when we render the element on to the dom then it becomes a html element.
// basically allows you to merge html and js file together.It allows html inside the js and js inside the html.
// jsx not a html in JS, It is a html like/ xml like syntax.
// browsers/jsengine can understand only the js language, so the jsx code is transpiled into js by PARCEL/ whatever webpack we use.
// Use camelCase to give attributes to jsx.

// ---Babel---
// Babel is a javascript compiler.Babel used to convert es6 script to browser compatible version, browser version could be Newer or older version.

//Extensions used:Prettier, Bracket Pair Colorization Toggler,Eslint, BetterComments

//---React Component--
// Two ways of creating the react components
// Class based component - old way of creating the component.
// Functional based component - New way of creating the component
// NamingConvention: Component always starts with Pascal Case.
