'use strict';

const gulp = require('gulp');
const chalk = require('chalk');

try {
    // require('./node_modules/bookingbug-angular/bespoke-gulp-tasks/gulpfile')(gulp, __dirname);
    require('../bookingbug-angular/bespoke-gulp-tasks/gulpfile')(gulp, __dirname);
} catch (err) {
    console.log(err);
    console.error(chalk.red('\nbookingbug-angular dependency required\n'));
    process.exit(0);
}