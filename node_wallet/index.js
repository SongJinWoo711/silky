let express = require('express');
const ChromeLauncher = require('chrome-launcher'); //크롬브라우져//
let app = express();
let router = require('./router/main')(app); //라우터에연결시켜놓은것//
let port = 3000;

app.set('views', __dirname + '/views'); //기본 포맷//
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function() {
  console.log('Express server has started on port ' + port);
});
