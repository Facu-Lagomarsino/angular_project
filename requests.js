const http = require('http');
const data = JSON.stringify({
    title: 'Mean Stack'
});

const options = {
    hostname: 'localhost',
    port: 3000,
    pathname: '/',
    method: 'GET', // 'POST', 'PUT', 'DELETE'
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const request = http.request(options, response => {
//    console.log(`STATUS: ${response.statusCode}`);
//    console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
//    response.setEncoding('utf8');
    response.on('data', (chunk) => {
        process.stdout.write(chunk);
        //  console.log(`BODY: ${chunk}`);
    })
})

request.on('error', error => {
    console.error(error);
})

request.end();