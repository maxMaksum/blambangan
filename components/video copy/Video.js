import ReactPlayer from "react-player/lazy"
import { XIcon } from "@heroicons/react/solid";

function Video({
  data,
  id,
  url,
  title,
  category,
  description,
  playVideo,
  watchVideo,
  closeVideo,
  showVideo,
}) {
  
 
  return (
    <section
      className={
        showVideo
          ? "hidden"
          : "absolute top-0 w-full h-96 sm:h-screen bg-gray-100 shadow-2xl"
      }
    >
      <div className="flex flex-col w-100  relative z-50">
       
      <div
          onClick={closeVideo}
          className="absolute top-2 right-2 h-6 w-6 rounded-full bg-red-500 text-white flex items-center justify-center cursor-pointer shadow-lg p-2"
        > <p>X</p> </div>
        <div className="h-96 sm:h-screen">
          <ReactPlayer
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
              // facebook: {
              //   appId: '12345'
              // }
            }}
            // url={`${`/videos01/${url ? url : `Embroidery-1`}.mp4`}`}
            url={`https://www.youtube.com/watch?v=${data}`}
            width="100%"
            height="100%"
            style={{ position: "", top: "0", left: "0" }}
            controls={true}
            playing={playVideo}
          />
        </div>
      </div>
    </section>
  );
}

export default Video;
