// Public booking dashboard module.
import bbPublicBookingModule from 'bookingbug-angular/src/public-booking/main.module';
import 'bookingbug-angular/src/public-booking/globs_to_remove'; // TODO remove once globs removed on sdk

// Template overrides.
import './sdk-templates/**/*.html';

// Configuration.
import '../../tmp/config.constants';

// Additional templates.
import './templates/main-steps/main_appointment.html';

// Additional fonts.
import './fonts/bb-icons.eot';
import './fonts/bb-icons.ttf';
import './fonts/bb-icons.woff';
import 'file-loader?name=fonts/[name].[ext]!./fonts/bb-icons.svg';

// Styles.
import './main.scss';

// Chosen angular translations.
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_en.js';
import 'file-loader?name=angular-i18n/[name].[ext]!bookingbug-angular/node_modules/angular-i18n/angular-locale_fr.js';

// Studio module bootstrap files.
import config from './main.config';
import run from './main.run';
import versionModule from './version/version.module';

export default angular
    .module('public', [
        bbPublicBookingModule,
        versionModule
    ])
    .config(config)
    .run(run)
    .name;




