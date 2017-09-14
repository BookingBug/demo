if [ ! -d 'tmp' ]; then
    mkdir 'tmp'
fi

rm -rf ./node_modules ./tmp/node_modules ./yarn.lock ./tmp/yarn.lock ./tmp/package.json

node ./helpers/local_sdk_prepare.js

cd ./tmp
yarn install
cd ..

mv ./tmp/node_modules ./node_modules

node ./helpers/local_sdk_symlink