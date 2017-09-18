function ListingController() {
}

function get(req, res, next) {
  res.status(200).json({ hello: 'world' });
}

ListingController.prototype = {
  get: get
};

module.exports = ListingController;
