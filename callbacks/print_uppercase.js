var getHTML = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  upperCase = html.toUpperCase()
  console.log(upperCase);
}

console.log(getHTML(requestOptions, printHTML))