import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import VideoPost from "../video copy/VideoPost";
import PostDetailsImage from "./PostDetailsImage";
function PostDeail({ newFumi }) {
  const [showVideo, setShowVideo] = useState(false);

  const watchVideo = () => {
    setShowVideo(!showVideo);
  };


  return (
    <div className="flex flex-col items-center justify-center relative max-w-6xl mx-auto  bg-gray-500">
      <Link href="/">
        <a className="absolute top-0 h-10 w-10 left-0 z-20 bg-green-500 cursor-pointer">
          Home
        </a>
      </Link>

      <PostDetailsImage newFumi={newFumi} watchVideo={watchVideo}/>
      <VideoPost
        url={newFumi.videoUrl}
        watchVideo={watchVideo}
        showVideo={showVideo}
      />
    </div>
  );
}

export default PostDeail;
