import Masonry from "react-masonry-css";
import { useState, useRef } from "react";
import Image from "next/image";

function Galery({ myGalery}) {
  const [showImage, setShowImage] = useState(false);
  const [imageCover, setImageCover] = useState({ id: "ckvdhcmeg4sh30b88mezh0vd1", url: "https://media.graphcms.com/X24wFPrVQhmlisWo6J3r", width: 740, height: 1600 });

  const seeImage = (id) => {
    setShowImage(!showImage);
    
  };

  const passImageCover =(id) => {
   
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
          {myGalery?.map((p) => (
            <div
            onClick={() => passImageCover(p.images)}
              
              key={p.id}
              className=" h-100 w-100 p-1 rounded-xl shadow-lg relative"
            >
              <Image
                onClick={() => seeImage()}
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
        <div className="relative bg-gray-500 flex items-center justify-center">
          <div className="h-100 w-100 bg-blue-500 relative">
            <Image
              // src={imageCover}
                src={imageCover.url}
                alt={imageCover.url}
                width={imageCover.width}
                height={imageCover.height}
              // src={imageCover}
              // layout="fill"
              // alt={"album"}
              className="bg-contain bg-center bg-no-repeat mx-auto"
            />
          </div>
        </div>

        <div
          onClick={() => setShowImage(!showImage)}
          className="absolute top-2 right-2 h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center cursor-pointer shadow-lg p-2"
        > <p>X</p> </div>
      </div>
    </div>
  );
}

export default Galery;
