const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const _ = require('lodash');

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL interface
}));

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});
