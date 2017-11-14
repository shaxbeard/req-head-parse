var connect = require('connect');
var http = require('http');
var os = require('os');

var app = connect();
var port = process.env.PORT || 3000;

// require request-ip and register it as middleware
var requestIp = require('request-ip');
app.use(requestIp.mw())

app.use(function(req, res) {
    // by default, the ip address will be set on the `clientIp` attribute
    var ip = req.clientIp;
    var osType = os.type();
    var osRelease = os.release();
    var osPlatform = os.platform();
    var arch = os.arch();
    res.end(ip + "\n" + osType + "\n" + osRelease + "\n" + osPlatform + "\n" + arch);
});






//create node.js http server and listen on port
http.createServer(app).listen(port);

// test it locally from the command line
// > curl -X GET localhost:3000 # Hello, your ip address is ::1 and is of type IPv6
