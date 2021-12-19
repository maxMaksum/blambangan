import Link from "next/link";
import { useState } from "react";

function HeaderRight({ navigation, categories }) {
  // categories ? console.log(categories) : console.log("ok");
  const [cat, setCat] = useState(true);

  return (
    <div className=" flex items-center  justify-end w-full  text-gray-900 text-s space-x-8">
      <div className="">
        <div className="relative">
          <button
            onClick={() => setCat(!cat)}
            className="p-2 font-bold uppercase  cursor-pointer "
          >
            Categories
          </button>
          <div
            className={`bg-gray-100 min-h-40 absolute top-16 p-2 right-0 rounded shadow-xl ${
              cat ? `hidden` : ``
            }`}
          >
            {categories?.map((data) => (
              <div key={data.id} className="flex-col">
                <Link href={`/categories/${data.id}`}>
                  <a>
                  <p className=" font-bold uppercase cursor-pointer space-y-2">
                    {data.title}
                  </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        {!navigation?"":navigation.map((p) => (
          <div key={p.id} className="cursor-pointer">
            <Link href={`/${p.title.toLowerCase()}`}>
              <a>
              <p className=" p-2 font-bold uppercase ">{p.title}</p>
              </a>
            </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeaderRight;
