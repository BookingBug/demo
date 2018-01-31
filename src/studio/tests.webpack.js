import './main.module';
import 'bookingbug-angular/node_modules/angular-mocks';


const testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);

