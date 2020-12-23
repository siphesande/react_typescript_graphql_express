const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const  schema  = require('./schema');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);


app.get('*', (req, res) => {
  res.send('Chuck Norris Jokes')
});

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Express GraphQL Server Now Running On localhost:${port}/graphql`));

