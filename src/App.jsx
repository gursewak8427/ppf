import "./App.css";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects/>
      
    </>
  );
}

export default App;
