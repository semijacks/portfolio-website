import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import MyServices from "./components/MyServices/MyServices";
import AboutMe from "./components/AboutMe/AboutMe";
import MyWork from "./components/MyWork/MyWork";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <MyServices />
      <AboutMe />
      <MyWork />
      <Footer />
    </div>
  );
}

export default App;
