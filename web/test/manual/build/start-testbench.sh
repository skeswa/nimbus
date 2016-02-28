#! /bin/bash

./node_modules/typescript/bin/tsc
./node_modules/webpack/bin/webpack.js \
  --watch \
  --quiet \
  --config ./web/test/manual/build/webpack.config.js &
./node_modules/typescript/bin/tsc -w &
./node_modules/local-web-server/bin/cli.js -p '3000' -d './web/test/manual/dist' -r '/ -> /testbench.html'
