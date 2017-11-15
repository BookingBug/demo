import bbAdminDashboardModule from 'bookingbug-angular/src/admin-dashboard/main.module';
import 'bookingbug-angular/src/admin-dashboard/globs_to_remove';//TODO remove once globs removed on sdk

import './sdk-templates/**/*.html';
import '../../tmp/config.constants';

// fonts
import './fonts/bb-icons.eot';
import './fonts/bb-icons.ttf';
import './fonts/bb-icons.woff';
import 'file-loader?name=fonts/[name].[ext]!./fonts/bb-icons.svg';

// images
import './images/bb-logo.svg';

// styles
import './main.scss';
//import './stylesheets/font-awesome.config'; // font awesome js settings

// chosen angular translations
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_en.js';
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_fr.js';

import config from './main.config';
import run from './main.run';
import versionModule from './version/version.module';

export default angular
    .module('studio', [
        bbAdminDashboardModule,
        versionModule
    ])
    .config(config)
    .run(run)
    .name;