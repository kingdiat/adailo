var express = require('express');
var app = express();

app.use('/', express.static('pub'));
app.get('/', function(req, res) {
    if (req.query.one == 'a') {
        res.send('<H1>Hello, Express.<H1>');
    }
    else {
        res.send('others');
    }
});
app.get('/:name', function(req, res) {
    console.log('Request Type:', req.method);
    if (req.params.name == 'one.html') {
        res.send('one.html');
    }
    else if (req.params.name == 'a') {
        res.send('AAA');
    }

    res.send(req.params.name)
});

app.listen(3000, function() {
    console.log('Express started!');
});
