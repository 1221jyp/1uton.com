echo "1"
git checkout main

echo "2"
rsync -avz --exclude='node_modules' --exclude='db.js' -e 'ssh -p 3323' server/ qkrwldbf@1uton.com:/var/www/server

echo "done"