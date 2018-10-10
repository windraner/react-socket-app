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

const Player = require('./server_components/Player');
const Game = require('./server_components/Game');

const {ADD_SOCKET, DELETE_SOCKET} = require('./server_components/global/SocketList');
const {ADD_PLAYER, SET_PLAYER_PROPERTY, DELETE_PLAYER} = require('./server_components/global/PlayerList');
const {ADD_GAME, SET_GAME_PROPERTY, GET_GAME_LIST} = require('./server_components/global/GameList');

const {objectToArray, emitToAll} = require('./server_components/utility');

io.sockets.on('connection', (socket) => {
	console.log('connected', socket.id);
  ADD_SOCKET(socket);

  createNewPlayer(socket);

	socket.on('disconnect', function(){
    DELETE_PLAYER(socket);
    DELETE_SOCKET(socket);
    console.log('disconected', socket.id);
	});
});

const createNewPlayer = (socket) => {
  const player = new Player(socket.id);
  ADD_PLAYER(socket.id, player);

  socket.on('createNewGame', (data) => {
    const game = new Game(socket.id);
    ADD_GAME(socket.id, game);
    
    if(data.name) {
      SET_GAME_PROPERTY({id: socket.id, property: 'name', value: `${data.name} 's game`});
    } else {
      SET_GAME_PROPERTY({id: socket.id, property: 'name', value: `New game by NoName`});
    }
    
    SET_PLAYER_PROPERTY({id: socket.id, property: 'name', value: data.name});
    
    socket.emit('enterInRoom', {joinedToGame: GET_GAME_LIST()[socket.id].gameOwner});

    emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
  });

  socket.on('getGameList', () => {
    socket.emit('gameList', {gameList: objectToArray(GET_GAME_LIST())});
  });

  socket.on('attemptEnterRoom', (data) => {
    // check for game lobby
    if(GET_GAME_LIST()[data.gameId]) {
      const thisGame = GET_GAME_LIST()[data.gameId];
      // check for this player in lobby
      const isPlayerInRoom = thisGame.playersInRoom.find((item) => {
        if(item === socket.id) return item;
      });
      // check for slots in lobby
      if(!isPlayerInRoom && thisGame.playersInRoom.length < thisGame.playersPerRoom) {
        thisGame.playersInRoom.push(socket.id);
        SET_PLAYER_PROPERTY({id: socket.id, property: 'joinedToGame', value: thisGame});

        socket.emit('enterInRoom', {joinedToGame: thisGame.gameOwner});
        emitToAll('gameList', {gameList: objectToArray(GET_GAME_LIST())});
      }
    }
  }); 
}