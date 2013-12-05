Using nodejs and nano generate a list of databases using the `nano.db.list` command.

---
HINTS:

Make sure you have NodeJS, CouchDb, and Nano installed:

* nodejs -> http://nodejs.org
* couchdb -> http://couchdb.apache.org
* nano -> `npm install nano`

To make Node.js program, create a new file with a `.js` extension and
start writing JavaScript! Execute your program by running it with the
`node` command. e.g.:

```
$ node program.js
```

You can write to the console in the same way as in the browser:

```
console.log("text")
```

When you are done, you must run:

   {appname} verify program.js

to proceed. Your program will be tested, a report will be generated,
and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------

Can't find nano?

Make sure you require `nano` as a module and add your couchdb server url as an initialization parameter.

```
var nano = require('nano')('http://localhost:5984'); 
```

----

Callbacks, all callbacks in node use the same signature:

```
function(error, result) {
  
}
```

the error object will be null if the command was successful, and then the result
will contain the data your looking for.