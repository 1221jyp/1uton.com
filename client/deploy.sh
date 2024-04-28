echo "1"
git checkout main

echo "2"
npm run build

echo "4"
scp -r -P 3323 build/* qkrwldbf@1uton.com:/var/www/client/build

echo "done"