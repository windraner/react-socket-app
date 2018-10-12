const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./server_components/routes');

const app = express();

// serves up static files from the public folder. Anything in public/ will just be served up as the file it is
app.use(express.static(path.join(__dirname, 'client/build')));

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

const io = require('socket.io').listen(server);

const createNewPlayer = require('./server_components/entity/player/createNewPlayer');

io.sockets.on('connection', (socket) => {
  createNewPlayer(socket);
});