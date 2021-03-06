module.exports = function getHTML (options, callback) {
  var https = require('https');
  var emptyString = ''
  https.get(options, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
  
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      emptyString += data
      return callback(emptyString)
    });
  
    // the callback is invoked when all of the data has been received
    // (the `end` of the stream)
    response.on('end', function() {
      console.log('Response stream complete.');
    }); 
  });
}