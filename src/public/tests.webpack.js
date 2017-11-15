import './main.module';
import 'bookingbug-angular/node_modules/angular-mocks';


let testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);