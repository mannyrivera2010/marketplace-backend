// route middleware to make sure a user is logged in

SAFE_METHODS = ['GET', 'HEAD', 'OPTIONS']

exports.IsAppsMallStewardOrReadOnly = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).end()
  }
}

exports.IsOrgStewardOrReadOnly = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).end()
  }
}

// Global permission check if current user is a User
exports.IsUser = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).end()
  }
}

// Global permission check if current user is an OrgSteward
exports.IsOrgSteward = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).end()
  }
}

//  Global permission check if current user is an AppsMallSteward
exports.IsAppsMallSteward = function(req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    res.status(401).end()
  }
}
