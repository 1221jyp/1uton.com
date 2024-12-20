echo "server 파일을 전송합니다."
cd ..
rsync -avz \
  --exclude='node_modules' \
  --exclude='.env' \
  -e 'ssh -i ~/.ssh/1221jyp -p 3323' server/ qkrwldbf@1uton.com:/var/www/server

# linux.env 파일을 .env 이름으로 전송
rsync -avz \
  -e 'ssh -i ~/.ssh/1221jyp -p 3323' server/linux.env qkrwldbf@1uton.com:/var/www/server/.env

echo "완료, server에 변경사항이 있을 경우, 리눅스에서 'pm2 restart Myapp'을 실행시켜 주십시오."
