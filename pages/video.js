import React, { useState, useContext } from "react";
import Video from "../components/video copy/Video";
import { UserContext } from "../components/card/Layout";

function NewVideo({ posts, results }) {
  const { smallMenu, setSmallMenu } = useContext(UserContext);

  const [showVideo, setShowVideo] = useState(true);
  const [data, setData] = useState();

 
  // const newUrl = youtubeUrl?.map((y) => y.snippet.resourceId.videoId);
  // const newImage = youtubeUrl?.map((y) => y.snippet.thumbnails.high.url);

  const watchVideo = (p) => {
    setShowVideo(!showVideo);
    setData(p);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeVideo = () => {
    setShowVideo(!showVideo);
    setData("");
    console.log("close");
  };

  return (
    <div>
      <div onClick= {() => setSmallMenu(false)} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {results?.map((p) => (
          <div
            //   onClick={() => changeBackGroundColor(p.id)}
            //   ref={(element) => {
            //     box.current[p.id] = element;
            //   }}
            key={p.snippet.title}
            className={
              "h-96 max-w-96 cursor-pointer bg-gray-50 rounded shadow-xl"
            }
          >
            <div className="h-full relative flex flex-col">
              {/* <Link href={`/products/${p.title}`}> */}
              <div
                onClick={() => watchVideo(p.snippet.resourceId.videoId)}
                // onClick={() => seeImage(p.id)}

                style={{
                  // backgroundImage: `url(${`/images01/${p.image}.jpeg `})`,
                  backgroundImage: `url(${p.snippet.thumbnails?.high.url})`,
                }}
                className="bg-contain bg-no-repeat bg-center h-2/3  w-full rounded"
              ></div>
              {/* </Link> */}
              <div className="bg-gray-100 h-1/3 flex justify-start items-center p-2">
                <div className="  mr-2 flex flex-col justify-center item-center w-20">
                  <span className="text-3xl rounded-full  h-16 w-16 bg-red-100 flex justify-center items-center">
                    {p.snippet.channelTitle.charAt(0).toUpperCase()}
                  </span>
                  {/* <p className="uppercase pr-4 text-xs mt-2">{p.snippet.channelTitle}</p> */}
                </div>
                <div className="ml-2">
                  <div className="text-xl font-medium">{p.snippet.title}</div>
                  <div className="text-xs line-clamp-2">
                    {" "}
                    {p.snippet.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Video
        watchVideo={watchVideo}
        showVideo={showVideo}
        closeVideo={closeVideo}
        data={data}
        id={data?.id}
        url={data}
        title={data?.title}
        description={data?.description}
        category={data?.category}
      />
    </div>
  );
}

export default NewVideo;

export async function getStaticProps() {
  const MY_PLAYLIST = "PL0jdMwHzGmwAbIQTJjBtHMR_N9Z0y0Qo-";
  const API_KEY = "AIzaSyBuU7UmgZ-TmGSIvp1kZZZGem-7bHZonDA";
  const REQUEST_URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${MY_PLAYLIST}&key=${API_KEY}&maxResults=15`;

  const response = await fetch(REQUEST_URL);
  const results = await response.json();
  // const posts = await getProducts("http://localhost:4000/video");

  // https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUVe6mUpgv2PvSfQcbqRfKow&key=[YOUR_API_KEY]'
  return {
    props: { results: results.items },
    revalidate: 10,
  };
}
