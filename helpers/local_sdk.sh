if [  -d 'tmp' ]; then
    rm -rf ./tmp
fi

mkdir 'tmp'

if [ -d 'node_modules' ]; then
    rm -rf ./node_modules/bookingbug-angular
    mv ./node_modules ./tmp/node_modules
fi

node ./helpers/local_sdk_prepare.js # create tmp/package.json that refers relatively to local sdk

if [ -f 'package-lock.json' ]; then
    cp  ./package-lock.json ./tmp/package-lock.json
fi

cd ./tmp
npm install --global-style
cd ..

mv ./tmp/node_modules ./node_modules
mv ./tmp/package-lock.json ./package-lock.json

node ./helpers/local_sdk_symlink