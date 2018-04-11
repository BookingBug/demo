import template from './version.html';

let bbProjectVersionComponent = {
    controller: BbProjectVersionController,
    controllerAs: '$projectVersionCtrl',
    templateUrl: template.id
};

function BbProjectVersionController(bbConfig, $window) {
    'ngInject';

    this.$onInit = () => {
        exposeVersions();
        $window.erro = ()=> new Error('test error');
    };

    const exposeVersions = () => {
        this.sdkVersion = bbConfig.BUILD.SDK_VERSION;
        if (this.sdkVersion === null) {
            this.sdkVersion = 'unreleased version';
        }

        this.projectDeployVersion = bbConfig.BUILD.DEPLOY_VERSION;
        if (this.projectDeployVersion === false) {
            this.projectDeployVersion = 'unreleased version';
        }

        this.buildDateTime = bbConfig.BUILD.BUILD_DATETIME;

        this.showVersion = bbConfig.BUILD.SHOW_VERSION;
    };
}

export default bbProjectVersionComponent;
