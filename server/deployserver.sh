echo "server파일을 전송합니다."
cd ..
rsync -avz --exclude='node_modules' -e 'ssh -i ~/.ssh/1221jyp -p 3323' server/ qkrwldbf@1uton.com:/var/www/server

echo "완료, server에 변경사항이 있을경우, 리눅스에서 'pm2 restart Myapp'을 실행시켜 주십시오."
