import React from "react";
import Profile from "../components/card/Profile";

import MyBanner from "../components/card/Banner";
import { servicesQuery, bannersQuery , profilesQuery} from "../lib/graphql";
import { graphCmsRequest, getServicesDetails } from "../lib/services";
// import { getProducts } from "../lib/services";
function profile({ myProfile, myBanner }) {

  return (
    <div className="mt-20">
      <div>
        <MyBanner banner={myBanner} />
      </div>
      <div>
        {myProfile.map((p) => (
          <Profile
            key={p.id}
            id={p.id}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>

     
    </div>
  );
}

export default profile;

export async function getStaticProps() {
  const myProfile = await graphCmsRequest(profilesQuery);
  const myBanner = await graphCmsRequest(bannersQuery);
  // const aboutUs = await getProducts("http://localhost:4000/aboutUs");
  // const banner = await getProducts("http://localhost:4000/banner");

  return {
    props: {
      myProfile:myProfile.profiles,
      myBanner:myBanner.banners
     
    },
  };
}
