var getHTML = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  lowerCase = html.toLowerCase()
  console.log(lowerCase);
}

console.log(getHTML(requestOptions, printHTML))

