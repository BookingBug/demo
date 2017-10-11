if [ ! -d 'tmp' ]; then
    mkdir 'tmp'
fi

rm -rf ./tmp/package.json ./tmp/node_modules ./tmp/yarn.lock
mv ./node_modules ./tmp/node_modules
node ./helpers/local_sdk_prepare.js

if [ -f 'yarn.lock' ]; then
    cp  ./yarn.lock ./tmp/yarn.lock
fi

cd ./tmp
rm -rf ./node_modules/bookingbug-angular
yarn install --force
cd ..

mv ./tmp/node_modules ./node_modules
mv ./tmp/yarn.lock ./yarn.lock

node ./helpers/local_sdk_symlink