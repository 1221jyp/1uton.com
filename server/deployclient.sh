echo "작업을 시작합니다."
git checkout main

echo "client로 폴더위치를 옮깁니다."
cd ..
cd client

echo "npm run build를 실행합니다."
npm run build


echo "build된 폴더를 전송합니다."
rsync -avz -e "ssh -i ~/.ssh/1221jyp -p 3323" build/ qkrwldbf@1uton.com:/var/www/client/build
