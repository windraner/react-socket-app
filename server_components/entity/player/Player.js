const Player = function(socket) {
    let _socket = socket;
    let self = {
      'id': socket.id,
      'name': '',
      'joinedToGame': false,
      'ready': false,
      'position': 'lobby',
    };
  
    self.getSocket = function(id) {
      return _socket;
    }
  
    return self;
  };

  module.exports = Player;