if [  -d 'tmp' ]; then
    rm -rf ./tmp
fi

mkdir 'tmp'

if [ -d 'node_modules' ]; then
    rm -rf ./node_modules/bookingbug-angular
    mv ./node_modules ./tmp/node_modules
fi

node ./helpers/local_sdk_prepare.js # create tmp/package.json that refers relatively to local sdk

cd ./tmp
npm install --global-style --no-package-lock
cd ..

mv ./tmp/node_modules ./node_modules

node ./helpers/local_sdk_symlink