import Head from "next/head";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
// import { getProducts } from "../lib/services";
import {picturesQuery } from "../lib/graphql";

import { graphCmsRequest } from "../lib/services";
import Galery from "../components/card/Images";
import { UserContext } from "../components/card/Layout";

export default function MyImage({ myPictures }) {
  const { smallMenu, setSmallMenu } = useContext(UserContext);
  const myPicturesNew = myPictures.images123

  return (
    <div className={styles.container}>
      <Head>
        <title>Images</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main onClick= {() => setSmallMenu(false)} className={styles.main}>
        <Galery myGalery={myPicturesNew} />
        {/* <Post posts={posts} /> */}
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
  const myPictures = await graphCmsRequest(picturesQuery);
  return {
    props: {
      // posts,
      myPictures: myPictures,
    },
  };
}
