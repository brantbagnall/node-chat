const express = require('express'),
bodyParser = require('body-parser'),
messCtrl = require('./controllers/messages_controller.js'),
app = express(),
port = 3000;

app.use(bodyParser.json());
app.use(express.static('./../public/build'))
app.get('/api/messages', messCtrl.read);

app.post('/api/messages', messCtrl.create);

app.put('/api/messages/:id', messCtrl.update)

app.delete('/api/messages/:id', messCtrl.delete);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})