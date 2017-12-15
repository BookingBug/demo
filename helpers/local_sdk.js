'use strict';

const path = require('path');
const localSDK = require(path.join(process.env.BB_SDK_SRC_DIR, 'bespoke-gulp-tasks', 'helpers', 'local_sdk.js'));
const projectRootPath = path.join(__dirname, '..');

localSDK.link(projectRootPath);
