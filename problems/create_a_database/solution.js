var nano = require('nano')('http://localhost:5984');

nano.db.create('ws-nano', function(err, result) {
  console.log(result.ok);
});