import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Footer from './component/footer/Footer';
import Navbar from "./component/header/Navbar";
import Home from './component/home/Home';


function App() {
  AOS.init();
  return (
    <div >
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
