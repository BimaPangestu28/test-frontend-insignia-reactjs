import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
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
        <div className="section__contents mt-3 grid grid-cols-2 grid-rows-3 md:grid-rows-3 md:grid-cols-3 gap-2 md:gap-3 h-full grid-auto-rows-3">
          <div className="section__title flex items-center col-span-1 md:col-span-2 row-span-1 md:row-span-1">
            <div className="section__title__headline">
              <p className="font-size-24 color-base">Documents</p>
            </div>
            <div className="section__title__subheadline w-full">
              <p className="font-size-14 text-right color-base">Browse all documents</p>
            </div>
          </div>

          {documents.data?.map((document, index) => (
            <div
              key={`document-${document.id}`}
              className={
                index > 0
                  ? "section__content bg-base flex justify-between items-end p-3"
                  : "section__content bg-base flex justify-between items-end p-3 col-span-1 md:col-span-2 row-span-1 md:row-span-2"
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

          <div className="section__content border-solid border-2 border-color-base flex justify-center items-center p-3">
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
  );
}
