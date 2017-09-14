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

### ```gulp --distribution```
Creates project build.

Required flags:
- --root

Optional flags:
- --env
- --uglify

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

If not used will be read from config.json (property 'uglify')


### --deployVersion
Value: [false | release version string like '0.0.13']

If not used will be read from config.json (property 'deploy_version')
If value is set to specific version, task will try to check out it before creating a build.
If value is set to false, task will use current state of directory to create a build.

### --tests
If used web server will start together with unit tests in watch mode. 