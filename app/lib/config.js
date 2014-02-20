// defining environment: NODE_ENV=production node app.js
'use strict';

var _ = require('lodash');
var configDir = '../../config/';
var config = require(configDir + 'config-default.json');

var env = process.env.NODE_ENV || 'development';
var configEnv = require(configDir + 'config-' + env + '.json');
config = _.merge(config, configEnv, function(a, b) {
	return _.isArray(a) ? b : undefined;

});

module.exports = config;