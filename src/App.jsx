import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Porfolio from "./components/Porfolio";
import SocialLinks from "./components/SocialLinks";

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Porfolio />
      <SocialLinks />
    </div>
  );
};

export default App;
