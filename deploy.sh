
npm install
cd client && npm install && npm run build && cd ..

if command -v pm2 &> /dev/null; then
    if [ ! -L "/var/www/public" ]; then
        ln -s /var/www/darna-website/client/build /var/www/public
    fi
    sudo -u nodejs pm2 restart server
fi