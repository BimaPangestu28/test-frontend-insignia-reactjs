import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChannelSection() {
  const channels = [
    "Google",
    "Dribbble",
    "Microsoft",
    "Behance",
    "Weather Channel",
    "Gurus",
    "iMedia",
    "Creativeye",
    "Khan Studios",
    "Yahoo",
  ];

  return (
    <div className="section w-full md:pl-5 sm:pl-0">
      <div className="section__title flex items-end justify-between">
        <div className="section__title__headline">
          <p className="md:text-2xl sm:text-sm color-base font-medium">Channels</p>
        </div>
        <div className="section__title__subheadline flex items-center">
          <p className="text-sm text-right color-base">Browse all channels</p>
          <FontAwesomeIcon icon={faArrowRight} className="md:hidden sm:block text-base text-sm ml-1" />
        </div>
      </div>

      <div className="h-30-rem mt-3 border-solid border-t-4 border-b-2 py-4 grid grid-cols-2 grid-rows-3 md:grid-rows-2 sm:grid-rows-3 md:grid-cols-2 sm:grid-cols-3 gap-2 md:gap-2 h-full border-color-base ">
        {channels.map((channel) => (
          <div className="w-full h-28 bg-base p-2 flex items-end" key={channel}>
            <p className="text-sm text-black">{channel}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
