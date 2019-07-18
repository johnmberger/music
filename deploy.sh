#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'johnmberger.com' > CNAME

git init
git add -A
git commit -m 'automated deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:johnmberger/music.git master:gh-pages

cd -