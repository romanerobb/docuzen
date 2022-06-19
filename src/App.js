import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './components/homepage';
import Navbar from './components/navbar';
import Footer from './components/footer';


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
                        {/* <Route path="user" element={<UserAccount />} />
                        <Route path="login" element={<UserLogin />} />
                        <Route path="register" element={<UserRegistration />} />
                        <Route path="messages" element={<UserMessages />} /> */}
                    </Routes>
                    
            </BrowserRouter>
</center>
</>
  );
}

export default App;
