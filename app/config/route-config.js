var settingsConfig = require('./settings-config');

var os = require('os');
var fs   = require('fs');
var yaml = require('js-yaml');
var path = require('path');

var passport = require('passport');

var basename  = path.basename(module.filename);
// var controllers = require('../controllers');

function RouteConfig() {
}

function loadRouteConfig() {
  var config;

  try {
    config = yaml.safeLoad(fs.readFileSync(path.join(__dirname, 'route.config.yml'), 'utf8'));

    routes_file = yaml.safeLoad(fs.readFileSync(path.join(__dirname, '../api/routes.yml'), 'utf8'));
    routes = routes_file.paths;

    for(var route_key in routes) {
        current_route = routes[route_key];
        for(var method_key in current_route) {
            current_method_object = current_route[method_key];

            operation_string = current_method_object['operationId'].split('.')
            controller_string = operation_string[0]
            action_string = operation_string[1]
            console.log('> ' + route_key + ' - ' + method_key + ' - ' + controller_string + ' - ' + action_string);
        }

    }

    if(!config.routes || config.routes.length === 0) {
      throw '"routes" not defined';
    }
}
  catch(e) {
    throw 'Unable to parse "/config/route.config.yml": ' + e;
  }

  return config;
}

function registerRoutes(application) {
  var config = loadRouteConfig();

  for(var i = 0, length = config.routes.length; i < length; i++) {
    var routeItem = config.routes[i];

    var controller = loadController(routeItem);
    var route = getRoute(routeItem);
    var method = getMethod(routeItem);
    var action = getAction(routeItem);

    registerRoute(application, controller, route, method, action);
  }

  createConfigRoute(application);
}

function loadController(routeItem) {
  var controller;

  if(!routeItem || !routeItem.controller) {
    throw 'Undefined "controller" property in "lib/config/route.config.json"';
  }

  try {
    controller_module = require(routeItem.controller);
    controller = new controller_module()
  }
  catch(e) {
    throw 'Unable to load ' + routeItem.controller + ": " + e;
  }

  return controller;
}

function getRoute(routeItem) {
  if(!routeItem || !routeItem.route || routeItem.route.length === 0) {
    throw 'Undefined or empty "route" property in "lib/config/route.config.json"';
  }

  return routeItem.route;
}

function getMethod(routeItem) {
  if(!routeItem || !routeItem.method || routeItem.method.length === 0) {
    throw 'Undefined or empty "method" property in "lib/config/route.config.json"';
  }

  var method = routeItem.method.toLowerCase();

  switch(method) {
    case 'get':
    case 'put':
    case 'post':
    case 'delete':
      return method;
      break;
    default:
      throw 'Invalid REST "method" property in "lib/config/route.config.json": ' + method;
  }
}

function getAction(routeItem) {
  if(!routeItem || !routeItem.action || routeItem.action.length === 0) {
    return getMethod(routeItem);
  }
  return routeItem.action;
}

function registerRoute(application, controller, route, method, action) {
  console.log('registerRoute(%s) - method:%s - action: %s', route, method, action)

  application.route(route)[method](passport.authenticate('basic', {session:false}),
  function(req, res, next) {
    controller[action](req, res, next);
  });
}

function createConfigRoute(application) {
  application.route('/config').get(passport.authenticate('basic', {session:false}),
    function(req, res, next) {
      res.status(200).json(settingsConfig.settings);
  });
}

RouteConfig.prototype = {
  registerRoutes: registerRoutes
};

var routeConfig = new RouteConfig();

module.exports = routeConfig;
