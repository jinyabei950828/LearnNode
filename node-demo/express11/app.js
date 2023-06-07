var express = require('express');
const ejs = require("ejs")
const bodyParser = require("body-parser")

//引入外部模块
const admin = require("./routes/admin")
const api = require("./routes/api")
const index = require("./routes/index")

var app = express();

//配置模板引擎
app.engine("html",ejs.__express)
app.set("view engine","html")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("staic"));

app.use("/admin",admin)
app.use("/api",api)
app.use("/index",index)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
