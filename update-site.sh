#!/bin/bash
cd /var/www/WebSite-portifolio
git pull
npm run build
systemctl restart nginx
echo "Site atualizado com sucesso! </ >_"
