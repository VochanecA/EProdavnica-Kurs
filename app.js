// const path = require('path');
// const express = require('express');
// const authRoutes = require('./routes/auth.routes');

// const app = express();


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(authRoutes);

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server radi na portu ${port}`);
//   console.log(__dirname);
// });



// moze i u jedan red"

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

var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.createTemplateTagFirstArg=function(a){return a.raw=a};$jscomp.createTemplateTagFirstArgWithRaw=function(a,b){a.raw=b;return a};var path=require("path"),express=require("express"),authRoutes=require("./routes/auth.routes"),app=express();app.set("view engine","ejs");app.set("views",path.join(__dirname,"views"));app.use(authRoutes);var port=3E3;app.listen(port,function(){console.log("Server radi na portu "+port);console.log(__dirname)});