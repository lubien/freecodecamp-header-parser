require('dotenv').config();
var app = require('express')();

app.route('/').get(function (req, res) {
  res.send({
    ipaddress: req.headers['x-forwarded-for'] || false,
    language: req.headers['accept-language'].split(',')[0] || false,
    software: /\((.*?)\)/.exec(req.headers['user-agent'])[1] || false
  });
});

var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Started service at port', port);
});
