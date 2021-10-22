import React from "react";
import { graphql } from "gatsby";

export default function SlicemasterPage () {
  return (
    <div>
      <p>Slicemaster</p>
    </div>
  );
};

export const query = graphql`
  query ($slug:String!){
    person:sanityPerson(slug:{current:{eq:$slug}}){
      name
      id
      description
      image{
        asset{
          fluid(maxWidth:1000,maxHeightL750){
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

