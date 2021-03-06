import bbPublicBookingModule from 'bookingbug-angular/src/public-booking/entry.module';

import './sdk-templates/**/*.html';
import './templates/**/*.html';
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

// chosen angular translations
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_en.js';
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_fr.js';

import config from './main.config';
import run from './main.run';
import versionModule from './version/version.module';

export default angular
    .module('member', [
        bbPublicBookingModule,
        versionModule
    ])
    .config(config)
    .run(run)
    .name;




