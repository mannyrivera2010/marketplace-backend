function IntentController() {
    // this.characterListService_ = require('../../../services/characters/character-list-service');
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

IntentController.prototype = {
  get: get
};

module.exports = IntentController;
