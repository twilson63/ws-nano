var nano = require('nano')('http://localhost:5984');

nano.db.list(function(err, dbs) {
  console.log(dbs);
});
