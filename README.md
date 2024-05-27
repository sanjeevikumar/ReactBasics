Design plan
\*\*

- Components
- Header
- - logo
- - Navbar
- -Home
- -About us
- -Contact us
- -Cart
- Body
- -Search Bar with button
- -restaurent card container
- -restaurent card
-     -RestaurentName.
-     -Image.
-     -DishName.
-     -CuisineName.
-     -StarRating.
-     -DeliveryTime.
-     -Price.
-
- Footer
- -copyright
- -Address
- -Contact Details
- -Link

# Notes the episode 2:Ignite your app: Hosting the app.

steps i followed to create the package.json/packagae.lock.json is "npm init"
Package.json is a configuration for npm
To install the node modules use command" npm install"

Packagae.lock.json: in our case we have installed a package/dependencies called as "parcel". go to linenumber:5569
over here "integrity" is a hash.
Keeps track of all version and dependencies.

Bundler:our whole project needs to be compressed or minified, it can be done using bundlers.
Bundler packages your app properly so that it can be shipped to the production.
Note: when we use create react app command to create a react project behind the scenes, react will add the webpack bundler and babel.
Different types of bundlers: webpack, babel, wheat,parcel.
There are two types of dependencies/packages we can have in the project.

1.  dev dependencies - It is requires in a development phase. to install only dev dependency we need to add prefix -D before the package.
2.  Normal dependencies - are Used in the production.

Parcel: refer the link :https://parceljs.org/
To create a dependency File and for parcel like ".parcel-cache" and "dist" use the command "npx parcel index.html".
parcel helps us to host our app in the server(local host).use command "npx parcel index.html" npx: executing a package syntax (npx_bundlername_AppUIfilename)"
What "Parcel" does : Creates -Dev Build,Local Server,HMR(hard module replacement[eg:Refreshing the page])
Parcel uses file watching algorithm.
Faster build:because Parcel uses caching
Does image optimization.
when i create a production build it will minify the files by bundling.
content hashing
code splitting
Differential bundling- it does babel Work.
Diagnostic
ErrorHandling
Https
Tree Shaking- remove unused code files

creates different prod and dev bundlers.
--To create prod build-----
syntax: npx_bundlerName_build_fileName. eg:npx parcel build index.html.
Note:while using this command we may get to face the error: " 🚨 Build failed.
Error:@parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type
"html".
Reason: this is due to conflict with the entrypoint which is available in the "main" key in package.json.
Resolve: To resolve this issue remove App.js from the main key in Package.json.

node_modules: Contains all the code that we fetched from npm.

browsersList: refer the link https://browserslist.dev/ , https://github.com/browserslist/browserslist
browserslist is a configuration file used by tools like Autoprefixer, Babel, ESLint, and Stylelint to specify which browsers your project supports.
It allows you to define a list of target browsers in a browserslistrc file or through other means like package.json or directly in your build tool configuration.

# Study Notes for episode 3:

Introduction: This episode starts with how to use the dev build command "npx parcel index.js" and production build "npx parcel build index.js".
You can create a script inside package.json, instead of using the command "npx parcel index.js", " npx parcel build index.js" every time to spin up the local host or the production ready build.
After creating the script to run the project in the development mode use the command "npm start/npm run start".
To build the production ready application use the command "npm run build".

---jsx---
JSX => Babel transpiles it into React.createElement => ReactElement(creates an JS object) => when we render the element on to the dom then it becomes a html element.
basically allows you to merge html and js file together.It allows html inside the js and js inside the html.
jsx not a html in JS, It is a html like/ xml like syntax.
browsers/jsengine can understand only the js language, so the jsx code is transpiled into js by PARCEL/ whatever webpack we use.
Use camelCase to give attributes to jsx.
Advantage of using jsx:
Code readbility.
jsx takes care of mailicious injection attacks through api like "cross side scripting attacks".
Code reusability.

---Babel---
Babel is a javascript compiler.Babel used to convert es6 script to browser compatible version, browser version could be Newer or older version.

Extensions used:Prettier, Bracket Pair Colorization Toggler,Eslint, BetterComments

---React Component--
Two ways of creating the react components
Class based component - old way of creating the component.
Functional based component - New way of creating the component
Functional Component:function that retruns a jsx code is called as functional component
NamingConvention: Component always starts with Pascal Case.

Component composistion:
composing two components one into another
var courseName = "Intro to react components";
//React Element
const Heading = <h1 className="remote">Welcome to react basics</h1>;

//React Component
const HeadingComponent = () => (

  <div id="container">
    {Heading};
    <h1 className="heading">{courseName}</h1>
  </div>
);

# Study Notes For Episode 4: Food Ordering App.

When a client comes with a requirement to build an app. First thing to do as a senior engineer
is planning.

Props: Passing properties are like passing arguments to a function. in function we pass arguments whereas in component we pass props.

Destructuring props on the fly:
eg const resCard = ({resName, place}) => {
// some code
}

Food Ordering App:
Name of the App: Food Search Hub

Api Calls: for our Application i have created a config driven UI.
Industry concept called as :"Config driven UI"

What is Config driven UI?
Controlling the UI using data/config, data/config(Api data which comes from the backend) from the backend.

Map: Donot pass the index as a key, It is considered to be a bad practice in react. refer the react official documentation(https://legacy.reactjs.org/docs/lists-and-keys.html).

# Study Notes for Episode 5:

Advantage of React: React is efficient in DOM manipulation.React makes sure that the UI layer and the data layer are in sync,for example: in terms of config driven UI, when the data changes(from API/Database)it will be updated in the UI layer asap by updating the DOM efficiently.

React algorithm: how React works behind the scenes
React use something like reconcialiation algorithm(React Fiber introduced from React Version 16)
React Fiber: It is a new way of finding the Diff(Diffing algorithm) and updating it into the virtual DOM.

Code Conventions: Always remember to create a seperate file for the every components

Why and how react is fast?
It is bcoz of virtual DOM(REpresentation of actual DOM)
What is diffing algorithm and how it works?
Basically we have two virtual DOM. One will be the original state another one would be the Updated DOM

We have two types of export styles in react

1. Default export - When we only single variable or function to export we use default
2. Named export - when we have multiple variables/functions to export we use Named export.

Why we call React as Fast:
React is efficient in DOM manipulation

# Hooks:

Hooks are normal javascript function
whenever a state variable updates react will rerender the component.
Two major important hooks which we frequently use:
useState():

- Generates superpowerful state Variables in react
  Concept of useState: Why we use and when we use ?

How const variable in the react is getting modified as const keyword cannot be modified?

- Whenever the component is re-rendered the const variable will be considered as a new variable, that's how we are modifying the const in react.

When Reconcilaition cycle is triggered?

-Whenever state variables are updated. React triggers the reconciliation cycle(Re-renders the component).

useEffect() - useEffect basically works after the component is rendered in the application,one of practical scenario where we work with this hook is to fetch an API(service).
useEffect: requires two arguments,1.CallbackFunction, 2. Dependency array

When will be the Callback function called?
CallBack Function will be called after the component renders.

# Episode 6:

# Monolith and Microservice Architecture:

# Monolith Architecture:

-

# Microservice Architecture: whole application can be build using multiple techStack

-Follows Seperation of Concern/Single responsibility principle where each and every service has its own job.

- ## How they interact with eachother? eg: UI need to talk to Backend and Backend needs to talk to db

# Two approaches how the data is being fetched from the backend

- when we can make api call?

1.  As soon as app load, we can make an api call. when we get the data we can render it on to the ui.
    Process:
    As soon as PageLoads ----> API Call happens wait for the api data ---->Then we will Render the Ui components
2.  As soon as PageLoads ----> we will Render the Ui components ---->Then API Call happens ---> Re-render the application after getting the data from API.

-In react we prefer to use the approach 2 bcoz, This provides the better UX by providing the ui first and later it makes an api call

# What is CORS Policy?

- Browser used to block the access to the api when it finds the different host(eg:Local Host) than the origin.

# Shimmer UI

-To improve the userexperience(UX). we load a dummy page till the time api fetches the actual data.
