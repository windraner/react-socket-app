const express = require('express');
const path = require('path');
const app = express();
const port = 5000;
const server = require('http').createServer(app).listen(process.env.PORT || port);
const io = require('socket.io').listen(server);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
//app.listen(9000);

const Player = require('./server_components/Player');
const Game = require('./server_components/Game');

const {objectToArray} = require('./server_components/utility');

const SOCKET_LIST = {}
const playerList = {};
const gameList = {};

io.sockets.on('connection', (socket) => {
	console.log('connected', socket.id);
  SOCKET_LIST[socket.id] = socket;

  createNewPlayer(socket);

	socket.on('disconnect', function(){
    delete playerList[socket.id];
    delete SOCKET_LIST[socket.id];
    console.log('disconected', socket.id);
	});
});

const createNewPlayer = (socket) => {
  const player = new Player(socket.id);
  playerList[socket.id] = player;

  socket.on('createNewGame', (data) => {
    const game = new Game(socket.id);
    gameList[socket.id] = game;
    
    if(data.name) {
      gameList[socket.id].name = `${data.name} 's game`;
    } else {
      gameList[socket.id].name = `New game by NoName`;
    }
    
    playerList[socket.id].name = data.name;

    emitToAll('gameList', {gameList: objectToArray(gameList)});
  });

  socket.on('getGameList', () => {
    socket.emit('gameList', {gameList: objectToArray(gameList)});
  });
}

const emitToAll = (action, data) => {
  for(let i in SOCKET_LIST){
    let socket = SOCKET_LIST[i];
    socket.emit(action, data);
  }
}