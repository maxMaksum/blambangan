import Masonry from "react-masonry-css";
import { useState, useRef } from "react";
import Image from "next/image";

function Galery({ posts }) {
  const [showImage, setShowImage] = useState(false);
  const [imageCover, setImageCover] = useState("garment-2");

  const seeImage = (id) => {
    setShowImage(!showImage);
    setImageCover(id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 3,
    500: 2,
  };
  return (
    <div className="max-w-6xl">
      <div className="grid place-items-center mx-auto mt-6">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {posts?.map((p) => (
            <div
              key={p.id}
              className=" h-100 w-100 p-1 rounded-xl shadow-lg relative"
            >
              <Image
                onClick={() => seeImage(p.image)}
                // src={`/images01/${p.image}.jpeg `}
                src={p.images.url}
                alt={p.images.url}
                width={p.images.width}
                height={p.images.height}
                // layout="fill"
                className={`object-cover cursor-pointer bg-repeat-no-repeat rounded-lg shadow-lg`}
              />
            </div>
          ))}
        </Masonry>
      </div>
      <div
        className={`${
          !showImage
            ? `hidden`
            : `h-screen w-full bg-gray-50 absolute top-0 left-0 z-50 flex items-center justify-center`
        }`}
      >
        <Image
          // src={imageCover}
          src={`/images01/${imageCover}.jpeg`}
          // src={imageCover}
          layout="fill"
          alt={"album"}
          className="bg-contain bg-center bg-no-repeat h-96 w-100 mx-auto"
        />
        <div
          onClick={() => setShowImage(!showImage)}
          className="absolute top-2 right-2 h-10 w-10 rounded-full bg-green-500 "
        ></div>
      </div>
    </div>
  );
}

export default Galery;
