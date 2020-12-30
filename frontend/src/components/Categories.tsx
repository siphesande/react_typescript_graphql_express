import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { CATEGORIES_QUERY } from '../data/queries';
import { Button, Header, Subheader, CategoryContainer, WrapperDiv } from './CategoriesStyle.js'


const Categories: React.FC = () => {
  const { loading, error, data } = useQuery(CATEGORIES_QUERY);

  if (error) return <p>`Error! ${error.message}`</p>;

  return (
    <CategoryContainer>
      <div>
        <Header>Chuck Norris Jokes</Header>
        <img src="/chuck-norrislogo.png" alt="img" />
        <Subheader>Categories</Subheader>
        <hr/>
        <div>
          {loading ? (
            <h4> Loading ... </h4>
          ) : (
              <div>

                {
                  data.categories[0].categoryList.map((item, key) => (

                    <WrapperDiv key={key}>
                      <div>{item.toUpperCase()}</div>
                      <div><Link to={`/categories/${item}`}>
                        <Button>visit random {item} joke</Button>
                      </Link>
                      </div>
                      <hr/>
                    </WrapperDiv>
                    
                  ))
                }
                
              </div>
            )}
        </div>
      </div>
    </CategoryContainer>
  );
};




export default Categories;
