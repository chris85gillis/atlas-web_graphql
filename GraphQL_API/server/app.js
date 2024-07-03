const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const _ = require('lodash');
const mongoose = require('mongoose');

const app = express();
const mongoURI = 'mongodb+srv://chris85gillis:IGwvUJxX0eZHCt08@cluster0.9fen9wg.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to database');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  }
);

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable GraphiQL interface
}));

app.listen(4000, () => {
  console.log('GraphQL server running at http://localhost:4000/graphql');
});

