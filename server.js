/*
 *
 *	UIT Live Code (Node Exercise)
 *  Let's get started with developing some backend technology with Node.js!
 *	
 *	We'll get started with creating some simple routes using Express.js, and creating our
 *	first custom module. Let's get started!
 *
 *	Task List:
 *
 *	1. Add two new routes, which will go to '/about' and '/contact'
 *	2. Instead of hardcoding your response text in res.write below, instead use the
 *	   provided module in messages.js.
 *
*/

// Our dependencies (modules)
var http = require('http');
var express = require('express');

var messages = require('./messages');

// initialize the app using express
var app = express();

function addRouteMessage(route, message) {

	// this is our first app route using Express.js. This will route the the root url that
	// you are serving. For example, if you are serving on http://localhost:8080, this url
	// will be located at http://localhost:8080/
	app.get(route, function(req, res) {
		res.write(message); // write something to standard output
		res.end();	// end the event
	});
}

addRouteMessage('/', messages.home);
addRouteMessage('/about', messages.about);
addRouteMessage('/contact', messages.contact);


// @TODO: <Problem 1> you should add your new routes here. 
// @PROTIP: remember to look at the route I provided above!

// Initialize the app to listen on port 8080, and log some text to say so
app.listen(8080);
console.log("Listening on port 8080...");