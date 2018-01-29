import run from './version.run';
import bbProjectVersionComponent from './project_version.component';

export default angular
    .module('BB.version', [])
    .run(run)
    .component('bbProjectVersion', bbProjectVersionComponent)
    .name;