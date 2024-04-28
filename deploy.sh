echo "1"
git checkout main

echo "2"
rsync -avz --exclude='node_modules' -e 'ssh -p 3323' server/ qkrwldbf@1uton.com:/var/www/server

echo "done"