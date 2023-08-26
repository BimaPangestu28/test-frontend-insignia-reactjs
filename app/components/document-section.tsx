import { faArrowRight, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function DocumentSection() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const response = await fetch("https://dummyapi.io/data/v1/post?limit=5", {
      headers: { "app-id": "63062f10c15e610efdda7176" },
    });
    const data = await response.json();
    setDocuments(data);
  };

  return (
    <div className="section w-full">
      <div className="h-33-rem">
        <div className="section__contents mt-3 flex flex-wrap md:grid grid-cols-2 grid-rows-3 md:grid-rows-3 md:grid-cols-3 md:gap-2 md:gap-3 h-full grid-auto-rows-3">
          <div className="section__title w-full flex justify-between items-center col-span-1 md:col-span-2 row-span-1 md:row-span-1 mb-2 md:mb-0">
            <div className="section__title__headline">
              <p className="md:text-2xl text-sm color-base">Documents</p>
            </div>
            <div className="section__title__subheadline">
              <p className="text-sm text-right color-base hidden md:inline font-light">
                Browse all documents
              </p>

              <div className="inline md:hidden flex items-center">
                <p className="text-sm text-right color-base font-light">
                  Browse all
                </p>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="md:hidden sm:block text-sm text-sm ml-1 font-light"
                />
              </div>
            </div>
          </div>

          {documents.data?.map((document, index) => (
            <div
              key={`document-${document.id}`}
              className={
                index > 0
                  ? "section__content bg-base justify-between items-end p-3 hidden md:flex"
                  : "section__content bg-base justify-between items-end p-3 col-span-1 md:col-span-2 row-span-1 md:row-span-2 hidden md:flex"
              }
            >
              <div>
                {index === 0 && (
                  <p className="font-size-16 text-black">{document.text}</p>
                )}
                <p className="font-size-12 text-black">
                  {document.owner.firstName + " " + document.owner.lastName}
                </p>
              </div>
              <div>
                <p className="font-size-12 text-black">
                  {document.likes} views
                </p>
              </div>
            </div>
          ))}

          <div className="section__content border-solid border-2 border-color-base justify-center items-center p-3 hidden md:flex">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="color-base font-size-30"
              />
              <p className="font-size-12 color-base ml-3">
                Share <br /> Your Document
              </p>
            </div>
          </div>

          <div className="inline md:hidden overflow-x-auto w-full">
            <div className="section__content-scroll flex">
              {documents.data?.map((document, index) => (
                <div
                  key={`document-${document.id}`}
                  className="section__content bg-base flex flex-wrap items-end p-3 w-40 h-40 mr-4"
                  style={{ maxWidth: "150px", flex: "0 0 25rem" }}
                >
                  <div className="w-full">
                    <p className="text-sm text-black truncate">
                      {document.text}
                    </p>
                    <p className="text-xs text-black font-light">
                      {document.owner.firstName + " " + document.owner.lastName}
                    </p>
                    <div className="bg-black w-6 h-px my-2"></div>
                    <p className="text-xs text-black">{document.likes} views</p>
                  </div>
                </div>
              ))}

              <div
                className="section__content border-solid border-2 border-color-base flex justify-center items-center p-3 w-60 h-40 mr-4"
                style={{ maxWidth: "150px", flex: "0 0 25rem" }}
              >
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="color-base font-size-30"
                  />
                  <p className="font-size-12 color-base ml-3">
                    Share <br /> Your Document
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
