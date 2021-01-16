import './App.css';
import './assets/stylesheets/home.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Banner />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;

// using this color palette - https://colorhunt.co/palette/220004