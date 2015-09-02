var express = require('express');
var path = require('path');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.get('/app.js', function (req, res) {
  res.redirect('//localhost:9090/build/app.js');
});

app.use(express.static(path.join(__dirname, 'build')));

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }
    });

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:%s', server.address().port);
});