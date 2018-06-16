const Player = function(id) {
    let self = {
      'id': id,
      'name': '',
      'joinedToGame': false,
    };
  
    self.createNewGame = function(id) {
      const game = new Game(id);
      gameList.push(game);
    }
  
    return self;
  };

  module.exports = Player;