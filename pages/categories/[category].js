import React, { useContext } from "react";
import Categories from "../../components/posts/Categories";
import { servicesQuery } from "../../lib/graphql";
import { graphCmsRequest, getCategoriesDetails } from "../../lib/services";

import { UserContext } from "../../components/card/Layout";

function MyCategories({ myCategoriesDetails }) {

  const { smallMenu, setSmallMenu } = useContext(UserContext);
  const categories = myCategoriesDetails.services;
  return (
    <div onClick={() => setSmallMenu(false)}>
      <Categories posts={categories} />
    </div>
  );
}

export default MyCategories;

export async function getStaticPaths() {
  const myNewService = await graphCmsRequest(servicesQuery);
  const myService = myNewService.services;
  const paths = myService.map((p) => ({
    params: { category: p.newCategory.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { category } = params;

  // const newProducts = await getProducts(
  //   `http://localhost:4000/products?category=${category}`
  // );
  // console.log(newProducts);
  const myCategoriesDetails = await getCategoriesDetails(category);
  return {
    props: {
      myCategoriesDetails,
    },
  };
}
