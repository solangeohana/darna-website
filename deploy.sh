
npm install
cd client && npm install && npm run build && cd ..

if command -v pm2 &> /dev/null
then
    sudo -u nodejs pm2 restart
    sudo systemctl restart nginx
fi