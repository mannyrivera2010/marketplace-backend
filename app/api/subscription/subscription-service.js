function ListingService() {
}

function lookupClown(id) {
  return { id: id };
}

ClownService.prototype = {
  lookupClown: lookupClown
};

var clownService = new ClownService();

module.exports = clownService;
