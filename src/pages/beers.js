import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

const BeerGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
`;

const SingleBeerStyles=styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img{
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
    color: black;
    background: var(--grey);
  }
`

export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        name
        price
        image
        #        rating {
        #          average
        #          reviews
        #        }
      }
    }
  }
`;
export default function BeersPage({ data }) {
  return (
    <>
      <h2 className={"center"}>
        We have {data.beers.nodes.length} beers available
      </h2>
      <BeerGridStyles>
        {data.beers.nodes.map((beer) => {
          console.log(beer);
          return (
            <SingleBeerStyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              {beer.price}
            </SingleBeerStyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

