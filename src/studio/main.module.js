// Admin dashboard module.
import bbAdminDashboardModule from 'bookingbug-angular/src/admin-dashboard/entry.module';

// Template overrides.
import './sdk-templates/**/*.html';

// Injected variables need to be imported explicitly so that they can be watched.
import './stylesheets/_client-variables.scss';

// Configuration.
import '../../tmp/config.constants';

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
    .module('studio', [
        bbAdminDashboardModule,
        versionModule
    ])
    .config(config)
    .run(run)
    .name;