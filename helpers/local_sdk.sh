if [ ! -d 'tmp' ]; then
    mkdir 'tmp'
fi

rm -rf ./tmp/package.json ./tmp/node_modules ./tmp/package-lock.json
mv ./node_modules ./tmp/node_modules
node ./helpers/local_sdk_prepare.js

if [ -f 'package-lock.json' ]; then
    cp  ./package-lock.json ./tmp/package-lock.json
fi

cd ./tmp
rm -rf ./node_modules/bookingbug-angular
npm install
cd ..

mv ./tmp/node_modules ./node_modules
mv ./tmp/package-lock.json ./package-lock.json

node ./helpers/local_sdk_symlink