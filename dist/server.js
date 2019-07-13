!function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="/",n(n.s=6)}([function(e,r){e.exports=require("express")},function(e,r){e.exports=require("passport")},function(e,r,n){var o=n(3),t=o.Schema,s=n(9),i=new t({email:{type:String,required:!0},password:{type:String,required:!0},username:{type:String,required:!0},address:{type:String,required:!0},city:{type:String,required:!0},state:{type:String,required:!0},zipcode:{type:String,required:!0},cart:{type:Object},wishList:{type:Object}});i.methods.encryptPassword=function(e){return s.hashSync(e,s.genSaltSync(5),null)},i.methods.validPassword=function(e){return s.compareSync(e,this.password)},e.exports=o.model("User",i)},function(e,r){e.exports=require("mongoose")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("http-proxy-middleware")},function(e,r,n){"use strict";n.r(r);var o=n(4),t=n.n(o),s=n(0),i=n.n(s),u=n(5),a=n.n(u),c=n(7),l=n(8),d=n(1),p=n(3),f=(n(10),n(11),n(12)),g=n(13),y=n(14),h=n(15),m=n(16),v=i()(),b=__dirname,x=t.a.join(b,"index.html"),w={"/search":{target:"https://api-v3.igdb.com",ws:!1,changeOrigin:!0,logLevel:"debug",onProxyRes:function(e,r,n){e.headers["Allow-Access-Control-Origin"]="*"},onProxyReq:function(e,r,n){e.setHeader("Allow-Access-Control-Origin","*")}},"/games":{target:"https://api-v3.igdb.com",ws:!1,changeOrigin:!0,logLevel:"debug",onProxyRes:function(e,r,n){e.headers["Allow-Access-Control-Origin"]="*"},onProxyReq:function(e,r,n){e.setHeader("Allow-Access-Control-Origin","*")}}};p.connect("mongodb://masterveloute:Heyheyhey3@ds131747.mlab.com:31747/gameapp_react",{useNewUrlParser:!0}),n(17)(d),v.use(y("dev")),v.use(i.a.json()),v.use(f({secret:"dhfpaiojdhfopshdapfsapfoidnfopsangspd",resave:!1,saveUninitialized:!1})),v.use(h()),v.use(g({errorFormatter:function(e,r,n){for(var o=e.split("."),t=o.shift();o.length;)t+="[".concat(o.shift(),"]");return{param:t,msg:r,value:n}}})),v.use(historyApiFallback({verbose:!1})),v.use(d.initialize()),v.use(d.session()),w&&Object.keys(w).forEach(function(e){return v.use(a()(e,w[e]))}),v.use("/authLocal",c),v.use("/user",l),v.use(i.a.static(b)),v.use(m()),v.get("*",function(e,r){r.sendFile(x)});var q=process.env.PORT||8080;v.listen(q,function(){console.log("App listening to ".concat(q,"....")),console.log("Press Ctrl+C to quit.")})},function(e,r,n){var o=n(0),t=n(1),s=o.Router();s.post("/signup",function(e,r,n){t.authenticate("local.signup",{failureFlash:!0},function(o,t,s){return o?n(o):t?void r.send(t.username):r.send({error:e.flash("signupErrors")})})(e,r,n)}),s.post("/signin",function(e,r,n){t.authenticate("local.signin",{failureFlash:!0},function(o,t,s){return o?n(o):t?void r.send(t.username):(console.log(t),r.send({error:e.flash("loginError")}))})(e,r,n)}),e.exports=s},function(e,r,n){var o=n(0).Router(),t=n(2);o.post("/addTo",function(e,r,n){console.log(e.body),t.find({username:e.body.userid},function(e,n){e?r.send("Something went wrong with mLab"):0===n.length?r.send("No user found"):console.log(n)})}),e.exports=o},function(e,r){e.exports=require("bcrypt")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("body-parser")},function(e,r){e.exports=require("express-session")},function(e,r){e.exports=require("express-validator")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("connect-flash")},function(e,r){e.exports=require("cors")},function(e,r,n){n(1);var o=n(2),t=n(18).Strategy;e.exports=function(e){e.serializeUser(function(e,r){r(null,e.id)}),e.deserializeUser(function(e,r){o.findById(e,function(e,n){r(e,n)})}),e.use("local.signup",new t({usernameField:"username",passwordField:"password",passReqToCallback:!0},function(e,r,n,t){console.log("checking for if user exist");var s=e.body,i=s.email,u=s.address,a=s.city,c=s.state,l=s.zipcode;o.findOne({email:i},function(s,d){if(s)return t(s);if(d)return t(null,!1,e.flash("signupErrors","This email has been taken"));var p=new o;p.set({email:i,password:p.encryptPassword(n),username:r,address:u,city:a,state:c,zipcode:l}),p.save(function(e,r){return e?(console.log(e),t(e)):t(null,p)})})})),e.use("local.signin",new t({usernameField:"username",passwordField:"password",passReqToCallback:!0},function(e,r,n,t){o.findOne({username:r},function(r,o){return r?t(r):o?o.validPassword(n)?t(null,o):t(null,!1,e.flash("loginError","Incorrect password")):t(null,!1,e.flash("loginError","Incorrect username"))})}))}},function(e,r){e.exports=require("passport-local")}]);