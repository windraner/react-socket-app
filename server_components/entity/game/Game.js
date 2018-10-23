const Game = function(id) {
    let self = {
      'name': '',
      'gameOwner': id,
      'canStart': false,
      'playersInRoom': [],
      'playersPerRoom': 4,
    };

    return self;
}

module.exports = Game;