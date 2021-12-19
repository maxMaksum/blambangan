import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getProducts } from "../../lib/services";
import Post from "../../components/posts/Post";
import Categories from "../../components/posts/Categories";
import { servicesQuery } from "../../lib/graphql";
import {
  getServicesDetails,
  graphCmsRequest,
  getCategoriesDetails,
} from "../../lib/services";

function categories({ myCategoriesDetails }) {
  console.log(myCategoriesDetails.services);
  const categories = myCategoriesDetails.services
  return (
    <div>
      <Categories posts={categories} />
    </div>
  );
}

export default categories;

export async function getStaticPaths() {
  // const prod = await getProducts("http://localhost:4000/products");
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
