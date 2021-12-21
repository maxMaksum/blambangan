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
  showVideo,
}) {
  
  return (
    <section className={"w-full h-96 sm:h-screen bg-gray-100 shadow-2xl"}>
        <div className="h-96 sm:h-screen">
          <ReactPlayer
            config={{
              youtube: {
                playerVars: { showinfo: 1 },
              },
            
            }}
          
            url={`https://www.youtube.com/watch?v=${data}`}
            width="100%"
            height="100%"
            style={{ position: "", top: "0", left: "0" }}
            controls={true}
            playing={playVideo}
          />
        </div>
    
    </section>
  );
}

export default Video;
