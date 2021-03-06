const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
var cors = require('cors');
const { launches } = require("./data/Launches");
const { books } = require("./data/Books");
const { workers } = require("./data/Workers");
const { students } = require("./data/Students");




// The GraphQL schema in string form
const typeDefs = `  
  type Launch {
    flight_number: Int
    mission_id: [String]
    mission_name: String
    launch_year: Int
    rocket: LaunchRocket
    launch_site: LaunchSite
    launch_success: Boolean
    links: LaunchLinks
    details: String
  }

  type LaunchRocket {
    rocket_id: String
    rocket_name: String
    rocket_type: String
  }

  type LaunchSite {
    site_id: String
    site_name: String
    site_name_long: String
  }

  type LaunchLinks {
    mission_patch: String
    mission_patch_small: String
    reddit_campaign: String
    reddit_launch: String
    reddit_recovery: String
    reddit_media: String
    presskit: String
    article_link: String
    wikipedia: String
    video_link: String
    youtube_id: String
    flickr_images: [String]
  }
  
  

  

  type Book { title: String, author: String }


  type Worker {
    id: ID!
    name: String!
    age: Int!
    wage: Float!
    active: Boolean!
  }


   type Student {
    id: ID!
    name: String!
    age: Int!
    wage: Float!
    active: Boolean!  
   }
  
  type Query {
    books: [Book]
    launch(id: String): Launch
    launches: [Launch]
    worker(id: ID!): Worker
    workers: [Worker!]!
    student(id: ID!): Student
    students(first: Int = 10 start: Int = 0): [Student!]!
    countStudents: Int!
  }

  type Mutation {
    postWorker(
      name: String!
      age: Int!
      wage: Float!
      active: Boolean!
    ): Worker!
  }
`;



// The resolvers
const resolvers = {
  Query: { 
      books: () => books,
      launch: (parent, args)=> launches.filter(one=> one.flight_number === parseInt(args.id))[0],
      launches: ()=> launches,
      worker: (parent, args)=> workers.filter(one=> one.id === args.id)[0],
      workers: ()=> workers,
      student: (parent, args)=> students.filter(one=> one.id === args.id)[0],
      students: (parent, args)=> students.slice(+args.start, +args.first+args.start),
      countStudents: ()=> students.length
 },
 Mutation: {
   postWorker(parent, args) {
     let lastId = -1;
     workers.map(one=> {
       if(one.id > lastId) lastId = parseInt(one.id);
     });
    //  let lastId = workers.reduce((prev, curr)=>  {
    //    if(prev && curr && curr.id > prev.id) return curr.id;
    //    else if(prev) return prev.id;
    //    return -1;
    //  });
    //  lastId += 1;
    lastId = lastId += 1;
    const newWorker = {
       id: lastId,
       ...args
     }
     workers.push(newWorker);
     return newWorker;
   }
 }
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// Initialize the app
const app = express();
app.use(cors());
app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.sendStatus(200);
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
