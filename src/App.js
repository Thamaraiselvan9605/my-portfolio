import "./App.css";
import Navbar from "./components/Navbar";
import HomeBlock from "./components/Home";
import AboutBlock from "./components/About";
import SkillsBlock from "./components/Skills";
import ExperienceBlock from "./components/Experinces";
import WroksBlock from "./components/Works";
import ContackBlock from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="content">
      <Navbar></Navbar>
      <div
        data-bs-spy="scroll"
        data-bs-target="#navbar-scroll"
        data-bs-smooth-scroll="true"
        // clase="rounded-bottom"
      >
        <HomeBlock />
        <AboutBlock />
        <SkillsBlock />
        <ExperienceBlock />
        <WroksBlock />
        <ContackBlock />
        <Footer />
      </div>
    </div>
  );
}

export default App;
