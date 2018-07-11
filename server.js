const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
	res.setHeader("Access-Control-Allow-Origin",  null);
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const server = require('http').createServer(app).listen(process.env.PORT || 8080);
const io = require('socket.io').listen(server);

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

    socket.emit('enterInRoom', {joinedToGame: gameList[socket.id].gameOwner});

    emitToAll('gameList', {gameList: objectToArray(gameList)});
  });

  socket.on('getGameList', () => {
    socket.emit('gameList', {gameList: objectToArray(gameList)});
  });

  socket.on('attemptEnterRoom', (data) => {
    // check for game lobby
    if(gameList[data.gameId]) {
      const thisGame = gameList[data.gameId];
      // check for this player in lobby
      const isPlayerInRoom = thisGame.playersInRoom.find((item) => {
        if(item === socket.id) return item;
      });
      // check for slots in lobby
      if(!isPlayerInRoom && thisGame.playersInRoom.length < thisGame.playersPerRoom) {
        thisGame.playersInRoom.push(socket.id);
        playerList[socket.id].joinedToGame = thisGame;

        socket.emit('enterInRoom', {joinedToGame: thisGame.gameOwner});
        emitToAll('gameList', {gameList: objectToArray(gameList)});
      }
    }
  }); 
}

// send data to all connections
const emitToAll = (action, data) => {
  for(let i in SOCKET_LIST){
    let socket = SOCKET_LIST[i];
    socket.emit(action, data);
  }
}