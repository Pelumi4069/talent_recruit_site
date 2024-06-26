import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
// import Home from "./Components/Home";
import About from './Components/About';
import Contact from "./Components/Contact";
import Frame from './Components/Frame';
import Signup from "./constants/Account/Signup";
import Login from "./constants/Account/Login";


const Layout = () => {
  return (
    <div>
       <Navbar />

      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<LandingPage />} />
      <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} /> 
    <Route path='/top' element={<Frame />} /> 
    <Route path='/signup' element={<Signup />} /> 
    <Route path='/login' element={<Login />} /> 
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
