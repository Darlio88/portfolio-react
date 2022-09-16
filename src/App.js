
//importing components 
import Navbar from "./components/Navbar";

//importing colors
import {colors} from './assets/utils/colors'
import Intro from "./components/Intro";
import About from './components/About'
import Experience from './components/Experience'

function App() {
  return (
  <div 
  style={{backgroundColor:colors.whiteLight}}
  className="w-full h-full px-6 md:px-4">
    <Navbar />
    <Intro />
    <About />
    {/* <Experience /> */}
  </div>
  );
}

export default App;
