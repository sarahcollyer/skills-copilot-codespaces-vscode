// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [
  { name: 'Jesse', message: 'Hello there!' },
  { name: 'John', message: 'How are you?'