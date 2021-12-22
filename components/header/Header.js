import Image from "next/image";
import Link from "next/link";
import { HeaderSocial } from "../StaticData";
// import useFetch, { HeaderData } from "../../lib/services";
import { useState, useContext, useEffect } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import useSWR from "swr";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";
import { headerQuery, categoriesQuery } from "../../lib/graphql";
import {GraphCmsFether } from "../../lib/services";
import { UserContext } from '../card/Layout';

function Header() {
  const {smallMenu, setSmallMenu} = useContext(UserContext)

  // const newurl = `http://localhost:4000/headers`;
  const [displayMenu, setDisplayMenu] = useState(false);
  // const newHeader = () => {

  //   const myFetcher = async(query)=> await graphQLClient.request(query);
  //   const { data, error } = useSWR(headerQuery, myFetcher)
  //   if(data) return data.headers
  //   if(error)return error
  // };

  const myHeader = GraphCmsFether(headerQuery)?.headers;
  const myCategories = GraphCmsFether(categoriesQuery)?.newCategories;
  // console.log(myCategories)
  // const { header, error } = useSWR("123", newFetcher(headerQuery));

  // const fetcher = async () => await fetch(newurl).then((res) => res.json());

  // const { data, error } = useSWR("address", fetcher);

  // if (error) console.log(error);
  // if (data)
  //   console.log(
  //     "yay",
  //     data.map((d) => d.id)
  //   );

  // const [ndata] = useFetch("http://localhost:4000/headers");
  // const [social] = useFetch("http://localhost:4000/SocialMedia");
  // const [response] = useFetch("http://localhost:4000/products");

  // const categoriesA = response?.map((category) => category.category);
  // const categories = [...new Set(categoriesA)];

  const router = useRouter();

  const [show, setShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  const handleScrool = () => {
    setShow(window.pageYOffset < 200);
  };
  return (
    <header
      className={`mx-auto fixed top-0 left-0 right-0 max-w-6xl whitespace-nowrap  z-50 bg-gray-200  h-20 shadow-lg ${
        show
          ? "transition duration-500 ease-in-out visible"
          : "transition duration-500 ease-in-out invisible"
      }`}
    >
      {/* top header */}
      <div className="relative">
        <div className="flex items-center justify-between  h-20">
          <div className="flex items-center justify-center">
            <div className="rounded-full flex items-center relative h-14 w-14 p-2 rounded-full bg-green-500 shadow-2xl mx-2">
              <Image
                onClick={() => router.push("/")}
                src="/images01/LogoBalijava.png"
                layout="fill"
                className="cursor-pointer object-cover rounded-full "
                alt="Bali Java Logo"
              />
            </div>
            <h1 className="text-s uppercase sm:text-s text-gray-900 cursor-pointer">
              BaliJava Spirit
            </h1>
         
          </div>
          <div className="flex items-center justify-start">
              {HeaderSocial?.map((s) => (
                <div key={s.id} className="p-2">
                  <Link href={s.link}>
                    <a target="_blank">
                      <Image
                        src={`/images01/${s.image}`}
                        alt={s.title}
                        height={20}
                        width={20}
                        className="object-contain cursor-pointer"
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          {/* right */}
          <div className="hidden sm:flex flex-wrap  w-2/3 mr-10">
            <HeaderRight navigation={myHeader} categories={myCategories} />
          </div>
          <div
            className="flex items-center justify-around relative
          
          "
          >
            {smallMenu && (
              <div className="bg-gray-100 h-screen w-64 absolute -top-6 right-0 z-50">
                <p
                  className="text-2xl cursor-pointer font-bold text-right p-2 mr-4"
                  onClick={() => setSmallMenu(!smallMenu)}
                >
                  x
                </p>
                <HeaderMenu navigation={myHeader} categories={myCategories} />
              </div>
            )}

            <div
              // onClick={changeMenu}
              className="sm:hidden cursor-pointer mx-4 relative flex items-center"
            >
              <MenuIcon
                onClick={() => setSmallMenu(!smallMenu)}
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
