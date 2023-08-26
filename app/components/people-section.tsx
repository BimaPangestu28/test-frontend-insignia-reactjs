import { faArrowRight, faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function PeopleSection() {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetchPeople();
  }, []);

  const fetchPeople = async () => {
    const response = await fetch("https://dummyapi.io/data/v1/user?limit=5", {
      headers: { "app-id": "63062f10c15e610efdda7176" },
    });
    const data = await response.json();
    setPeoples(data);
  };

  return (
    <div className="section w-full">
      <div className="h-33-rem">
        <div className="section__contents mt-3 flex flex-wrap md:grid grid-cols-2 grid-rows-3 md:grid-rows-3 md:grid-cols-3 md:gap-2 md:gap-3 h-full grid-auto-rows-3">
          <div className="section__title w-full flex justify-between items-center col-span-1 md:col-span-2 row-span-1 md:row-span-1 mb-2 md:mb-0">
            <div className="section__title__headline">
              <p className="md:text-2xl text-sm color-base">People</p>
            </div>
            <div className="section__title__subheadline flex items-center">
              <p className="font-size-14 text-right color-base">View all</p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="font-size-14 inline md:hidden ml-1"
              />
            </div>
          </div>

          {peoples.data?.map((people, index) => (
            <div
              key={people.id}
              className={
                index > 0
                  ? "section__content bg-base flex justify-between items-end p-3 hidden md:inline"
                  : "section__content bg-base flex justify-between items-end p-3 col-span-1 md:col-span-2 row-span-1 md:row-span-2 hidden md:inline"
              }
            >
              <div>
                {index === 0 && (
                  <p className="font-size-16 text-black">
                    {people.firstName + " " + people.lastName}
                  </p>
                )}
                <p className="font-size-12 text-black">Software Engineer</p>
              </div>
              <div>
                <p className="font-size-12 text-black">{people.likes} views</p>
              </div>
            </div>
          ))}

          <div className="section__content border-solid border-2 border-color-base flex justify-center items-center p-3 hidden md:inline">
            <div className="flex justify-center items-center">
              <FontAwesomeIcon
                icon={faCircleDot}
                className="font-size-30 color-base"
              />
              <p className="font-size-12 ml-3 color-base">
                Show <br /> Your Work
              </p>
            </div>
          </div>

          <div className="inline md:hidden overflow-x-auto w-full">
            <div className="section__content-scroll flex">
              {peoples.data?.map((people, index) => (
                <div
                  key={`people-${people.id}`}
                  className="section__content bg-base flex flex-wrap items-end p-3 w-96 h-36 mr-4"
                  style={{ maxWidth: "150px", flex: "0 0 25rem" }}
                >
                  <div>
                    <p className="text-sm text-black">
                      {people.firstName + " " + people.lastName}
                    </p>
                    <p className="font-size-12 text-black font-light">
                      Software Engineer
                    </p>
                  </div>
                </div>
              ))}

              <div
                className="section__content border-solid border-2 border-color-base w-96 h-36 flex justify-center items-center p-3"
                style={{ maxWidth: "150px", flex: "0 0 25rem" }}
              >
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faCircleDot}
                    className="font-size-30 color-base"
                  />
                  <p className="font-size-12 ml-3 color-base">
                    Show <br /> Your Work
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
