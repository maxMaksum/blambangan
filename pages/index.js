import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
// import { getProducts } from "../lib/services";
import Post from "../components/posts/Post";
import { servicesQuery, bannersQuery } from "../lib/graphql";
import { graphCmsRequest} from "../lib/services";
import VideoHome from "../components/video copy/VideoHome"
import { UserContext } from "../components/card/Layout";

export default function Home({ posts, myServices, myBanner }) {
  const { smallMenu, setSmallMenu } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
     
        {/* <MyBanner banner={myBanner} /> */}
      </div>

      <main onClick= {() => setSmallMenu(false)} className={styles.main }>
       
        <div>
        <div className="bg-red-500 h-96 sm:h-screen mb-2 relative mt-4 z-10">
          <VideoHome data={"cGnoIVcQRXA"}/>
        </div>
        <Post posts={posts} services={myServices} />
       
        </div>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  // const posts = await getProducts("http://localhost:4000/products");
  const myServices = await graphCmsRequest(servicesQuery);
  const myBanner = await graphCmsRequest(bannersQuery);
  // const myServicesDetails = await getServicesDetails("f5k21wz0b87qzd858ge");
  // console.log(myServicesDetails);
  return {
    props: {
      // posts,
      myServices: myServices.services,
      myBanner: myBanner.banners
    },
  };
}
