
npm install
cd client && npm install && npm run build && cd ..

if command -v pm2 &> /dev/null
then
    sudo -u nodejs rm -rf /var/www/public && sudo -u nodejs cp -R client/build /var/www/public/
    sudo -u nodejs pm2 restart darna
    sudo systemctl restart nginx
fi