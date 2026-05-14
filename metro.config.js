const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

// Workaround for Node 22+ "node:sea" issue on Windows
if (config.resolver) {
  config.resolver.unstable_enablePackageExports = false;
}

module.exports = config;
