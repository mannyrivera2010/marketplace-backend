function SubscriptionService() {
}

function lookupClown(id) {
  return { id: id };
}

SubscriptionService.prototype = {
  lookupClown: lookupClown
};

var subscriptionService = new SubscriptionService();

module.exports = subscriptionService;
