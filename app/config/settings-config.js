var env = process.env;
var os = require('os');
var fs   = require('fs');
var yaml = require('js-yaml');
var path = require('path');

var basename  = path.basename(module.filename);

function SettingsConfig() {
    this.settings = {};

    initializeSettings(this);
}

function initializeSettings(instance) {
    loadEnvironmentConfigFile(instance);
    loadServerSettings(instance);
}

function loadEnvironmentConfigFile(instance) {
    nodeEnvironment = env.NODE_ENV || 'debug';
    var configLocation = path.join(__dirname, 'settings', 'settings.config.%s.yml'.replace('%s', nodeEnvironment));
    try {
        instance.settings = yaml.safeLoad(fs.readFileSync(configLocation, 'utf8'));
    } catch (e) {
        throw 'Unable to parse ' + configLocation + ': ' + e;
    }
}

function loadServerSettings(instance) {
    instance.settings.hostName = 'localhost'
    instance.settings.serverName = 'localhost' //os.hostname().toLowerCase();
    instance.settings.serverCores = os.cpus().length;
}

var settingsConfig = new SettingsConfig();

module.exports = settingsConfig;
