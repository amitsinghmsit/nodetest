var http = require('http');
var fs = require('fs');

//404 response

function send404response(response){
	response.writeHead(404,{"Content-Type": "text/plain"});
	response.write("Error 404: Page not found!!!");
	response.end();

}

function onRequest(request, response){

	if (request.method == 'GET' && request.url =='/') {
		response.writeHead(200,{"Content-Type": "text/html"})
		fs.createReadStream("./index.html").pipe(response);
	}
	else{

		send404response(response);
	}

}


http.createServer(onRequest).listen(8888);
console.log("server is now running....")