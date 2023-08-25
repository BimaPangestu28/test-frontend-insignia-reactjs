import type { V2_MetaFunction } from "@remix-run/node";
import Footer from "~/components/footer";
import Menu from "~/components/menu";
import Topbar from "~/components/topbar";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div id="content">
      <Topbar/>
      <Menu/>
      <Footer/>
    </div>
  );
}
