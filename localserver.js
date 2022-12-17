//Localserver.js
//

var http = require('http');
var fs = require('fs');

console.log("Started server on port 1234.");

var server = http.createServer(function(req, res){
    console.log("Request: " + req.url);
    if (req.url === "/" || req.url === "/index.html"){
        var file = fs.readFileSync((__dirname + "/index.html"), "utf8");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(file);
    }
    else{
        //If file exists
        if (fs.existsSync(__dirname + req.url)){
            //If req.url is a js file (Check with slice method)
            if (req.url.slice(-3) === ".js"){
                var file = fs.readFileSync((__dirname + req.url), "utf8");
                res.writeHead(200, {"Content-Type": "text/javascript"});
                res.end(file);
            }
            //Else send with html writehead
            else{
                var file = fs.readFileSync((__dirname + req.url), "utf8");
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(file);
            }
        }
        else{
            res.writeHead(404, {"Content-Type": "text/html"});
            res.end("404 Not Found");
        }
    }
}).listen(1234);