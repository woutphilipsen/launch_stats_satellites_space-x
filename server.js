const express = require('express');
const graphqlHTTP  = require('express-graphql');
// go to github.com/graphql/express-graphql
// look at simple setup
const axios = require('axios');
// Bring in cors
const cors = require('cors');
// link to the file schema.js to get all the info about the 
// schema that is required and where all the graphql stuff goes
const schema = require('./schema.js');
const log = console.log;


// copied from the github page
const app = express();

// Allow cross-origin
app.use(cors());

// end-point /graphql => gonna run, graphqlHTTP
// then we gonna point to our schema
// graphiql is our client that can make queries to our server
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


// "process.env.PORT" to set it to the environment var so if we deploy it
// on heroku it's gonna take this as is setup port
// OR 5000 in developer mode
const PORT = process.env.PORT || 5000;

// arrow-fn to log if the port is listening 
app.listen(PORT, () => log(`Server started on port ${PORT}`));