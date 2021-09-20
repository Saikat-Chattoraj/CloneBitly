import About from "../components/About";
import Brands from "../components/Brands";
import CtaButton from "../components/CtaButton";
import Faqs from "../components/Faqs";
import Feed from "../components/Feed";
import NavBar from "../components/NavBar";
import Searchbar from "../components/Searchbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Feed />
      <Searchbar />
      <About />
      <Brands/>
      <Faqs/>
      <CtaButton/>
    </div>
  );
}
