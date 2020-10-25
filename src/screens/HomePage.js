import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import MyServices from "../components/MyServices/MyServices";
import AboutMe from "../components/AboutMe/AboutMe";
import MyWork from "../components/MyWork/MyWork";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </>
  );
}

export default HomePage;
