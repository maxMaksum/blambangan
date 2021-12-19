import ReactPlayer from "react-player/lazy";
import { useState, useEffect } from "react";
import { PlusIcon, XIcon } from "@heroicons/react/solid";

function Video({url, playVideo, watchVideo, showVideo }) {

  return (
    <section
      className={
        showVideo
          ? "hidden"
          : "absolute top-0 w-full h-96 sm:h-screen bg-gray-300 shadow-2xl"
      }
    >
      <div className="flex flex-col w-100  relative z-50">
        <div className="h-96 sm:h-screen">
          <ReactPlayer
            // url={`${`/videos01/${url ? url : `Embroidery-1`}.mp4`}`}
            url={url}
            width="100%"
            height="100%"
            style={{ position: "", top: "0", left: "0" }}
            controls={true}
            playing={playVideo}
          />
        </div>
        <div
          onClick={() => watchVideo()}
          className="h-5 w-5 bg-green-500 top-4 right-2 absolute cursor-pointer rounded-full"
        ></div>
      </div>
    
    </section>
  );
}

export default Video;
