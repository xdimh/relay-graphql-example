const restify = require('restify');
const graphqlHTTP = require('express-graphql');
const MyGraphQLSchema = require('./schema');

const app = restify.createServer();

app.post(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: false,
  })
);

app.get(
  '/graphql',
  graphqlHTTP({
    schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.listen(4000);
