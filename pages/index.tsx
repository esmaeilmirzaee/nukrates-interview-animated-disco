import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import Members from "../components/members";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div className="h-full w-full">
      <Masthead />
      <AboutUs />
      <Members />
      <Skills />
    </div>
  );
}
