!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=5)}([function(e,r){e.exports=require("express")},function(e,r){e.exports=require("passport")},function(e,r,n){var t=n(3),o=t.Schema,s=n(8),i=new o({email:{type:String,required:!0},password:{type:String,required:!0},username:{type:String,required:!0},address:{type:String,required:!0},city:{type:String,required:!0},state:{type:String,required:!0},zipcode:{type:String,required:!0},cart:{type:Object},wishList:{type:Object}});i.methods.encryptPassword=function(e){return s.hashSync(e,s.genSaltSync(5),null)},i.methods.validPassword=function(e){return s.compareSync(e,this.password)},e.exports=t.model("User",i)},function(e,r){e.exports=require("mongoose")},function(e,r){e.exports=require("path")},function(e,r,n){"use strict";n.r(r);var t=n(4),o=n.n(t),s=n(0),i=n.n(s),u=n(6),a=n(7),c=n(9),l=n(1),p=n(3),f=(n(10),n(11),n(12)),d=n(13),g=n(14),m=n(15),y=i()(),h=__dirname,v=o.a.join(h,"index.html"),b=n(16);p.connect("mongodb://masterveloute:Heyheyhey3@ds131747.mlab.com:31747/gameapp_react",{useNewUrlParser:!0}),n(17)(l),y.use(g("dev")),y.use(i.a.json()),y.use(f({secret:"dhfpaiojdhfopshdapfsapfoidnfopsangspd",resave:!1,saveUninitialized:!1})),y.use(m()),y.use(d({errorFormatter:function(e,r,n){for(var t=e.split("."),o=t.shift();t.length;)o+="[".concat(t.shift(),"]");return{param:o,msg:r,value:n}}})),y.use(c({verbose:!1})),y.use(l.initialize()),y.use(l.session()),y.use("/authLocal",u),y.use("/user",a),y.use(i.a.static(h)),y.use(b()),y.get("*",function(e,r){r.sendFile(v)});var x=process.env.PORT||8080;y.listen(x,function(){console.log("App listening to ".concat(x,"....")),console.log("Press Ctrl+C to quit.")})},function(e,r,n){var t=n(0),o=n(1),s=t.Router();s.post("/signup",function(e,r,n){o.authenticate("local.signup",{failureFlash:!0},function(t,o,s){return t?n(t):o?void r.send(o.username):r.send({error:e.flash("signupErrors")})})(e,r,n)}),s.post("/signin",function(e,r,n){o.authenticate("local.signin",{failureFlash:!0},function(t,o,s){return t?n(t):o?void r.send(o.username):(console.log(o),r.send({error:e.flash("loginError")}))})(e,r,n)}),e.exports=s},function(e,r,n){var t=n(0).Router(),o=n(2);t.post("/addTo",function(e,r,n){console.log(e.body),o.find({username:e.body.userid},function(e,n){e?r.send("Something went wrong with mLab"):0===n.length?r.send("No user found"):console.log(n)})}),e.exports=t},function(e,r){e.exports=require("bcrypt")},function(e,r){e.exports=require("connect-history-api-fallback")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("express-session")},function(e,r){e.exports=require("express-validator")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("connect-flash")},function(e,r){e.exports=require("cors")},function(e,r,n){n(1);var t=n(2),o=n(18).Strategy;e.exports=function(e){e.serializeUser(function(e,r){r(null,e.id)}),e.deserializeUser(function(e,r){t.findById(e,function(e,n){r(e,n)})}),e.use("local.signup",new o({usernameField:"username",passwordField:"password",passReqToCallback:!0},function(e,r,n,o){console.log("checking for if user exist");var s=e.body,i=s.email,u=s.address,a=s.city,c=s.state,l=s.zipcode;t.findOne({email:i},function(s,p){if(s)return o(s);if(p)return o(null,!1,e.flash("signupErrors","This email has been taken"));var f=new t;f.set({email:i,password:f.encryptPassword(n),username:r,address:u,city:a,state:c,zipcode:l}),f.save(function(e,r){return e?(console.log(e),o(e)):o(null,f)})})})),e.use("local.signin",new o({usernameField:"username",passwordField:"password",passReqToCallback:!0},function(e,r,n,o){t.findOne({username:r},function(r,t){return r?o(r):t?t.validPassword(n)?o(null,t):o(null,!1,e.flash("loginError","Incorrect password")):o(null,!1,e.flash("loginError","Incorrect username"))})}))}},function(e,r){e.exports=require("passport-local")}]);