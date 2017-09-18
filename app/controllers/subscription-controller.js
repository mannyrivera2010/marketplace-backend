function SubscriptionController() {
    // this.characterListService_ = require('../../../services/characters/character-list-service');
}

function getSubscription(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

SubscriptionController.prototype = {
  getSubscription: getSubscription
};


module.exports = SubscriptionController;
