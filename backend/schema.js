const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema
} = require('graphql');


// 
const CategoryType = new GraphQLObjectType({
  name: 'Categories',
  description: `This represents a list of categories`,
  fields: () => ({
    categoryList: { type: new GraphQLList(GraphQLString) }
  })
});


// Joke Type
const JokeType = new GraphQLObjectType({
  name: 'Joke',
  description: `This represents a random Chuck Norris joke`,
  fields: {
    value: { type: GraphQLString },
    id: { type: GraphQLString }
  }
});

//This is the Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    joke: {
      type: JokeType,
      args: {
        category: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.chucknorris.io/jokes/random?category=${args.category}`)
          .then(res => res.data);
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve() {
        return axios
          .get(`https://api.chucknorris.io/jokes/categories`)
          .then(res => [{categoryList:res.data}]);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
