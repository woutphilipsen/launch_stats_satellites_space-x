// Make a new folder with folder name in lowercase

// Go to terminal & select this new folder
// hit the following command in cmd
npm init

//==========Settings package.json============
package name: spacex_launch_stats
description: app that launches stats spacex launch missions
entry point: server.js
author: Philipsen Wout

//==========Install dependencies=============
// graphql
// express-graphql
// express axios
npm i graphql express-graphql express axios

//==========Live Update Code=================
// install nodemon
npm install -D nodemon

//==========package.json=====================
// add scripts so that we can run our server
// go to package.json & adjust 

   /* 
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
   */

// to run our file with node.js we change test in to start
    "start": "node server.js",

// to run our server in the back-end we have to set a server as well
    "server": "nodemon server.js"

// create server.js file..
// Go to file server.js for more info



