import React from "react";
import Image from "next/image";
import { useState, useRef } from "react";
import { PlayIcon } from "@heroicons/react/outline";

PlayIcon
function PostDetailsImage({ newFumi, watchVideo }) {
  const [showImage, setShowImage] = useState(false);
  const [newUrl, setNewUrl] = useState("");

  const passUrl = (abc) => {
    setNewUrl(abc);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const seeImage = () => {
    setShowImage(!showImage);
    if (newUrl !== "") setNewUrl("");
  };
  return (
    <div className=" h-full w-full flex flex-col relative bg-gray-100">
      <div className="bg-green-500  h-96 sm:h-screen w-full relative">
        <Image
          src={newFumi.image.url}
          layout="fill"
          // width={newFumi.image.width}
          // heigth={newFumi.image.heigth}
          alt="test"
          className="bg-contain h-96  max-h-full w-100"
        />
        <div
          onClick={watchVideo}
          className="absolute w-full h-full top-1/2"
        >
          <di className="cursor-pointer flex items-center justify-center">
            <PlayIcon className="w-20 h-20 text-red-700 text-center" />
          </di>
          
        </div>
      </div>

      <div className="bg-green-500 max-w-full relative">
        <div className="text-xl font-md italic text-gray-600 p-2">
          {newFumi.newCategory.title}
        </div>
        <div className="text-center text-2xl text-gray-800">
          {" "}
          {newFumi.title}
        </div>
        <div>
          <p className="mx-auto px-4">{newFumi.description}</p>
        </div>
      </div>

      <div className="mt-10 flex flex-no-wrap overflow-x-scroll overflow-y-hidden scrolling-touch items-start mb-8">
        {newFumi.images.map((image, index) => (
          <div
            key={index}
            className="h-64 bg-gray-200  p-2 flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border cursor-pointer relative"
            onClick={() => seeImage()}
          >
            <div className="relative max-h-96 max-w-100 shadow-lg">
              <Image
                onClick={() => passUrl(image.url)}
                src={`${image.url}`}
                // layout="fill"
                width={400}
                height={300}
                // src={`/images01/${image.url}.jpeg`}
                className="object-scale-down bg-center bg-no-repeat rounded mx-auto rounded-lg"
                alt={image.title}
              />
            </div>
          </div>
        ))}
      </div>

      {showImage && (
        <div className="h-96 sm:h-screen w-full bg-red-500 absolute top-0">
          <div className="h-full w-full bg-red-500 relative">
            <div
              onClick={seeImage}
              className="h-10 w-10 bg-green-500 rounded-full absolute top-0 right-0 cursor-pointer z-50"
            ></div>

            <Image
              src={newUrl}
              layout="fill"
              alt="Bali Java Galery"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default PostDetailsImage;
