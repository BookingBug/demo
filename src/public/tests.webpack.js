import 'main.module';
import 'angular-mocks';


let testsContext = require.context('.', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);