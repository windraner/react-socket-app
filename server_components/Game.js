const Game = function(id) {
    let self = {
      'name': '',
      'gameOwner': id,
      'playersInRoom': [id],
      'playersPerRoom': 4,
    };

    return self;
}

module.exports = Game;