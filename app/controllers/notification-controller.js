function NotificationController() {
    // this.characterListService_ = require('../../../services/characters/character-list-service');
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

NotificationController.prototype = {
  get: get
};

module.exports = NotificationController;
