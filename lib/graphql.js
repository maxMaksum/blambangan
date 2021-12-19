import { gql } from "graphql-request";

export const profilesQuery = gql`
  query MyQuery {
    profiles {
      id
      title
      description {
        html
      }
    }
  }
`;

export const categoriesQuery = gql`
  query MyQuery {
    newCategories {
      title
      id
    }
  }
`;

export const bannersQuery = gql`
  query MyQuery {
    banners {
      id
      title
      images {
        height
        url
        width
      }
    }
  }
`;

export const headerQuery = gql`
  query MyQuery {
    headers {
      id
      title
    }
  }
`;

export const picturesQuery = gql`
  query MyQuery {
    images123 {
      id
      images {
        id
        url
        width
        height
      }
    }
  }
`;

export const servicesQuery = gql`
  query MyQuery {
    services {
      id
      image {
        id
        url
        width
        height
      }
      images {
        id
        url
        width
        height
      }
      title
      videoUrl
      newCategory {
        id
        title
      }
      description
    }
  }
`;
