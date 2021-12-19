import Image from "next/image";
// import useFetch, { HeaderData } from "../../lib/services";
import { useState, useRef, useEffect } from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import useSWR from "swr";
import HeaderMenu from "./HeaderMenu";
import HeaderRight from "./HeaderRight";
import { headerQuery, categoriesQuery } from "../../lib/graphql";
import { graphQLClient, GraphCmsFether } from "../../lib/services";

function Header() {
  // const newurl = `http://localhost:4000/headers`;

  // const newHeader = () => {

  //   const myFetcher = async(query)=> await graphQLClient.request(query);
  //   const { data, error } = useSWR(headerQuery, myFetcher)
  //   if(data) return data.headers
  //   if(error)return error
  // };

  const myHeader = GraphCmsFether(headerQuery)?.headers;
  const myCategories = GraphCmsFether(categoriesQuery)?.newCategories;
  console.log(myCategories)
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
          <div className="flex items-center justify-center space-x-4">
            <div className="p-0  rounded-full flex items-center relative h-16 w-16 ml-4 p-2 rounded-full bg-green-500 shadow-2xl ">
              <Image
                onClick={() => router.push("/")}
                src="/images01/LogoBalijava.png"
                layout="fill"
                className="cursor-pointer rounded-full"
                alt="Bali Java Logo"
              />
            </div>
            <h1 className="text-xs sm:text-s text-gray-900 cursor-pointer">
              BaliJava Spirit
            </h1>
            <div className="flex items-center justify-between space-x-2">
              {/* {social?.map((s) => (
                <div key={s.id} className="text-s ">
                  <img
                    src={`/images01/${s.image}.png`}
                    className="cursor-pointer h-5 w-5 rounded full bg-contain bg-no-repeat bg-center"
                  />
                </div>
              ))} */}
            </div>
          </div>

          {/* right */}
          <div className="hidden sm:flex flex-wrap  w-2/3 mr-10">
            <HeaderRight navigation={myHeader} categories={myCategories} />
          </div>
          <div
            className="flex items-center justify-around
          
          "
          >
            <div
              // onClick={changeMenu}
              className="sm:hidden cursor-pointer mx-4 relative flex items-center"
            >
              <MenuIcon className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
