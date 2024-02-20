//Notes  the episode 2:Ignite your app: Hosting the app.
// steps i followed to create the package.json/packagae.lock.json is "npm init"
// Package.json is a configuration for npm
// To install the node modules use command" npm install"

// Packagae.lock.json: in our case we have installed a package/dependencies  called as "parcel". go to linenumber:5569
// over here "integrity" is a hash.
// Keeps track of all version and dependencies.

// Bundler:our whole project needs to be compressed or minified, it can be done using bundlers.
// Bundler packages your app properly so that it can be shipped to the production.
// Note: when we use create react app command to create a react project behind the scenes, react will add the webpack bundler and babel.
// Different types of bundlers: webpack, babel, wheat,parcel.
// There are two types of dependencies/packages we can have in the project.
//  1. dev dependencies - It is requires in a development phase. to install only dev dependency we need to add prefix -D before the package.
//  2. Normal dependencies -  are Used in the production.

// Parcel: refer the link :https://parceljs.org/
// parcel helps us to host our app in the server(local host).use command "npx parcel index.html" npx: executing a package syntax (npx_bundlername_AppUIfilename)"
// What "Parcel" does : Creates -Dev Build,Local Server,HMR(hard module replacement[eg:Refreshing the page])
// Parcel uses file watching algorithm.
// Faster build:because Parcel uses caching
// Does image optimization.
// when i create a production build it will minify the files by bundling.
// content  hashing
// code splitting
// Differential bundling- it does babel Work.
// Diagnostic
// ErrorHandling
// Https
// Tree Shaking- remove unused code files

// creates different prod and dev bundlers.
// --To create prod build-----
// syntax: npx_bundlerName_build_fileName. eg:npx parcel build index.html.
// Note:while using this command we may get to face the error: " 🚨 Build failed.
// Error:@parcel/namer-default: Target "main" declares an output file path of "App.js" which does not match the compiled bundle type
// "html".
// Reason: this is due to conflict with the entrypoint which is available in the "main" key in package.json.
// Resolve: To resolve this issue  remove App.js from the main key in Package.json.

// node_modules: Contains all the code that we fetched from npm.

//browsersList: refer the link https://browserslist.dev/ , https://github.com/browserslist/browserslist
//  browserslist is a configuration file used by tools like Autoprefixer, Babel, ESLint, and Stylelint to specify which browsers your project supports.
//  It allows you to define a list of target browsers in a browserslistrc file or through other means like package.json or directly in your build tool configuration.
