import { useState, useEffect } from "react";
import { headerQuery } from "./graphql";
import { request, GraphQLClient, gql } from "graphql-request";
import useSWR from "swr";

const url = process.env.URL;

export const graphQLClient = new GraphQLClient(url, {
  headers: {
    authorization: process.env.TOKEN,
  },
});

export const getCategoriesDetails = async (id) => {
  const query = gql`
    query MyQuery($id: ID) {
      services(where: { newCategory: { id_contains: $id } }) {
        id
        image {
          id
          url
          width
          height
        }
        title
        description

        newCategory {
          id
          title
        }
      }
    }
  `;

  const variables = {
    id: id,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG;
};

export const getServicesDetails = async (id) => {
  const query = gql`
    query ($id: ID) {
      service(where: { id: $id }) {
        title
        id
        videoUrl
        description
        newCategory {
          title
        }
        images {
          url
          width
          height
          id
        }
        image {
          url
          height
          width
        }
      }
    }
  `;

  const variables = {
    id: id,
  };
  const dataG = await graphQLClient.request(query, variables);
  return dataG;
};

export const GraphCmsFether = (query) => {
  const myFetcher = async (query) => await graphQLClient.request(query);
  const { data, error } = useSWR(query, myFetcher);
  if (data) return data;
  if (error) return error;
};

export const graphCmsRequest = async (query) => {
  const myFetcher = await graphQLClient.request(query);
  return myFetcher;
};

// const useFetch = (url) => {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, [url]);

//   return [data];
// };

// export default useFetch;

// export const getProducts = async (url) => {
//   const response = await fetch(url);
//   const data = response.json();
//   return data;
// };
