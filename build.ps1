# Create the AdoptAHighway database and migrate as needed
Push-Location ./db
npm install
npm run create:db
npm run migrate:up
npm run sample-data
Pop-Location
