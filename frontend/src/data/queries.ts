import { gql } from '@apollo/client';

export const CATEGORIES_QUERY = gql`
  query CategoriesQuery {
    categories {
      categoryList
    }
  }
`;

export const JOKE_QUERY = gql`
query JokeQuery($category: String!) {
  joke(category: $category) {
    id
    value
    categories
  }
}

`;
