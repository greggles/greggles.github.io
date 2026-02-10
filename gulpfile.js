const uswds = require("@uswds/compile");

/**
 * USWDS version
 */
uswds.settings.version = 3;

/**
 * Path settings
 * Set the destination to Jekyll's asset directory
 */
uswds.paths.dist.css = './assets/css';
uswds.paths.dist.theme = './_sass';
uswds.paths.dist.img = './assets/img';
uswds.paths.dist.fonts = './assets/fonts';
uswds.paths.dist.js = './assets/js';

/**
 * Exports
 */
exports.init = uswds.init;
exports.compile = uswds.compile;
exports.watch = uswds.watch;
exports.default = uswds.compile;