Sumo Creations Website V1.0
===========================

This is the source code for the first official version of the Sumo Creations website.

Setup
-----

Our build stack uses Webpack(http://webpack.github.io) so be sure to install by running `npm install -g webpack` to ensure you have a global copy of webpack available on your system. Then simply run `npm install` to initialize the project and all of it's dependencies. You can simply run `webpack -w` to begin watching and actively developing for the site.

Babel for ES6 + JSX
-------------------

The site consists of React(http://facebook.github.io/react/) components and we're more than excited to say that this project is coded entirely in ES6. Webpack will run all of the codebase through babel to compile the JSX and ES6 code into useable ES5 (classic javascript as we once knew it) to ensure compatibility across older browsers.

Documentation
-------------

While there is no formal hosted documentation, the codebase is annotated with standard JSDocumentation which can be build with ESDoc(https://esdoc.org) if you wish to do so!
