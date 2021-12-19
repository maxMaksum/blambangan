import PostDeail from "../../components/posts/PostDeail";
import { getServicesDetails, graphCmsRequest } from "../../lib/services";
import { servicesQuery } from "../../lib/graphql";

function product({  myServicesDetails}) {
 
  const newProducts=myServicesDetails.service
 
  return <div>{<PostDeail  newFumi={newProducts}/>}</div>;
}

export default product;

export async function getStaticPaths() {
  const myNewService = await graphCmsRequest(servicesQuery);
  const myService = myNewService.services;
  const paths = myService?.map((p) => ({
    params: { product: p.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { product } = params;

  const myServicesDetails = await getServicesDetails(product);

  return {
    props: {
      myServicesDetails,
    },
  };
}
