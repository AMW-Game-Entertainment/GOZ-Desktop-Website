cd "/home/animemi3/public_html/GOZ-Web-Dev/" &&
rm -rf node_modules &&
rm -rf yarn.lock &&
rm -rf package-lock.json &&
ls &&
git pull &&
ls &&
yarn install &&
yarn buildCI-linux &&
ls
