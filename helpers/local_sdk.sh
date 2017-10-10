if [ ! -d 'tmp' ]; then
    mkdir 'tmp'
fi

rm -rf ./tmp/package.json
rm -rf ./tmp/node_modules
rm -rf ./node_modules
node ./helpers/local_sdk_prepare.js

if [ -f 'yarn.lock' ]; then
    cp  ./yarn.lock ./tmp/yarn.lock
fi

cd ./tmp
yarn install --force
cd ..

mv ./tmp/node_modules ./node_modules
mv ./tmp/yarn.lock ./yarn.lock

node ./helpers/local_sdk_symlink