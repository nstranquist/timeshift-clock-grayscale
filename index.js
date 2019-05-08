const express = require('express');
const app = express();

//send GET request
app.get('/', function(req,res) {
    res.send({'hello': 'world'})
})

// listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000');
})