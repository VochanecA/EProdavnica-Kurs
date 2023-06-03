const path = require('path');

const express = require('express');
const csrf = require('csurf');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const db = require('./data/database');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const errorHandlerMiddleware = require('./middlewares/error-handler');
const checkAuthStatusMiddleware = require('./middlewares/check-auth');
const authRoutes = require('./routes/auth.routes');
const productsRoutes = require('./routes/products.routes');
const baseRoutes = require('./routes/base.routes');
const adminRoutes = require('./routes/admin.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

const sessionConfig = createSessionConfig();

app.use(expressSession(sessionConfig));
app.use(csrf());

app.use(addCsrfTokenMiddleware);
app.use(checkAuthStatusMiddleware);

app.use(baseRoutes);
app.use(authRoutes);
app.use(productsRoutes);

app.use(errorHandlerMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log('Failed to connect to the database!');
    console.log(error);
  });



// moze i u jedan red --- ovo je pocetak samo"

// var path=require("path");var express=require("express");var authRoutes=require("./routes/auth.routes");var app=express();app.set("view engine","ejs");app.set("views",path.join(__dirname,"views"));app.use(authRoutes);var port=3E3;app.listen(port,function(){console.log("Server radi na portu "+port);console.log(__dirname)});



// ili brze,mnogo brzeeeeee :) 



// var $jscomp = $jscomp || {};
// $jscomp.scope = {};
// $jscomp.createTemplateTagFirstArg = function(a) {
//   return a.raw = a;
// };
// $jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
//   a.raw = b;
//   return a;
// };
// var path = require("path"), express = require("express"), authRoutes = require("./routes/auth.routes"), app = express();
// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));
// app.use(authRoutes);
// var port = 3000;
// app.listen(port, function() {
//   console.log("Server radi na portu " + port);
//   console.log(__dirname);
// });


// ili jos brze...sve u jedan red:

//var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var path=require("path"),express=require("express"),authRoutes=require("./routes/auth.routes"),app=express();app.set("view engine","ejs");app.set("views",path.join(__dirname,"views"));app.use(authRoutes);var port=3E3;app.listen(port,function(){console.log("Server radi na portu "+port);console.log(__dirname)});