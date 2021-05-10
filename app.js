var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var DetailBook = require('./routes/DetailBook');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(path.join(__dirname, 'public/stylesheets/Carousel.css')));
app.use(express.static(path.join(__dirname, 'public/stylesheets/animation.css')));
app.use(express.static(path.join(__dirname, 'public/stylesheets/BookDetail.css')));
app.use(express.static(path.join(__dirname, 'public/stylesheets/Shopchart.scss')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/bootstrap.min.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/animation.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/nivo-preview-2.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/BookBestsale.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/slick.min.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/fakeloader.css')));

// app.use(express.static(path.join(__dirname, 'public/stylesheets/slick.min.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/pe-icon-7-stroke.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/owl.theme.default.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/nivo-slider.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/owl.carousel.min.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/nivo-preview-2.css')))

// app.use(express.static(path.join(__dirname, 'public/stylesheets/material-design-iconic-font.min.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/lightbox.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/mainmenu.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/lightbox.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/jquery-ui.min.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/fotorama.css')))

// app.use(express.static(path.join(__dirname, 'public/stylesheets/font-awesome.min..css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/fancybox.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/fakeloader.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/bicon.min.css')))
// app.use(express.static(path.join(__dirname, 'public/stylesheets/animation.css')));
// app.use(express.static(path.join(__dirname, 'public/stylesheets/fotorama.css')))
app.use('/', indexRouter);
app.use('/DetailBook', DetailBook);
// app.use('/users', usersRouter);
// app.use(express.static(path.join(__dirname, '/public/styleshets/style.css')));
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
