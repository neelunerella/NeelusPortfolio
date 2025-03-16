
import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Reading } from "./components/Reading/Reading";
function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Reading />
    </div>
  );
}

export default App;
