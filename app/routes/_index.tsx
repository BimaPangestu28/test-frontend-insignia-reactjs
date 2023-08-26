import type { V2_MetaFunction } from "@remix-run/node";
import ActivitySection from "~/components/activity-section";
import ChannelSection from "~/components/channel-section";
import DocumentSection from "~/components/document-section";
import Footer from "~/components/footer";
import Menu from "~/components/menu";
import PeopleSection from "~/components/people-section";
import Topbar from "~/components/topbar";
import VideoSection from "~/components/video-section";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div id="content">
      <Topbar />
      <Menu />

      <div className="flex justify-between flex-wrap">
        <div className="justify-between md:w-8/12	sm:w-full">
          <VideoSection />
        </div>

        <div className="justify-between md:w-4/12 sm:w-full">
          <ActivitySection />
        </div>
      </div>

      <div className="flex justify-between md:flex-wrap sm:flex-col md:flex-row">
        <div className=" w-8/12	mt-10">
          <PeopleSection />
        </div>

        <div className="justify-between md:w-4/12 mt-10 sm:w-100">
          <ChannelSection />
        </div>

        <div className="flex justify-between w-8/12	mt-10">
        <DocumentSection />
      </div>
      </div>

      

      <Footer />
    </div>
  );
}
