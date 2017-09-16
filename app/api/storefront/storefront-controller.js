function ListingController() {
    // this.characterListService_ = require('../../../services/characters/character-list-service');
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

ListingController.prototype = {
  get: get
};

var listingController = new ListingController();

module.exports = listingController;
