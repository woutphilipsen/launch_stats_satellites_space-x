const axios = require('axios');

// Our launches will be an object type
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql');

// where gonna have 2 object types, launches & rockets

// create Launch Type
const LaunchType = new GraphQLObjectType({
    // we put in our object with some key value pairs
    // name of our type
    name: 'Launch',
    // here we have our fields, each field also have a type
    // take look at spacexAPI => github.com/r-spacex/SpaceX-API
    // click Run In Postman => postman => launches
    // https://docs.spacexdata.com/?version=latest
    // WE WANT TO MAKE A GET REQUEST TO OUR ENDPOINT get all launches
    // https://api.spacexdata.com/v3/launches
    // click on example response to see what data is available
    // we take the flightnumber, missionname, lauunchyear, launchdate, 
    // rocket: seperate object type wich come later, launch succes 
    fields: () => ({
        // go to line 2 & add curly brackets & import the integer type
        flight_number: {
            type: GraphQLInt
        },
        // go to line 2 & bring in GraphQLString
        mission_name: {
            type: GraphQLString
        },
        launch_year: {
            type: GraphQLString
        },
        launch_date_local: {
            type: GraphQLString
        },
        // go to line 2 & bring in GraphQLBoolean
        launch_succes: {
            type: GraphQLBoolean
        },
        // now create from rocket another object type
        // this is how to create a relationship in your schema
        rocket: {
            type: RocketType
        }
    })
});

// create object RocketType
const RocketType = new GraphQLObjectType({
    name: 'Rocket',
    fields: () => ({
        rocket_id: {
            type: GraphQLString
        },
        rocket_name: {
            type: GraphQLString
        },
        rocket_type: {
            type: GraphQLString
        }
    })
});

// we need to create a root query now

// Root Querie
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                // put in spacex endpoint 
                return axios.get('https://api.spacexdata.com/v3/launches')
                    .then(res => res.data);
            }
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                // go look at the endpoints in docs on spacex
                // request to single launch, on flight number
                return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                    .then(res => res.data);
            }
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve(parent, args) {
                // put in spacex endpoint 
                return axios.get('https://api.spacexdata.com/v3/rockets')
                    .then(res => res.data);
            }
        },
        rocket: {
            type: RocketType,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve(parent, args) {
                // go look at the endpoints in docs on spacex
                // request to rockets, on id
                return axios.get(`https://api.spacexdata.com/v3/rockets/${args.id}`)
                    .then(res => res.data);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});