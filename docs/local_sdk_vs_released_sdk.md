# BESPOKE PROJECTS

## Local SDK vs Released SDK

### ```npm run i```
Install released version of SDK
1) removes node_modules
2) install all dependencies listed in package.json file

### ```npm run il```
Install local version of SDK
1) removes node_modules
2) prepares new version of package.json inside .tmp directory
3) modifies ./tmp/package.json so bookingbug-angular dependency points to your local repository (BB_SDK_SRC_DIR)
4) install ./tmp/package.json
5) creates a symlink to local SDK
6) moves ./tmp/node_modules to project's root
