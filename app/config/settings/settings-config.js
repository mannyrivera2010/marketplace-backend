var os = require('os');
var env = process.env;

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

    var configLocation = './settings.config.%s.json'.replace('%s', nodeEnvironment);

    try {
        instance.settings = require(configLocation);
    }
    catch (e) {
        throw 'Unable to parse "app/config/settings/"' + configLocation + ': ' + e;
    }
}

function loadServerSettings(instance) {
    instance.settings.serverName = os.hostname().toLowerCase();
    instance.settings.serverCores = os.cpus().length;
}

var settingsConfig = new SettingsConfig();

module.exports = settingsConfig;
