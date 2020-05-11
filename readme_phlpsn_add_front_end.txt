// initialize an empty git repo
git init

// make a gitignore file for files that you won't want to be comitted
touch .gitignore

// do a git add
git add . && git commit -m 'Created GraphQL Server'

// now we install react app
npx create-react-app client

// where gonna install concurrently to run front & back on same port
npm i concurrently

// go to package_json & add these scripts
"client": "npm start --prefix client"
"dev": "concurrently \"npm run server\" \"npm run client\""

// now go to cmd & start both servers with following command
// its gonna go to package.json en run the dev script
// this will fire up both servers with concurrently
    npm run dev
// checkout localhost:5000 & localhost:3000

// install apollo
// https://www.apollographql.com/docs/react

npm install apollo-boost react-apollo graphql
