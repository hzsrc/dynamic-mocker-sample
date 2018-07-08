require('dynamic-mocker').checkStart('./mock/mock-config.js');
require('http-server').createServer({root: './'}).listen(8090)

console.log('Visit this: http://localhost:8090/')
