import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Pricing from './components/pricing';
import PartnerUp from './components/partnerup';
import About from './components/about';
import Contact from './components/contact';
import Register from './components/register';


function App() {
  return (
<>
<center>
<img src="https://i.ibb.co/pXQRBss/Logo-Large.jpg" alt="docuzen App" width="700" height="200"></img>
<BrowserRouter>
                    
                    <br></br>
                    <Navbar />
                    <Routes>
                        <Route exact path="" element={<HomePage />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="partnerup" element={<PartnerUp />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="register" element={<Register />} />
                    </Routes>
                    <Footer />
            </BrowserRouter>
</center>
</>
  );
}

export default App;
