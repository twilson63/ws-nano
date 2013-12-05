#!/usr/bin/env node

const Workshopper = require('workshopper')
    , path        = require('path')

Workshopper({
    name     : 'ws-nano'
  , title    : 'Learn some CouchDb using the Nano module'
  , appDir   : __dirname
  , helpFile : path.join(__dirname, 'help.txt')
}).init()