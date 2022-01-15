#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:closeluca1/vue3-quiz-game.git master:gh-pages

cd -