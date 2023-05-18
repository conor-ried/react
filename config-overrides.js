const webpack = require('webpack');

module.exports = function override(config, env) {
  // Update your configuration as needed

  // Replace the deprecated options with 'setupMiddlewares'
  if (config.devServer) {
    config.devServer.setupMiddlewares = [
      ...(config.devServer.setupMiddlewares || []),
      function (devServer) {
        // Add your custom middlewares here
        // Example:
        // devServer.app.use(someMiddleware);

        // Call the original function if available
        if (config.devServer.onBeforeSetupMiddleware) {
          config.devServer.onBeforeSetupMiddleware(devServer);
        }
      },
      function (devServer) {
        // Add your custom middlewares here
        // Example:
        // devServer.app.use(someOtherMiddleware);

        // Call the original function if available
        if (config.devServer.onAfterSetupMiddleware) {
          config.devServer.onAfterSetupMiddleware(devServer);
        }
      },
    ];

    // Remove the deprecated options
    delete config.devServer.onBeforeSetupMiddleware;
    delete config.devServer.onAfterSetupMiddleware;
  }

  return config;
};