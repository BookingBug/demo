# BESPOKE PROJECTS

## Tools

### ```gulp```
Runs web server.

Required flags:
- --root

Optional flags:
- --env
- --uglify
- --tests
- --analyzer
- --noBrowser

### ```gulp --distribution```
Creates project build.

Required flags:
- --root

Optional flags:
- --env
- --uglify
- --analyzer

### ```gulp unit-tests```
Runs unit tests once.

Required flags:
- --root

### ```gulp unit-tests:watch```
Runs unit tests in watch mode.

Required flags:
- --root

### ```gulp deploy```
Creates project build and deploys to aws.

Required flags:
- --root 

Optional flags:
- --env
- --uglify
- --deployVersion
- --noQa

### ```gulp relocate-templates```
Move templates to new location following changes made on sdk level:  [../../src/relocate_templates.json](../../src/relocate_templates.json)


# FLAGS: 

### --root
Value: project root directory name available directly under 'src' directory.


### --env
Value: can be any root property available in config.json file (except 'general').

By default set to development.


### --uglify
Value: true | false

If not used will be read from config.json (property 'uglify').


### --analyzer
If used, html report about project bundles will be created and exposed on port 8888.


### --noBrowser
if used web server will not open a new browser tab on first successful transpilation.


### --noQa
If used, will not add '/QA/branch-or-tag-name/' to the final AWS bucket deployment path.


### --deployVersion
Value: [false | release version string like '0.0.13']

If not used will be read from config.json (property 'deploy_version')
If value is set to specific version, task will try to check out it before creating a build.
If value is set to false, task will use current state of directory to create a build.

### --tests
If used web server will start together with unit tests in watch mode. 