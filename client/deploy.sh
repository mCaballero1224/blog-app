echo "Building app..."
npm run build 

echo "Deploying files to server..."
scp -r build/* mcaballero@futuregadget.dev:/var/www/futuregadget.dev

echo "Done!"
