require('dotenv').config();
var app = require('express')();
var get_ip = require('ipware')().get_ip;

app.route('/').get(function (req, res) {
  res.send({
    ipaddress: get_ip(req)['clientIp'] || false,
    language: req.headers['accept-language'].split(',')[0] || false,
    software: /\((.*?)\)/.exec(req.headers['user-agent'])[1] || false
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Started service at port', port);
});
