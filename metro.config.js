const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Web-only configuration
config.resolver.platforms = ['web'];

module.exports = config;