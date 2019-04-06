//Dependencies 

const http = require('http');
const url = require('url');
const stringDecoder = require('string_decoder').StringDecoder;

const server = http.createServer((request,response)=>{
    //Parse URL
    let parsedURL = url.parse(request.url,true);
    //get Path
    let path = parsedURL.pathname; // untrimmed

    //Parse HTTP Method
    let method = request.method.toUpperCase();

    let queryStringObject = parsedURL.query;

    //remove extra '/'s
    let trimmedPath = path.replace(/\/+|\/+$/g,'');

    //getHeader
    let headers = request.headers;

    //getPayload
    let decoder = new StringDecoder('utf-8');
    let buffer ='';
    request.on('data', (data)=>{
        buffer += decoder.write(data);
    })
    request.on('end', ()=>{
        buffer += decoder.end();
        console.log(`Request received with this payload ${buffer}`);
        response.end('Sucess Data');
    }


   
});

server.listen(port=3000,()=>{
    console.log(`server is listening on port ${port}`);
})