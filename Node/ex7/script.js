const fs = require('fs');

fs.writeFile('test.txt', 'Hello World!', function (err) {
  if (err) throw err;
  console.log('il file di testo è stato creato.');
});