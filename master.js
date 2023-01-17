const HTTPModule = require("http");
const fs = require("fs");
const port = 3333;
var HTTPServer = HTTPModule.createServer();
HTTPServer.on('request', (request, response) => {
    console.log("Request received");
    var url = request.url;
    console.log(url);
    console.log(request.method);
    response.writeHead(200);
    switch (url) {
        case '/home':
            fs.readFile(__dirname +"/view/home.html",function(err,data){
                response.write(data);
                response.end();
            })            
            break;
        case '/about':
            fs.readFile(__dirname + "/view/about.html",function(err,data){
                response.write(data);
                response.end();
            })    
             break;
        case '/contact':
            fs.readFile(__dirname + "/view/contact.html",function(err,data){
                response.write(data);
                response.end();
            })               
            break;
       
        default:
            response.writeHead(404);
            response.write("<h1>page not found</h1>");
            response.end();

            break;
    }
});
HTTPServer.listen(port);