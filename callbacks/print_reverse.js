var getHTML = require('./https-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printHTML (html) {
  str = html.split("")
  str = str.reverse()
  str = str.join("")
  console.log(str);
}

console.log(getHTML(requestOptions, printHTML))