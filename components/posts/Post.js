import Link from "next/link";
import Image from "next/image";

function Post({ posts, services }) {

  return (
    <div className="bg-white container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {services?.map((p) => (
        <div
         key={p.id}
          className={
            "max-h-96 max-w-96 cursor-pointer bg-gray-100 rounded shadow-xl gap-2"
          }
        >
          <div className="h-96 relative flex flex-col">
            <div className=" h-2/3 w-full rounded relative">
              <Link href={`/products/${p.id}`}>
                <a>
                  <Image
                    src={p.image.url}
                    alt={p.title}
                    layout="fill"
                    className="bg-contain bg-no-repeat bg-center h-full "
                  />
                </a>
              </Link>
            </div>

            
            <div className="bg-gray-100 h-1/3 flex justify-start items-center p-2">
              <div className=" mx-auto flex flex-col justify-center item-center w-24">
                <span className="text-3xl rounded-full  h-16 w-16 bg-red-100 flex justify-center items-center">
                  {p.newCategory.title.charAt(0).toUpperCase()}
                </span>
                <p className="uppercase text-center text-xs mt-2 ">
                  {p.newCategory.title}
                </p>
              </div>
              <div className="ml-2">
                <div className="text-xl font-medium">{p.title}</div>
                <div className="text-xs line-clamp-2"> {p.description}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
