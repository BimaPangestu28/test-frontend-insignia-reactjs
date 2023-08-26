import {
  faArrowCircleUp,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function VideoSection() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    const response = await fetch("https://dummyapi.io/data/v1/post?limit=5", {
      headers: { "app-id": "63062f10c15e610efdda7176" },
    });
    const data = await response.json();
    setVideos(data);
  };

  return (
    <div className="section w-full">
      <div className="h-33-rem">
        <div className="section__contents mt-3 flex flex-wrap md:grid grid-cols-2 grid-rows-3 md:grid-rows-3 md:grid-cols-3 md:gap-2 md:gap-3 h-full grid-auto-rows-3">
          <div className="section__title w-full flex justify-between items-center col-span-1 md:col-span-2 row-span-1 md:row-span-1 mb-2 md:mb-0">
            <div className="section__title__headline">
              <p className="md:text-2xl text-sm color-base">Videos</p>
            </div>
            <div className="section__title__subheadline inline md:hidden flex items-center">
              <p className="text-sm text-right color-base">Browse all videos</p>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="md:hidden sm:block text-sm text-sm ml-1 font-light"
              />
            </div>
          </div>

          {videos.data?.map((video, index) => (
            <div
              key={video.id}
              className={
                index > 0
                  ? "section__content bg-base flex justify-between items-end p-3 hidden md:inline"
                  : "section__content bg-base flex justify-between items-end p-3 col-span-1 md:col-span-2 row-span-1 md:row-span-2 hidden md:inline"
              }
            >
              <div>
                {index === 0 && (
                  <p className="font-size-16 text-black">{video.text}</p>
                )}
                <p className="font-size-12 text-black">
                  {video.owner.firstName + " " + video.owner.lastName}
                </p>
              </div>
              <div>
                <p className="font-size-12 text-black">{video.likes} views</p>
              </div>
            </div>
          ))}

          <div className="section__content border-solid border-2 flex justify-center items-center p-3 border-color-base hidden md:inline">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faArrowCircleUp}
                className="font-size-30 color-base"
              />
              <p className="font-size-12 ml-3 color-base">
                Upload <br /> Your Own Video
              </p>
            </div>
          </div>

          <div className="inline md:hidden overflow-x-auto w-full">
            <div className="section__content-scroll flex">
              {videos.data?.map((video, index) => (
                <div
                  key={`video-${video.id}`}
                  className="section__content bg-base flex flex-wrap items-end p-3 w-96 h-40 mr-4"
                  style={{ maxWidth: "300px", flex: "0 0 25rem" }}
                >
                  <div className="w-full">
                    <p className="text-sm text-black truncate">{video.text}</p>
                    <p className="text-xs text-black">
                      {video.owner.firstName + " " + video.owner.lastName}
                    </p>
                    <p className="text-xs text-black">{video.likes} views</p>
                  </div>
                </div>
              ))}
              <div
                className="section__content border-solid border-2 flex justify-center w-96 h-40 items-center p-3 border-color-base"
                style={{ maxWidth: "300px", flex: "0 0 25rem" }}
              >
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faArrowCircleUp}
                    className="font-size-30 color-base"
                  />
                  <p className="font-size-12 ml-3 color-base">
                    Upload <br /> Your Own Video
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
