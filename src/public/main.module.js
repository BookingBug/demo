import bbPublicBookingModule from 'bookingbug-angular/src/public-booking/entry.module';

import './sdk-templates/**/*.html';
import '../../tmp/config.constants';

//templates
import './templates/main-steps/main_appointment.html';

// fonts
import './fonts/bb-icons.eot';
import './fonts/bb-icons.ttf';
import './fonts/bb-icons.woff';
import 'file-loader?name=fonts/[name].[ext]!./fonts/bb-icons.svg';

// images
import './images/bb-logo.svg';

// chosen angular translations
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_en.js';
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_fr.js';

import config from './main.config';
import run from './main.run';
import versionModule from './version/version.module';

// Try to load a versioned scss file, otherwise load the default one
import BBUIVersionService from 'bookingbug-angular/src/public-booking/-versioning/ui_version.service';
try {
    require('./main_v' + BBUIVersionService.getUIVersion() + '.scss');
} catch (ex) {
    require('./main.scss');
}


export default angular
    .module('public', [
        bbPublicBookingModule,
        versionModule
    ])
    .config(config)
    .run(run)
    .name;




