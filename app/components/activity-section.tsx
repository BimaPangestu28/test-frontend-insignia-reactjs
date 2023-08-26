import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ActivitySection() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const response = await fetch(
      "https://dummyapi.io/data/v1/comment?limit=6",
      { headers: { "app-id": "63062f10c15e610efdda7176" } }
    );
    const data = await response.json();
    setComments(data);
  };

  return (
    <div className="section w-full md:pl-5 sm:pl-0">
      <div className="section__title flex items-end">
        <div className="section__title__headline">
          <p className="font-size-24 color-base">Activity</p>
        </div>
        <div className="section__title__subheadline w-full">
          <p className="font-size-14 text-right color-base">
            View timeline / Filter activities
          </p>
        </div>
      </div>

      <div className="h-30-rem mt-3 border-solid border-t-4 border-b-2 py-4 grid grid-cols-1 grid-rows-1 gap-4 border-color-base">
        {comments.data?.map((comment) => (
          <div className="flex justify-between" key={comment.id}>
            <div className="w-3/12 h-100 bg-base"></div>

            <div className="w-9/12 pl-3">
              <p className="font-size-14 font-medium color-base">
                {comment.owner.firstName + " " + comment.owner.lastName}{" "}
                <span className="font-size-10 font-light color-base">
                  commented
                </span>
              </p>
              <p className="font-size-10 truncate font-light color-base">
                {comment.message}
              </p>
              <div>
                <FontAwesomeIcon icon={faComment} className="font-size-10" />
                <span className="font-size-10 font-light ml-1 color-base">
                  {" "}
                  {comment.publishDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
