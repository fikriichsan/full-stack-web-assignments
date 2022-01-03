// Import modules
const http = require('http');

// Create Server
const requestListener = (request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    
    let url = request.url;

    if(url === '/about'){
        response.write('<h1>Welcome to about us page</h1>');
        response.end();
    } else if(url === '/contact'){
        response.write('<h1>Welcome to contact us page</h1>');
        response.end();
    } else {
        response.write('<h1>Hello world</h1>');
        response.end();
    }
}

const server = http.createServer(requestListener);

// Add event handler
server.on('listening', function(){
    console.log("server is listening on port 8000")
})

server.on('close', () => {
    console.log("server is closed")
})

server.listen(8000);