//Dependencies 

const http = require('http');
const url = require('url');

const server = http.createServer((request,response)=>{
    //Parse URL
    let parsedURL = url.parse(request.url,true);
    //get Path
    let path = parsedURL.pathname; // untrimmed

    //Parse HTTP Method
    let method = request.method.toUpperCase();

    let trimmedPath = path.replace(/\/+|\/+$/g,'');

    console.log(`Request received on path ${trimmedPath}`);
    response.end('Sucess Data');
});

server.listen(port=3000,()=>{
    console.log(`server is listening on port ${port}`);
})